import React from "react";
import PropTypes from "prop-types";
import { compose } from "redux";
import { connect } from "react-redux";
import { withHandlers } from "recompose";
import { firestoreConnect, isLoaded, isEmpty } from "react-redux-firebase";

// components
import Book from "./Book";

// css
import "../../../../stylesheets/css/base.css";

const BookList = (props) => (
  <div className="BookList">
    {props.books.map(book => (
      <Book
        key={book.id}
        bookId={book.book}
        color={`hsl(${Math.floor(Math.random() * 360 + 1)},70%,70%)`}
      />
    ))}
  </div>
)

export default BookList;
