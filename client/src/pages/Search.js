import React, { useState, useEffect } from "react";
import Jumbotron from "../components/Jumbotron";
import { Col, Row, Container } from "../components/Grid";
import SearchBar from "../components/SearchBar";
import API from "../utils/API";
import Card from '../components/Cards'

function Books() {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");
  const [formObject, setFormObject] = useState({});
  const [bookId, setBookId] = useState("");

  const handleInputChange = event => {
    event.preventDefault();
    const { value } = event.target;
    setSearch(value);
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();

    API.search(search)
      .then((res) =>
        setBooks(res.data.items)
      )
      .catch(err => console.log(err))
  }

  const saveBook = (book) => {
    API.saveBook(book)
      .then()
      .catch(err => console.log(err));
  }

  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <Jumbotron>
            <h1>Google Books</h1>
          </Jumbotron>
          <div>
            <SearchBar
              handleInputChange={handleInputChange}
              handleFormSubmit={handleFormSubmit}
            />
          </div>
          <div>
            {books.length ? books.map(book =>
              <Card
                book={book.volumeInfo}
                key={book.id}
                saveBook={saveBook}
              />

            ) : <p></p>}

          </div>
        </Col>
      </Row>

      <Row>
        <Col size="md-3 sm-12"></Col>
        <Col size="md-6 ">

        </Col>
        <Col size="md-3 sm-12"></Col>
      </Row>

    </Container>
  );
}


export default Books;
