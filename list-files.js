const fs = require('fs');
const path = require('path');

// Folders to ignore
const IGNORED_FOLDERS = new Set([
    'node_modules',
    '.next',
    'dist',
    '.git',
    'out',
    'public',
    'ui'
]);

// Files to ignore
const IGNORED_FILES = new Set([
    'README.md',
    'package-lock.json',
    'pnpm-lock.yaml',
    'yarn.lock',
    'all_files.txt',
    'list-files.js',
    '.DS_Store',
    // '.env',
    // '.env.local',
    // '.env.development',
    // '.env.production',
    // '.env.test',
    '.eslintignore',
    '.eslintrc',
    '.prettierignore',
    '.prettierrc',
    'tsconfig.json',
    'jsconfig.json',
    'pnpm-workspace.yaml',
    'yarn-workspace.yaml',
    'lerna.json',
    'turbo.json'
]);

// Extensions to ignore
const IGNORED_EXTENSIONS = new Set([
    '.png',
    '.jpg',
    '.jpeg',
    '.gif',
    '.bmp',
    '.svg',
    '.webp',
    '.ico',
    '.tiff',
    '.psd',
    '.json',
    '.mjs',
    '.yaml',
    '.yml'
]);

function shouldIgnore(filePath, fileName) {
    const ext = path.extname(fileName).toLowerCase();

    return (
        IGNORED_FILES.has(fileName) ||
        IGNORED_EXTENSIONS.has(ext)
    );
}

// Recursive file reader
function listFiles(dirPath, fileList = []) {
    const entries = fs.readdirSync(dirPath, { withFileTypes: true });

    for (const entry of entries) {
        const fullPath = path.join(dirPath, entry.name);

        // Ignore folders
        if (entry.isDirectory()) {
            if (IGNORED_FOLDERS.has(entry.name)) {
                continue;
            }

            listFiles(fullPath, fileList);
            continue;
        }

        // Ignore files/extensions
        if (shouldIgnore(fullPath, entry.name)) {
            continue;
        }

        fileList.push(fullPath);
    }

    return fileList;
}

// Target directory
const targetDir = __dirname;
const outputFile = path.join(__dirname, 'all_files.txt');

const files = listFiles(targetDir);

const writeStream = fs.createWriteStream(outputFile, { flags: 'w' });

files.forEach(file => {
    try {
        const content = fs.readFileSync(file, 'utf8');

        writeStream.write(`=== ${file} ===\n`);
        writeStream.write(content);
        writeStream.write('\n\n');
    } catch (err) {
        writeStream.write(`Could not read file ${file}: ${err.message}\n\n`);
    }
});

writeStream.end(() => {
    console.log(`✅ Done. Output written to: ${outputFile}`);
});