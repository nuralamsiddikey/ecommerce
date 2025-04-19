import { Jimp } from 'jimp';
import QrCodeReader from 'qrcode-reader';
import fs from 'fs';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

// Handle __dirname since it's not available in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const decodeQRCode = (imagePath) => {
  return new Promise(async (resolve, reject) => {
    const buffer = fs.readFileSync(__dirname + imagePath);
    console.log(buffer);

    const image = await Jimp.read(buffer);

    // if (err) {
    //   reject(err);
    //   return;
    // }
    console.log('dhiman', image);

    const qr = new QrCodeReader();
    qr.callback = (err, value) => {
      if (err) {
        reject(err);
        return;
      }
      console.log(value.result);

      resolve(value.result);
    };

    qr.decode(image.bitmap);
  });
};

(async () => {
  let a = await decodeQRCode('/foo.png');
  console.dir('dhiman', a);
})();
