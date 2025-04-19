import sharp from 'sharp';
import chardet from 'chardet';
import imageType from 'image-type';
import { convertFileName } from './convertFileName.js';

export const imageCompress = async (file) => {
  const { buffer, originalname } = file;
  try {
    const webpBuffer = await sharp(buffer).webp({ quality: 30 }).toBuffer();
    const bufferSizeLength = Buffer.byteLength(webpBuffer);
    const sizeInKb = bufferSizeLength / 1024;
    const newEncoding = chardet.detect(webpBuffer);
    const imageMimType = await imageType(webpBuffer);
    return {
      mimetype: imageMimType.mime,
      encoding: newEncoding,
      buffer: webpBuffer,
      originalname: convertFileName(originalname, 'webp'),
      size: sizeInKb,
    };
  } catch (err) {
    return err;
  }
};
