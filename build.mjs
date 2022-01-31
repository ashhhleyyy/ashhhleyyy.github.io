import { readFile, rm, writeFile } from 'fs/promises';
import { build as viteBuild } from 'vite';
import { promise as glob } from 'glob-promise';
import { relative } from 'path';

console.log('Building client...');
await viteBuild();

console.log('Done! Prerendering...');
// Build prerendered HTML
const prerender = (await import('./.prerender-dist/prerender-entry.js')).default.default;
const prerenderHtml = prerender();

// Build CSS tags so there's no wait for the JS to inject them.
const cssFiles = await glob('./dist/assets/index.*.css');
const cssLinks = cssFiles
    .map(file => relative('./dist/', file))
    .map(path => `<link rel="stylesheet" href="${path}">`)
    .join();

// Read current index
const indexHtml = (await readFile('./dist/index.html')).toString('utf-8');

// Inject prerendered HTML
const newIndex = indexHtml
    .replace('<!-- %prerender_target% -->', prerenderHtml)
    .replace('<!-- %prerender_head% -->', cssLinks)
    .replace('<!-- %analytics% -->', '<script src="https://a.ashhhleyyy.dev/tracker.js" async defer></script>');

// Write new index
await writeFile('./dist/index.html', newIndex);

console.log('Done! Cleaning up prerender data...');
rm('./.prerender-dist', { recursive: true, force: true });

console.log('Ready to go!');
