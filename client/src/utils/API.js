import axios from "axios";

export const search = (search) => {
  console.log("in axios call")
  console.log(search);
    return axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${search}`
    );
  };

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
  // // Saves a book to the database
  // saveBook: function(bookData) {
  //   return axios.post("/api/books", bookData);
  // }
