import path from 'path';
import shortid from 'shortid';

export const convertFileName = (fileName, fileExt) => {
  const originalFileExt = path.extname(fileName);
  const generateFileName = `${fileName
    .replace(originalFileExt, '')
    .toLowerCase()
    .split(' ')
    .join('-')}-${shortid.generate()}.${fileExt}`;
  return generateFileName;
};
