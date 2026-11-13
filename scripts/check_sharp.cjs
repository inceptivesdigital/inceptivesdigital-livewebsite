const fs = require('fs');
const path = require('path');
// Simple PNG chunk reader or canvas/pixel inspector
// Or let's check with pngjs or jimp or sharp if available, else let's write a small script
console.log('Testing dependencies...');
try {
  require('sharp');
  console.log('sharp is available');
} catch (e) {
  console.log('sharp not available');
}
