//npm init -y
//npm install express
//node server.js
const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

// Serve static frontend files
app.use(express.static(path.join(__dirname, 'public')));

// API endpoint to serve product data
app.get('/api/products', (req, res) => {
  fs.readFile('products.json', 'utf8', (err, data) => {
    if (err) return res.status(500).send('Error reading product data');
    res.json(JSON.parse(data));
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
