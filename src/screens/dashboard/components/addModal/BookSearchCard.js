import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import {
  withHandlers,
  withStateHandlers,
  withProps,
  withPropsOnChange,
  mapProps
} from "recompose";
import {
  firebaseConnect,
  firestoreConnect,
  withFirestore,
  isLoaded,
  isEmpty
} from "react-redux-firebase";

//actions
import viewModal from "../../../../functions/actions/viewModal";
import viewStory from "../../../../functions/actions/viewStory";

// component
import BookCardInfo from "../book/BookCardInfo";

// css
import "../../../../stylesheets/css/base.css";

const enhance = compose(
  withFirestore,
  firebaseConnect(),
  connect(({ firebase: { auth } }) => ({ auth })),
  connect(({view, dispatch}) => ({view, dispatch})),
  withHandlers({
    addBook: props => ({ auth }) =>
      props.firestore.add("booksList", {
        bookFor: props.auth.uid,
        book: props.book.id
      })
  })
);

const BookSearchCard = (props) => {
  return (
    <div className="BookSearchCard">
      <div className="BookSearchCard-cover">
        <img
          className="BookCard-cover-img"
          src={props.book.cover}
          alt=""
        />
      </div>
      <div className="BookSearchCard-info">
        <BookCardInfo book={props.book} />
      </div>
      <div className="BookSearchCard-actions">
        <button
          className="mbtn mbtn-confirm BookSearchCard-add"
          onClick={(e)=>{
            props.addBook(e);
            props.dispatch(viewModal(''));
          }}>
          Add
        </button>
        <button style={{paddingRight: 5}}className="BookCard-details btn" onClick={()=>props.dispatch(viewStory(props.book))}>Details</button>
      </div>
    </div>
  );
};

export default enhance(BookSearchCard);
