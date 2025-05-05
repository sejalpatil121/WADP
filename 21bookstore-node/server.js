const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const Book = require('./models/Book');
const connectDB = require('./config/db')

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

connectDB();

// Add a new book
app.post('/add', async (req, res) => {
    const book = new Book(req.body);
    await book.save();
    res.redirect('/');
});

// Get all books
app.get('/books', async (req, res) => {
    const books = await Book.find();
    res.json(books);
});

// Update book
app.post('/update/:id', async (req, res) => {
    await Book.findByIdAndUpdate(req.params.id, req.body);
    res.redirect('/');
});

// Delete book
app.get('/delete/:id', async (req, res) => {
    await Book.findByIdAndDelete(req.params.id);
    res.redirect('/');
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
