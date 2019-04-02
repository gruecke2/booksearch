import React from "react";
import Thumbnail from "../Thumbnail";
import { Container, Row, Col } from "../Grid";
import Button from "react-bootstrap/Button";
import AddBookBtn from "../AddBookBtn";
import "./style.css";

// RecipeList renders a bootstrap list item
export function BookList({ children }) {
    return <ul className="list-group">{children}</ul>;
  }
  
  // RecipeListItem renders a bootstrap list item containing data from the recipe api call
  export function BookListItem(props) {
    return (
      <li className="list-group-item">
        <Container>
          <Row>
            <Col size="xs-4 sm-2">
              <Thumbnail src={props.volumeInfo.imageLinks.thumbnail} />
            </Col>
            <Col size="xs-8 sm-9">
              <h3>{props.volumeInfo.title}</h3>
              <p>
                {props.searchInfo.textSnippet}
              </p>
              <a
                rel="noreferrer noopener"
                target="_blank"
                href={props.selfLink}
              >
                Go to book!
              </a>
              <AddBookBtn>
                +
              </AddBookBtn>
            </Col>
          </Row>
        </Container>
      </li>
    );
  }