import React from "react";
import { Col, Row, Container } from "../Grid";
import "./style.css";


function SearchBar(props) {

  return (
    <div className="formContainer">
    <form className="search">
      <div className="form-group">
        <label>Search:  </label>

        <input
          name="RecipeSearch"
          value={props.search}
          onChange={props.handleInputChange}
          placeholder="Search For a Book!"
        />
      </div>
      <button
      className="btn btn-secondary"
        onClick={props.handleFormSubmit}
        type="success"
        className="input-lg">Submit
          </button>

    </form>
    </div>

  );
}

export default SearchBar;
