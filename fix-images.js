const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(function(file) {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else {
      if (file.endsWith('.tsx') || file.endsWith('.ts')) {
        results.push(file);
      }
    }
  });
  return results;
}

const files = walk(path.join(__dirname, 'src'));

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  let changed = false;

  // Fix `<img src={varName}` where varName is an imported image
  const imgRegex = /<img\s+([^>]*?)src=\{([a-zA-Z0-9_]+)\}/g;
  if (imgRegex.test(content)) {
    content = content.replace(imgRegex, '<img $1src={$2.src || $2}');
    changed = true;
  }
  
  // Fix `src={d.image}` -> `src={d.image.src || d.image}`
  const propImgRegex = /<img\s+([^>]*?)src=\{([a-zA-Z0-9_]+\.image)\}/g;
  if (propImgRegex.test(content)) {
    content = content.replace(propImgRegex, '<img $1src={$2.src || $2}');
    changed = true;
  }

  // Also in menu.ts, `export type Dish = { ... image?: string; }` -> `image?: any;`
  if (file.endsWith('menu.ts')) {
    if (content.includes('image?: string;')) {
      content = content.replace('image?: string;', 'image?: any;');
      changed = true;
    }
  }

  if (changed) {
    fs.writeFileSync(file, content);
    console.log(`Fixed images in ${file}`);
  }
}
