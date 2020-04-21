import React from "react";
import "./style.css";


function SearchBar(props) {
  return (
    <div className="container">
      <form className="search">
        <div className="form-group">
          <h3>Search:</h3>
          <input
            // onChange={props.handleInputChange}
            name="RecipeSearch"
            value={props.search}
            onChange={props.handleInputChange}
            placeholder="Search For a Recipe"
          />
        </div>
        <button
          onClick={props.handleFormSubmit}
          type="success"
          className="input-lg">Submit</button>
      </form>
    </div>
  );
}

export default SearchBar;
