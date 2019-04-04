import React, { Component } from 'react';
import './style.css';
import {Row, Col} from "../../components/Grid";
import {BookList, BookListItem} from "../../components/BookList";
import axios from "axios";
import EmptyList from '../../components/EmptyList';

class Saved extends Component {
    state = {
        savedBooks: [],
        initialized: false
    }

  componentDidMount(){
    this.getBooks();
  }

  getBooks = () => {
    axios.get("/books")
    .then(res => {
      this.setState({savedBooks: res.data})
  })
    .catch(console.log(err => console.log(err)))
    // this.setState({initialized: true})
  }

  render() {
    return (
      <Row>
        <Col size="md-12">
          {this.state.savedBooks.length > 0 ? 
          <BookList>
          {this.state.savedBooks.map(book => {
            console.log(book)
            return (
              <BookListItem {...book}/>
            )
          })}
          </BookList>
          :
          <EmptyList/>          
          }
          </Col>
      </Row>
    );
  }
}

export default Saved;
