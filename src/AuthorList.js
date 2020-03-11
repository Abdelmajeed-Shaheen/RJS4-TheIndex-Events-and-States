import React, { Component } from "react";
import AuthorCard from "./AuthorCard";
import SearchBar from "./SearchBar";
import authors from "./data";

class AuthorsList extends Component {
  state = {
    authors: this.props.authors
  };
  filterAuthors = query => {
    const filteredAuthors = this.props.authors.filter(author =>
      `${author.first_name} ${author.last_name}`
        .toLowerCase()
        .includes(query.toLowerCase())
    );
    this.setState({ authors: filteredAuthors });
  };
  render() {
    const authorCards = this.state.authors.map(author => (
      <AuthorCard
        seconedFunction={this.props.newfunction}
        key={author.first_name + author.last_name}
        author={author}
        selectAuthor={this.props.selectAuthor}
      />
    ));

    return (
      <div className="authors">
        <SearchBar filter={this.filterAuthors} />
        <h3>Authors</h3>
        <div className="row">{authorCards}</div>
      </div>
    );
  }
}

export default AuthorsList;
