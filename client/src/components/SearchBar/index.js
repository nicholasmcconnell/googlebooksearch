import React from "react";
import { Col, Row, Container } from "../Grid";
import "./style.css";


function SearchBar(props) {

  //   <form>
  //     <div class="form-group">
  //       <label for="exampleInputEmail1">Email address</label>
  //       <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
  //         <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  //   </div>
  //       <div class="form-group">
  //         <label for="exampleInputPassword1">Password</label>
  //         <input type="password" class="form-control" id="exampleInputPassword1">
  //   </div>
  //         <div class="form-group form-check">
  //           <input type="checkbox" class="form-check-input" id="exampleCheck1">
  //             <label class="form-check-label" for="exampleCheck1">Check me out</label>
  //   </div>
  //           <button type="submit" class="btn btn-primary">Submit</button>
  // </form>

  return (
    <div className="formContainer">
    <form className="search">
      <div className="form-group">
        <label>Search:  </label>

        <input
          // onChange={props.handleInputChange}
          
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
