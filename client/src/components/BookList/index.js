import React from "react";
import Thumbnail from "../Thumbnail";
import { Container, Row, Col } from "../Grid";
import AddBookBtn from "../AddBookBtn";
import RemoveBookBtn from "../RemoveBookBtn";
import axios from "axios";


// RecipeList renders a bootstrap list item
export function BookList({children}) {


  var update = () =>{
    console.log(children)
    window.location.reload();
  }
  var cWProp = React.Children.map(children, (child => React.cloneElement(child, {update: update})))
  return (
    <ul className="list-group">{cWProp}</ul>
    );
  }

  // RecipeListItem renders a bootstrap list item containing data from the recipe api call
  export class BookListItem extends React.Component{
    state = {
      deleted: false
    }

    deleteCB = () => {
      this.props.update()
    }



    render(){
    return (
      <li className="list-group-item">
        <Container>
          <Row>
            <Col size="xs-4 sm-2">
              <Thumbnail src={this.props.thumbnail} />
            </Col>
            <Col size="xs-8 sm-9">
              <h3>{this.props.title}<span><h5>{this.props.authors.join(", ")}</h5></span></h3>
              <p>
                {this.props.synopsis}
              </p>
              <a
                target="_blank"
                href={this.props.link}
              >
                Go to book!
              </a>
              {(this.props._id) ? 
              <RemoveBookBtn
              id={this.props._id}
              authors={this.props.authors}
              title={this.props.title}
              synopsis={this.props.synopsis}
              link={this.props.link}
              thumbnail={this.props.thumbnail}
              deleteCB={this.deleteCB}
              />
              :
              <AddBookBtn
              authors={this.props.authors}
              title={this.props.title}
              synopsis={this.props.synopsis}
              link={this.props.link}
              thumbnail={this.props.thumbnail}
              />
              }
              
            </Col>
          </Row>
        </Container>
      </li>
    );
    }
  }