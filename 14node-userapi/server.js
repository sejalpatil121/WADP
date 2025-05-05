//npm init -y
//npm install express
//node server.js
// in postman look localhost:3000/api/users
const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 3000;

// Serve static files (like index.html)
app.use(express.static(path.join(__dirname, 'public')));

// API endpoint to return user data
app.get('/api/users', (req, res) => {
  fs.readFile('users.json', 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ error: 'Could not read user data' });
    }
    const users = JSON.parse(data);
    res.json(users);
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
