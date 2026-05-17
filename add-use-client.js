const fs = require('fs');
const path = require('path');

const filesToUpdate = [
  'src/components/site-header.tsx',
  'src/components/site-footer.tsx',
  'src/app/page.tsx',
  'src/app/about/page.tsx',
  'src/app/catering/page.tsx',
  'src/app/contact/page.tsx',
  'src/app/gallery/page.tsx',
  'src/app/menu/page.tsx',
  'src/app/order/page.tsx',
];

for (const file of filesToUpdate) {
  const filePath = path.join(__dirname, file);
  if (fs.existsSync(filePath)) {
    const content = fs.readFileSync(filePath, 'utf8');
    if (!content.startsWith('"use client";')) {
      fs.writeFileSync(filePath, '"use client";\n' + content);
      console.log(`Added "use client" to ${file}`);
    }
  }
}
