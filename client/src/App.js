import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Saved from "./pages/Saved";
import Search from "./pages/Search";
import Nav from "./components/Nav";
import { Container} from "./components/Grid";

class App extends Component {
  render() {
    return (
      <div>
        <Nav/>
        <Router>
          <Container>
            <Switch>
              <Route exact path="/" component={Search} />
              <Route exact path="/bookshelf" component={Saved} />
              <Route exact path="/books/:id" component={null} />
              <Route component={null} />
            </Switch>
          </Container>
        </Router>
      </div>
    );
  }
}

export default App;
