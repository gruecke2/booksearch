import React from "react";
import "./style.css";
import Jumbotron from "../Jumbotron";

function Nav() {
  return (
    <div>
  
    <nav className="navbar navbar-dark">
      <a className="navbar-brand" id="homeLink" href="/">
        Google Books React App
      </a>
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link navbar-brand" id="savedLink" href="/books">Saved Books</a>
        </li>
      </ul>
    </nav>
    <Jumbotron/>
    </div>
  );
}

export default Nav;
