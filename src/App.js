import React, { Component, Fragment } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Fragment>
        <button className="button button--success">hello</button>
        <button className="button button--danger">hello</button>
      </Fragment>
    );
  }
}

export default App;
