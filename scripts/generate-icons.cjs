const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const root = path.resolve(__dirname, '..');
const src = path.join(root, 'public/images/mbaylard.jpeg');
const appDir = path.join(root, 'src/app');

const EXTRACT = { left: 132, top: 20, width: 760, height: 760 };

const TARGETS = [
  { out: path.join(appDir, 'icon.png'), size: 512 },
  { out: path.join(appDir, 'apple-icon.png'), size: 180 },
];

(async () => {
  if (!fs.existsSync(src)) {
    console.error(`source missing: ${src}`);
    process.exit(1);
  }

  const meta = await sharp(src).metadata();
  if (meta.width !== 1024 || meta.height !== 1024) {
    console.warn(`expected 1024x1024 source, got ${meta.width}x${meta.height} — re-tune EXTRACT`);
  }

  for (const t of TARGETS) {
    await sharp(src)
      .extract(EXTRACT)
      .resize(t.size, t.size, { fit: 'cover' })
      .png({ quality: 95, compressionLevel: 9 })
      .toFile(t.out);
    console.log(`wrote ${path.relative(root, t.out)} (${t.size}x${t.size})`);
  }
})();
