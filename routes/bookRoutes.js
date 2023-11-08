const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');
const { bookSchema, bookIdParamSchema } = require('../validation/bookValidation');

router.post('/books', (req, res, next) => {
    const { error } = bookSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    } else {
        next();
    }
}, bookController.createBook);
router.get('/books', bookController.getBooks);
router.get('/books/:id', (req, res, next) => {
    const { error } = bookIdParamSchema.validate(req.params);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    } else {
        next();
    }
}, bookController.getBookById);
router.put('/books/:id', (req, res, next) => {
    const { error } = bookIdParamSchema.validate(req.params);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    } else {
        next();
    }
}, bookController.updateBook);
router.delete('/books/:id', (req, res, next) => {
    const { error } = bookIdParamSchema.validate(req.params);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    } else {
        next(); // If validation passes, proceed to the controller
    }
}, bookController.deleteBook);

module.exports = router;
