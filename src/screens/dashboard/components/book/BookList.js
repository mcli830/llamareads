import React from "react";
import PropTypes from "prop-types";
import { compose } from "redux";
import { connect } from "react-redux";
import { withHandlers } from "recompose";
import { firestoreConnect, isLoaded, isEmpty } from "react-redux-firebase";

// components
import Book from "./Book";
import BookPlaceholder from "./BookPlaceholder";

// css
import "../../../../stylesheets/css/base.css";

const enhance = compose(
  connect(({ firebase: { auth } }) => ({ auth })),
  firestoreConnect(({ auth }) => [
    {
      collection: 'userBooks',
      where: [
        ['inbox', '==', false],
        ['user', '==', auth.uid]
      ]
    }
  ]),
  connect(({ firestore }) => ({
    userBooks: firestore.ordered.userBooks
  })),
  connect(({dispatch}) => ({dispatch}))
);

class BookList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      bookList: [],
      viewing: 0
    }
    this.loadBooks(this.props);
  }

  componentWillUpdate(nextProps) {
    this.loadBooks(nextProps);
  }

  loadBooks(props) {
    this.state.bookList = !isLoaded(this.props.userBooks)
      || isEmpty(this.props.userBooks)
      ? [] : this.props.userBooks ;
  }

  coverFlowPosition(index, length) {
    var midpoint = length % 2 == 0 ? length / 2 - 1 : length / 2;
    var position = Math.abs(index - midpoint);
    switch (position){
      case position < -2: return "hideLeft"
      case -2: return "prevLeftSecond"
      case -1: return "prev"
      case 0: return "selected"
      case 1: return "next"
      case 2: return "nextRightSecond"
      case position > 2: return "hideRight"
      default: return ""
    }
  }

  render() {
    return (
      <div className="BookList carousel">
        {!isLoaded(this.props.userBooks) || isEmpty(this.props.userBooks)
          ? <div className="spinner-square" />
          : this.props.userBooks.map((book, index) => (
            <Book
              key={book.id}
              book={book.book}
              journey={book.journey}
              coverflow={this.coverFlowPosition(index, this.props.userBooks.length)}
            />
          ))
        }
      </div>
    );
  }
}

export default enhance(BookList);
