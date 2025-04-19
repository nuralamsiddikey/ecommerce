import { fileURLToPath } from 'url';
import { dirname } from 'path';
import express from 'express';
import cors from 'cors';
import path from 'path';

import config from './config/config.js';
import globalErrorHandler from './middleware/errors/globalErrorHandler.js';
import rootRouter from './api/routes/index.js';
import dbConnect from './db/dbConnect.js';

const app = express();

// Fix for __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Static file serving
app.use('/uploads', express.static(path.join(__dirname, '../uploads')));

app.use('/api', rootRouter);
app.use('/api/test', (req, res, next) => {
  res.send('test ok');
});

app.use(globalErrorHandler);

app.listen(config.port, () => {
  console.log(`server running on port ${config.port}`);
  dbConnect.sequelize
    .authenticate()
    .then(() => {
      console.log('database connect successfully');
    })
    .catch((err) => {
      console.log('unable to connect the database', err);
    });
  // dbConnect.sequelize.sync();
  // dbConnect.sequelize.sync({ alter: true });
  // dbConnect.sequelize.sync({ force: true });
});
