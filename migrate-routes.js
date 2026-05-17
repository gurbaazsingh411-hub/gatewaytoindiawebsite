const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '../gateway-gourmet-revamp-main/src/routes');
const destDir = path.join(__dirname, 'src/app');

// Ensure destDir exists
if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

const files = fs.readdirSync(srcDir).filter(f => f.endsWith('.tsx') && f !== '__root.tsx');

for (const file of files) {
  const isIndex = file === 'index.tsx';
  const name = file.replace('.tsx', '');
  const outDir = isIndex ? destDir : path.join(destDir, name);
  
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  let content = fs.readFileSync(path.join(srcDir, file), 'utf8');

  // 1. Handle imports
  content = content.replace(/import \{.*?Link.*?\} from "@tanstack\/react-router";/g, 'import Link from "next/link";');
  content = content.replace(/import \{.*?createFileRoute.*?\} from "@tanstack\/react-router";/g, '');

  // 2. Remove route definition
  content = content.replace(/export const Route = createFileRoute\([^)]+\)\([\s\S]*?\}\);/g, '');

  // 3. Replace Link `to=` with `href=`
  content = content.replace(/<Link(.*?)to=/g, '<Link$1href=');

  // 4. Change function X() to export default function Page()
  // Wait, let's find the main function. Usually it's `function Home()`, `function About()`, etc.
  // We can just find `function ComponentName()` and export it as default if not exported.
  // Actually, all these files have exactly one function component returning JSX (the page).
  const functionMatch = content.match(/function\s+([A-Z]\w+)\s*\(/);
  if (functionMatch) {
    const fnName = functionMatch[1];
    content = content.replace(new RegExp(`function ${fnName}\\s*\\(`, 'g'), `export default function ${fnName}(`);
  }

  // Also remove unused imports or empty import lines left behind
  content = content.replace(/import\s*\{\s*\}\s*from\s*["'][^"']+["'];/g, '');

  fs.writeFileSync(path.join(outDir, 'page.tsx'), content.trim());
  console.log(`Migrated ${file} -> ${isIndex ? 'app/page.tsx' : `app/${name}/page.tsx`}`);
}

// Now write layout.tsx manually
const layoutContent = `
import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "../globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Gateway to India — Authentic North Indian Cuisine",
  description: "Family-owned Indian restaurant serving authentic North Indian cuisine.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={\`\${playfair.variable} \${inter.variable} min-h-screen flex flex-col font-sans antialiased\`}>
        <SiteHeader />
        <main className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
`;

fs.writeFileSync(path.join(destDir, 'layout.tsx'), layoutContent.trim());
console.log('Created app/layout.tsx');
