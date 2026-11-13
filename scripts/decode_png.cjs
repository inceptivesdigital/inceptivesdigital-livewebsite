const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

function decodePNG(buffer) {
  let offset = 8;
  let width, height, colorType, bitDepth;
  const idatChunks = [];

  while (offset < buffer.length) {
    const length = buffer.readUInt32BE(offset);
    const type = buffer.toString('ascii', offset + 4, offset + 8);
    if (type === 'IHDR') {
      width = buffer.readUInt32BE(offset + 8);
      height = buffer.readUInt32BE(offset + 12);
      bitDepth = buffer.readUInt8(offset + 16);
      colorType = buffer.readUInt8(offset + 17);
    } else if (type === 'IDAT') {
      idatChunks.push(buffer.subarray(offset + 8, offset + 8 + length));
    } else if (type === 'IEND') {
      break;
    }
    offset += 12 + length;
  }

  const compressedData = Buffer.concat(idatChunks);
  const decompressed = zlib.inflateSync(compressedData);

  return { width, height, bitDepth, colorType, data: decompressed };
}

['ap.png', 'trustpilot.png', 'google.png', 'nyt.png', 'globeandmail.png', 'usatoday.png'].forEach(file => {
  const buf = fs.readFileSync(path.join('public', 'assets', 'marquee', file));
  const png = decodePNG(buf);
  console.log(file, 'width:', png.width, 'height:', png.height, 'colorType:', png.colorType);
});
