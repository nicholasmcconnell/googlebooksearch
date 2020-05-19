import React from "react";

function Jumbotron({ children }) {
  return (
    <div
      style={{ height: 200, width: "60%", clear: "both", paddingTop: 75, textAlign: "center", marginTop: "50px", marginLeft: "20%"}}
      className="jumbotron"
    >
      {children}
    </div>
  );
}

export default Jumbotron;
