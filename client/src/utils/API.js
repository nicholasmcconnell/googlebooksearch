import axios from "axios";

export default {

  search: function (search) {
    return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}`);
  },

  saveBook: function (book) {
    const { title, authors, description, infoLink } = book;
    const image = book.imageLinks.smallThumbnail;
    return axios.post("/api/books", { title, authors, description, image, infoLink });
  },
  getBooks: function () {
    return axios.get("/api/books");
  },
  deleteBook: function (id) {
    return axios.delete("/api/books/" + id);
  },
}

  // console.log(search())

  // // Gets all books
  // getBooks: function() {
  //   return axios.get("/api/books");
  // },
  // // Gets the book with the given id
  // getBook: function(id) {
  //   return axios.get("/api/books/" + id);
  // },
  // // Deletes the book with the given id
  // deleteBook: function(id) {
  //   return axios.delete("/api/books/" + id);
  // },
  // Saves a book to the database
  // saveBook: function(bookData) {
  //   return axios.post("/api/books", bookData);
  // }
