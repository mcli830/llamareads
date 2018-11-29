import React from "react";
import PropTypes from "prop-types";
import { compose } from "redux";
import { connect } from 'react-redux'
import { withHandlers, withState, withStateHandlers, branch, renderNothing } from "recompose";
import {
  firebaseConnect,
  firestoreConnect,
  withFirestore,
  isLoaded,
  isEmpty
} from "react-redux-firebase";

// components
import BookSearchCard from "./BookSearchCard";

// css
import "../../../../stylesheets/css/base.css";


const enhance = compose(
  connect(
    ({ firebase: { auth } }) => ({ auth }),
  ),
  firestoreConnect(({ auth }) => [
    {
      collection: "books",
      storeAs: 'addBooks'
    },
  ]),
  connect(
    ({ firestore }) => ({
      addBooks: firestore.ordered.addBooks,
    })
  ),
  withState('search', 'changeSearch', ''),
  withHandlers(
    {
    onSearchChange: props => e => (
      props.changeSearch(e.target.value)
    )
    }
  )
)
// function fetchApi(word){
//   fetch('https://www.goodreads.com/search/index.xml?key=TfkFgljd4rldheKR1dWfZQ&q=')
//   .then(response => response.json())
//   .then(data => this.setState({ data }));
// } 

const AddModal = (props) => {
  return (
    <div className="AddModal">
      <div className="AddModal-search">
        <input placeholder="Type in bookname or author" value={props.search} onChange={(e)=>props.onSearchChange(e)} id="AddModal-search-input" className="AddModal-search-input" />
      </div>
      <span>Results</span>
      <div className="AddModal-search-list">
      {
        !isLoaded(props.addBooks)
          ? ''
          : isEmpty(props.addBooks)
            ? ''
            : (
              
              props.addBooks.filter(search => search.title.toLowerCase().includes(props.search.toLowerCase()) || search.author.toLowerCase().includes(props.search.toLowerCase())).map((book) =>

          <BookSearchCard changeModal={props.changeModal} key={book.id} book={book} />
              )
            )
      }
      </div>
    </div>
  );
};

AddModal.propTypes = {
  books: PropTypes.array
}

export default enhance(AddModal);
