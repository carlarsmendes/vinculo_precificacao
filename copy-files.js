const fs = require('fs-extra');
const path = require('path');

// Source directory containing the files to be copied
const sourceDir = '';

// Destination directory (the dist folder)
const distDir = 'dist';

// Files to be copied - All the fles which will be changes frequently
const filesToCopy = [
  'index.html',           // Single file in the root directory
  'css/style.css' ,
  'css/styles.min.css' ,       // File inside a subdirectory
  'js/projectTypes.js',
  'js/steps.js',
  'js/testimonials.js',
  'js/script.min.js',
  'browserconfig.xml'
];

// Copy files to the dist folder
filesToCopy.forEach(file => {
  const sourcePath = path.join(sourceDir, file);
  const destPath = path.join(distDir, file);

  // Copy the file
  fs.copySync(sourcePath, destPath);
});

console.log('Files copied to dist folder successfully!');
