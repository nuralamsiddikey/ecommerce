import multer from 'multer';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadPath = path.join(__dirname, '..', '..', '..', 'uploads');
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  }
});

// File type validation
const isFileTypeMatch = (file) => {
  return (
    file.mimetype === 'image/png' ||
    file.mimetype === 'image/jpg' ||
    file.mimetype === 'image/jpeg' ||
    file.mimetype === 'video/mp4'
  );
};

// Configure multer upload
export const upload = multer({
  storage: storage,
  limits: {
    fileSize: 102400000, // 100MB limit
  },
  fileFilter: (req, file, cb) => {
    if (isFileTypeMatch(file)) {
      cb(null, true);
    } else {
      cb(new Error('Only .jpg, .png, .jpeg, or mp4 format allowed'));
    }
  },
});