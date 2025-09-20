import { readFileSync, writeFileSync } from 'fs';
import { basename } from 'path';

const folderName = basename(process.cwd());
const pkgPath = './package.json';

const pkg = JSON.parse(readFileSync(pkgPath, 'utf-8'));
pkg.name = folderName;
writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + '\n');

console.log(`✅ package.json name set to "${folderName}"`);
