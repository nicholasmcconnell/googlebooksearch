import React from "react";
import { Col, Row, Container } from "../Grid";
import "./style.css";


function SearchBar(props) {
  return (
    <Container>
      <Row>
        <Col size="md-12">
      <form className="search">
        <div className="form-group">
          <h3>Search:  
            
            <input
            // onChange={props.handleInputChange}
            name="RecipeSearch"
            value={props.search}
            onChange={props.handleInputChange}
            placeholder="Search For a Book!"
          />
          
        <button
          onClick={props.handleFormSubmit}
          type="success"
          className="input-lg">Submit
          </button>
          </h3> 
        </div>
      </form>
      </Col>
      </Row>
    </Container>
  );
}

export default SearchBar;
