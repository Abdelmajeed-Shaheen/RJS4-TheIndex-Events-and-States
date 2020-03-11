import React, { Component } from "react";
import Sidebar from "./Sidebar";
import AuthorsList from "./AuthorList";
import AuthorDetail from "./AuthorDetail";
import authors from "./data";

class App extends Component {
  state = {
    currentAuthor: null,
    authors: authors
  };

  selectAuthor = author => {
    this.setState({ currentAuthor: author });
  };

  WhatToView = () => {
    if (this.state.currentAuthor) {
      return <AuthorDetail author={this.state.currentAuthor} />;
    }
    return (
      <AuthorsList
        selectAuthor={this.selectAuthor}
        authors={this.state.authors}
      />
    );
  };

  reset = author => {
    this.setState({ currentAuthor: null, authors: authors });
  };

  render() {
    return (
      <div id="app" className="container-fluid">
        <div className="row">
          <div className="col-2">
            <Sidebar homepage={this.reset} />
          </div>
          <div className="content col-10">{this.WhatToView()}</div>
        </div>
      </div>
    );
  }
}

export default App;
