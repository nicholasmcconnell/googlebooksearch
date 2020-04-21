import React, { useState, useEffect } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import SearchBar from "../components/SearchBar";
import * as API from "../utils/API";
import { titleCase } from 'title-case';

function Books() {
  // Setting our component's initial state
  const [books, setBooks] = useState([])
  const [search, setSearch] = useState("");
  const [formObject, setFormObject] = useState({})

  // Load all books and store them with setBooks
  useEffect(() => {
    API.search()
      .then(res =>
        setBooks(res.data)
      )
      .catch(err => console.log(err));
  }, [])


  const handleInputChange = event => {
    const { value } = event.target;
    console.log(value);

    setSearch(value);
    // setSearch(event.target.value);
    // let formattedSearch = (search.replace(/ /g, ''));
    // let actualSearch = formattedSearch + ' ';

    // console.log(actualSearch);
    // API.search(formattedSearch)
    //   .then(res =>
    //     setBooks(res.data)
    //   )
    //   .catch(err => console.log(err));
    //   console.log(books);
  }

  const handleFormSubmit = event => {
    event.preventDefault();

    API.search(search)
      .then(res =>
        setBooks(res.data)
      )
      .catch(err => console.log(err));
    console.log(books);

  }

  // Loads all books and sets them to books



  // Deletes a book from the database with a given id, then reloads books from the db
  // function deleteBook(id) {
  //   API.deleteBook(id)
  //     .then(res => loadBooks())
  //     .catch(err => console.log(err));
  // }

  // Handles updating component state when the user types into the input field
  // function handleInputChange(event) {
  //   const { name, value } = event.target;
  //   setFormObject({...formObject, [name]: value})
  // };

  // When the form is submitted, use the API.saveBook method to save the book data
  // Then reload books from the database
  // function handleFormSubmit(event) {
  //   event.preventDefault();
  //   if (formObject.title && formObject.author) {
  //     API.saveBook({
  //       title: formObject.title,
  //       author: formObject.author,
  //       synopsis: formObject.synopsis
  //     })
  //       .then(res => loadBooks())
  //       .catch(err => console.log(err));
  //   }
  // };

  return (
    <Container fluid>
      <Row>
        <Col size="md-6">
          <Jumbotron>
            <h1>Google Books</h1>
          </Jumbotron>

          <SearchBar
            handleInputChange={handleInputChange}
            handleFormSubmit={handleFormSubmit}
          />

        </Col>
        <Col size="md-6 sm-12">
          {/* <Jumbotron>
              <h1>Books On My List</h1>
            </Jumbotron> */}
          {/* {books.length ? (
              <List>
                {books.map(book => (
                  <ListItem key={book._id}>
                    <Link to={"/books/" + book._id}>
                      <strong>
                        {book.title} by {book.author}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => deleteBook(book._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )} */}
        </Col>
      </Row>
    </Container>
  );
}


export default Books;
