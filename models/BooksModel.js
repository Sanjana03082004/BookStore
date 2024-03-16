const { timeStamp } = require('console');
const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({
    BookId: {
        type: Number,
        required: true
    },
    BookName: {
        type: String,
        required: true
    },
    Price: {
        type: Number, 
        required: true
    },
    author: {
        type: String,
        required: true
    }
},{
    timeStamp:true
});
const Book = mongoose.model('Book', bookSchema);
module.exports = Book;
//module.exports = bookSchema;