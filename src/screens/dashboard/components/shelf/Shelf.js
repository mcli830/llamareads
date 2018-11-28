import React from "react";
import PropTypes from "prop-types";
import { compose } from "redux";
import { connect } from "react-redux";
import { withHandlers, branch, renderNothing } from "recompose";
import { withFirestore, withProps, firestoreConnect, isLoaded, isEmpty } from "react-redux-firebase";

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
      collection: 'usersBooks',
      where: [
        ['inbox', '==', false],
        ['user', '==', auth.uid]
      ]
    }
  ]),
  connect(({ firestore }) => ({
    userBooks: firestore.ordered.usersBooks
  })),
  connect(({dispatch}) => ({dispatch}))
);

const Shelf = (props) => {
  return (
    <div className="Shelf-wrapper">
      <div className="Shelf">
        <div
          className="Shelf-platform"
          style={{width: (!isLoaded(props.userBooks) ? "calc(100% - 20px)" : (Array.from(document.querySelectorAll('.Book')).length * 94) + 600 )
          }}
        >
          <ShelfHeader add={() => props.dispatch(viewModal('add'))} />
        </div>
        <BookList />
      </div>
    </div>
  );
};

export default enhance(Shelf);
