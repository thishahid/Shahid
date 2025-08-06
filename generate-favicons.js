const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Input image path
const inputPath = path.join(__dirname, 'public', 'favicon.png');
// Output directory
const outputDir = path.join(__dirname, 'public', 'favicons');

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Favicon sizes to generate
const sizes = [
  { size: 16, name: 'favicon-16x16.png' },
  { size: 32, name: 'favicon-32x32.png' },
  { size: 48, name: 'favicon-48x48.png' },
  { size: 64, name: 'favicon-64x64.png' },
  { size: 128, name: 'favicon-128x128.png' },
  { size: 256, name: 'favicon-256x256.png' },
];

// Generate PNG favicons
async function generateFavicons() {
  try {
    for (const { size, name } of sizes) {
      await sharp(inputPath)
        .resize(size, size)
        .toFile(path.join(outputDir, name));
      console.log(`Generated ${name}`);
    }

    // Generate ICO file (Windows favicon)
    await sharp(inputPath)
      .resize(32, 32)
      .toFile(path.join(__dirname, 'src', 'app', 'favicon.ico'));
    console.log('Generated favicon.ico');

    // Generate Apple touch icon
    await sharp(inputPath)
      .resize(180, 180)
      .toFile(path.join(outputDir, 'apple-touch-icon.png'));
    console.log('Generated apple-touch-icon.png');

    console.log('All favicons generated successfully!');
  } catch (error) {
    console.error('Error generating favicons:', error);
  }
}

generateFavicons();