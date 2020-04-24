import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import Card from "../components/Cards"

function Save(props) {
  const [books, setBooks] = useState({})

  // When this component mounts, grab the book with the _id of props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  // const {id} = useParams()
  useEffect(() => {
    API.getBooks()
      .then(res => setBooks(res.data))
      .catch(err => console.log(err));
  }, [])

  const deleteBook = (id) => {
    console.log(id);

    API.deleteBook(id)
      .then()
      .catch(err => console.log(err));
  }

  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <Jumbotron>
            <h1>
              Your Saved Books!
              </h1>
          </Jumbotron>
          <div>
            {books.length ? books.map(book =>
              <Card
                book={book}
                key={book.id}
                // authorString={authorString} 
                // saveBook={saveBook} 

                // For save page
                // deleteBook={deleteBook}
                saveView={true}
              />

            ) : <p>Please search for a book!</p>}

          </div>
        </Col>
      </Row>

      <Row>
        <Col size="md-2">
          <Link to="/">← Back to Searh</Link>
        </Col>
      </Row>
    </Container>
  );
}


export default Save;
