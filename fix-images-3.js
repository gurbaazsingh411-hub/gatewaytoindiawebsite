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

  // Replace src={($1 as any)?.src || ($1 as string)} with src={($1 as any)?.src || ($1 as any)}
  const imgRegex = /src=\{\(([a-zA-Z0-9_\.]+)\sas\sany\)\?\.src\s\|\|\s\(\1\sas\sstring\)\}/g;
  if (imgRegex.test(content)) {
    content = content.replace(imgRegex, 'src={($1 as any)?.src || ($1 as any)}');
    changed = true;
  }

  if (changed) {
    fs.writeFileSync(file, content);
    console.log(`Fixed images yet again in ${file}`);
  }
}
