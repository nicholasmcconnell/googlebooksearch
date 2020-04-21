const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: String,
  author: Array,
  synopsis: String,
  image: String,
 
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
