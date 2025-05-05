// mkdir restaurant-site
// cd restaurant-site
// npm init -y
// npm install express

const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Serve static files from 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// Root route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(PORT, () => {
  console.log(`Static website running at http://localhost:${PORT}`);
});
