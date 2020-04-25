import React, { useState, useEffect } from "react";
// import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
// import { List, ListItem } from "../components/List";
// import { Input, TextArea, FormBtn } from "../components/Form";
import SearchBar from "../components/SearchBar";
import API from "../utils/API";
// import { titleCase } from 'title-case';
import Card from '../components/Cards'

function Books() {
  // event.preventDefault();
  // Setting our component's initial state
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");
  const [formObject, setFormObject] = useState({});
  const [bookId, setBookId] = useState("");

  // let authorString;



  // Load all books and store them with setBooks
  // useEffect(() => {
  //   API.search(search)
  //     .then(res =>
  //       setBooks(res.data.results)
  //     )
  //     .catch(err => console.log(err));
  // }, [search])


  const handleInputChange = event => {
    event.preventDefault();
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

  const handleFormSubmit = (event) => {
    event.preventDefault();

    API.search(search)
      .then((res) =>
        setBooks(res.data.items)
      )
      .catch(err => console.log(err))
  }

  const saveBook = (book) => {
    // event.preventDefault();
    console.log(book);

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
                // authorString={authorString} 
                saveBook={saveBook}

              // For save page
              // deleteBook={deleteBook}
              // saveView={true}
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
