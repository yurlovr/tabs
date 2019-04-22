import React, { Component } from "react";
import MainPage from "./scripts/MainPage";

class App extends Component {

  componentDidMount() {}

  render() {
    return (
      <div className="row">
          <div className="col-md-12">
        <MainPage />
          </div>
      </div>
    );
  }
}

export default App;
