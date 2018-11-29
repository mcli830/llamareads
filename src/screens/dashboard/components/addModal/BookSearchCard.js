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
    addBook: props => ({ auth }) => {
      let uuid = create_UUID()
      props.firestore.add("userBooks", {
        book: props.book,
        user: props.auth.uid,
        journey: uuid,
        status: 'to_read',
        inbox: false
      })
      props.firestore.add("journey", {
        id: uuid,
        timeline: [{user: props.auth.displayName, note: 'Journey Begin'}]
      })
    }
  })
);

function create_UUID(){
  var dt = new Date().getTime();
  var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = (dt + Math.random()*16)%16 | 0;
      dt = Math.floor(dt/16);
      return (c=='x' ? r :(r&0x3|0x8)).toString(16);
  });
  return uuid;
}

const BookSearchCard = (props) => {
  return (
    <div className="BookSearchCard">
      <div className="BookSearchCard-cover">
        <div
          className="BookSearchCard-image"
          style={{backgroundImage: `url('${props.book.cover}')`}}
          onClick={()=>props.dispatch(viewStory(props.book))}
        ></div>
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
        <button style={{paddingRight: 5}} className="BookCard-details btn" onClick={()=>props.dispatch(viewStory(props.book))}>Details</button>
      </div>
    </div>
  );
};

export default enhance(BookSearchCard);
