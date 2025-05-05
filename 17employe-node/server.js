//npm init -y
// npm install express
// node server.js

const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 3000;

// Serve static files
app.use(express.static('public'));

// API route to fetch employee data
app.get('/api/employees', (req, res) => {
  fs.readFile('employees.json', 'utf8', (err, data) => {
    if (err) return res.status(500).send('Error reading file.');
    res.send(JSON.parse(data));
  });
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
