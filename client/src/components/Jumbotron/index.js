import React from "react";
import "./style.css";

function Jumbotron({ children }) {
  return (
    <div
      // style={}
      className="jumbotron"
    >
      {children}
    </div>
  );
}

export default Jumbotron;
