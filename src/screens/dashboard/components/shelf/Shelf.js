import React from "react";
import PropTypes from "prop-types";
import { compose } from "redux";
import { connect } from "react-redux";
import { withHandlers, branch, renderNothing } from "recompose";
import { withFirestore, firestoreConnect, isLoaded, isEmpty } from "react-redux-firebase";

//actions
import viewModal from "../../../../functions/actions/viewModal";

// linked component
import ShelfHeader from "./ShelfHeader";
import BookList from "../book/BookList";

// css
import "../../../../stylesheets/css/base.css";

//compose

const enhance = compose(
  connect(({ firebase: { auth } }) => ({ auth })),
  firestoreConnect(({ auth }) => [
    {
      collection: "booksList",
      where: ["bookFor", "==", auth.uid],
      storeAs: "userBooks"
    }
  ]),
  connect(({ firestore }) => ({
    userBooks: firestore.ordered.userBooks
  })),
  connect(({dispatch}) => ({dispatch}))
);

const Shelf = (props) => {
  return (
    <div className="Shelf-wrapper">
      <ShelfHeader add={()=>props.dispatch(viewModal('add'))} />
      <div className="Shelf">
        <div className="Shelf-platform" />
            <BookList />
      </div>
    </div>
  );
};

Shelf.propTypes = {
  books: PropTypes.array
};

export default enhance(Shelf);
