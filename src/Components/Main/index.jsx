import React, { Component } from "react";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      callback: 0,
      after: 0
    };
  }

  onClick = () => {
    this.setState(
      prevState => {
        return { counter: prevState.counter + 1 };
      },
      () => this.setState({ callback: this.state.counter })
    );
    this.setState({ after: this.state.counter });
  };

  render() {
    const { after, callback } = this.state;
    return (
      <React.Fragment>
        <main role="main" className="container">
          <div className="starter-template">
            <h1>React Callback (prevState) </h1>
            <button className="btn btn-dark mb-5" onClick={this.onClick}>
              Click Me
            </button>
            <div className="alert alert-primary" role="alert">
              callback: {callback}
            </div>
            <div className="alert alert-success" role="alert">
              after: {after}
            </div>
          </div>
        </main>
      </React.Fragment>
    );
  }
}
