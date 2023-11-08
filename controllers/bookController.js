const Book = require('../models/Book');

// Create a new book
const createBook = async (req, res) => {
    try {
        const book = new Book(req.body);
        await book.save();
        res.status(201).json(book);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Get a list of all books
const getBooks = async (req, res) => {
    const books = await Book.find();
    res.json(books);
};

// Get details of a specific book by its ID
const getBookById = async (req, res) => {
    if (!req?.params?.id) {
        return res.status(404).json({ error: 'Id not provided' });

    }
    const book = await Book.findById(req.params.id);
    if (!book) {
        return res.status(404).json({ error: 'Book not found' });
    }
    res.json(book);
};

// Update a book's details
const updateBook = async (req, res) => {
    try {
        const book = await Book.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });
        if (!book) {
            return res.status(404).json({ error: 'Book not found' });
        }
        res.json(book);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Delete a book
const deleteBook = async (req, res) => {
    const book = await Book.findByIdAndDelete(req.params.id);
    if (!book) {
        return res.status(404).json({ error: 'Book not found' });
    }
    res.json(book);
};

module.exports = {
    createBook,
    getBooks,
    getBookById,
    updateBook,
    deleteBook,
};
