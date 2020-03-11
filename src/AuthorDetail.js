import React from "react";
import BookTableRow from "./BookTableRow";

const AuthorDetail = props => {
  const author = props.author;
  const authorName = `${author.first_name} ${author.last_name}`;
  const bookslist = author.books.map(book => (
    <BookTableRow
      book={book}
      authorName={authorName}
      key={`${book.title}${book.color}`}
    />
  ));
  return (
    <div className="author col-xs-10">
      <div>
        <h3>{authorName}</h3>
        <img className="img-thumbnail" src={author.imageUrl} alt={authorName} />
      </div>
      <table className="mt-3 table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Authors</th>
            <th>Color</th>
          </tr>
        </thead>
        <tbody>{bookslist}</tbody>
      </table>
    </div>
  );
};

export default AuthorDetail;
