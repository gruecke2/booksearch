import React, { Component } from "react";
import "./style.css";
import axios from "axios";
import { Row, Col } from "../../components/Grid";
import { BookList, BookListItem } from "../../components/BookList";
import EmptyList from "../../components/EmptyList";

class Search extends Component {
  state = {
    searchRes: [],
    query: "",
    books: []
  };

  displayRes = data => {
    this.setState({ books: data.items });
  };

  searchGBooks = () => {
    let url = `https://www.googleapis.com/books/v1/volumes?q=${
      this.state.query
    }`;
    axios
      .get(url)
      .then(res => {
        console.log(res);
        this.displayRes(res.data);
      })
      .catch(err => console.log(err));
  };

  handleInput = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
    console.log("Query", this.state.query);
  };


  render() {
    return (
      <Row>
        <div className="search">
          <input type="text" name="query" onChange={this.handleInput} />
          <button type="submit" onClick={this.searchGBooks}>
            Submit
          </button>

          {this.state.books.length > 0 ? 
          <BookList>
          {this.state.books.map(book => {
            //console.log("Book",book)
            return (
              <BookListItem
              key={book.id} 
              authors={book.volumeInfo.authors}
              title={book.volumeInfo.title}
              synopsis={book.searchInfo ? 
                book.searchInfo.textSnippet : "No Description Available"}
              link={book.selfLink}
              thumbnail={book.volumeInfo.imageLinks ? 
                book.volumeInfo.imageLinks.thumbnail : "https://loremflickr.com/320/240/book"}
              />
            )
          })}
          </BookList>
          : 
          <EmptyList/>
          
          }
          
        </div>
      </Row>
    );
  }
}

export default Search;
