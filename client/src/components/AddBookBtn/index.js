import React from "react";
import Button from "../Button";
import "./style.css";
import axios from "axios";

class AddBookBtn extends React.Component{
    state = {
        bookID: null
    }

    postToDB = (book) => {
        var dbBook = {
          title: book.title,
          authors: book.authors,
          synopsis: book.synopsis,
          thumbnail: book.thumbnail,
          link: book.link
        }
    
        axios.post("/books", dbBook)
        .then(console.log("added"))
        .catch(err => console.log(err))
      }

    render() {
        return (<Button className="saveBtn" onClick={() => this.postToDB(this.props)}>
            Save Book
        </Button>);
    }
  }

  export default AddBookBtn;