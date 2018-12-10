import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Assets/Styles/starter-template.css";

import React, { Component } from "react";

import Main from "./Components/Main/";
import Nav from "./Components/Nav";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Nav />
        <Main />
      </React.Fragment>
    );
  }
}

export default App;
