const express = require('express');
const multer = require('multer');
const { Worker, isMainThread, parentPort } = require('worker_threads');
const path = require('path');

const app = express();
const port = 3000;

// Define the storage configuration for multer (file upload middleware)
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// POST endpoint for file upload
app.post('/upload', upload.single('file'), (req, res) => {
  if (isMainThread) {
    // This is the main thread; create a worker thread for file upload
    const worker = new Worker(path.join(__dirname, 'fileUploadWorker.js'), {
      workerData: {
        filePath: req.file.buffer, // Pass the file buffer to the worker
        destinationPath: 'path_to_destination_directory', // Specify the destination directory
      },
    });

    // Listen for messages from the worker thread
    worker.on('message', (message) => {
      if (message.error) {
        res.status(500).json({ error: message.error });
      } else {
        res.json({ success: true });
      }
    });

    // Handle errors from the worker thread
    worker.on('error', (err) => {
      console.error('Worker thread error:', err);
      res.status(500).json({ error: 'Internal server error' });
    });
  } else {
    // This is the worker thread; no need to handle file upload here
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
