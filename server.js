const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const upload = require('./upload');

// Serve static files from the "public" folder
app.use(express.static(path.join(__dirname, 'public')));

app.post('/upload', upload.single('file'), (req, res) => {
  return res.json({ message: "File uploaded successfully!" });
});

// Serve the index.html file on the root route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Logging
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
