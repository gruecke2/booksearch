import React from "react";
import "./style.css";

function Jumbotron() {
  return (
    <div className="jumbotron text-center">
      <h1><span id="jumboHead">React Bookshelf</span></h1>
      <a target="_blank" rel="noopener noreferrer" href="http://developers.google.com/books/">
        <div className="tossing">Powered by Google Books</div>
      </a>
    </div>
  );
}

export default Jumbotron;
