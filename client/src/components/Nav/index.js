import React from "react";
import "./style.css";

function Nav() {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <a className="navbar-brand" href="/">
        Google Books React App
      </a>
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" href="/books">Saved Books</a>
        </li>
      </ul>
      
    </nav>
  );
}

export default Nav;
