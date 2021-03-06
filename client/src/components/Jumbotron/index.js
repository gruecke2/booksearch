import React from "react";
import "./style.css";

function Jumbotron() {
  return (
    <div className="jumbotron text-center">
      <h1><span><a id="jumboHead" href="/">React Bookshelf</a></span></h1>
        <div className="tossing">
          <a target="_blank" rel="noopener noreferrer" href="http://developers.google.com/books/">
            Powered by Google Books
          </a>
        </div>
      
    </div>
  );
}

export default Jumbotron;
