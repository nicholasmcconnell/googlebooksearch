const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: String,
  authors: Array,
  description: String,
  image: String,
  infoLink: String
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
