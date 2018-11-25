import React from "react";
import PropTypes from "prop-types";
import { compose } from "redux";
import { connect } from "react-redux";
import { withHandlers, withStateHandlers } from "recompose";
import { firestoreConnect, isLoaded, isEmpty } from "react-redux-firebase";
import { firebase as firebaseConf } from "../config/api";

// components
import Dashboard from "./dashboard/Dashboard";

const enhance = compose(
  firestoreConnect([{ collection: "books" }]),
  connect(({ firestore }) => ({
    books: firestore.ordered.books
  })),
  withStateHandlers({
    state: {
      view: "dashboard"
    },
    renderView: view => {
      switch (view) {
        case "dashboard":
        default:
          return <Dashboard />;
      }
    }
  }),
  withHandlers({
    addBook: props => () =>
      props.firestore.add("books", { title: "something" })
  })
);

const Home = ({ firestore, state, renderView }) => renderView(state.view);

// <div className="App">
//   <div className="App-header">
//     <h2>Llama Development BUILD</h2>
//   </div>
//   <div className="App-books">
//     <h4>
//       Loaded From
//       <span className="App-Url">
//         <a href={firebaseConf.databaseURL}>{firebaseConf.databaseURL}</a>
//       </span>
//     </h4>
//     <h4>Books recieve from Firestore</h4>
//     {!isLoaded(books)
//       ? "Loading"
//       : isEmpty(books)
//       ? "Book list is empty"
//       : books.map(book => <Book key={book && book.id} book={book} />)}
//     <NewBook />
//   </div>
// </div>

Home.propTypes = {
  firestore: PropTypes.shape({
    add: PropTypes.func.isRequired,
    login: PropTypes.func.isRequired
  }),
  addBook: PropTypes.func.isRequired,
  books: PropTypes.array
};

export default enhance(Home);
