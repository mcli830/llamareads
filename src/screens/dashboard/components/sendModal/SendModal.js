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

const enhance = compose(
  withProps({
    noteValue: "",
  }),
  withFirestore,
  firebaseConnect(),
  connect(({ firebase: { auth } }) => ({ auth })),
  connect(({view, dispatch}) => ({view, dispatch})),
  withHandlers({
    sendBook: props => {
      props.firestore.add("inboxList", {
        sender: props.auth.uid,
        inboxFor: "4IGGkEDpmgbSq1jSsHfVhKHmCIH3",
        book: props.book[0].id
      });
      props.firestore.add("journeyList", {
        sender: props.auth.uid,
        notes: "Something"
      });
    },
  }),
  withStateHandlers(
    ({ initialVal = "" }) => ({
      noteValue: initialVal
    }),
    {
      onNoteChange: ({ props }) => e => ({ noteValue: e.target.value })
    }
  )
);


const SendModal = (props) => {
  return (
    <div className="SendModal">
      <div className="SendForm">
        <div className="SendForm-search">
          <input placeholder="Type in your friend’s name" id="SendForm-search-input" />
        </div>
        <div className="SendForm-note">
          <textarea placeholder="Add a short note" id="SendForm-note-input" value={props.noteValue} onChange={props.onNoteChange} />
        </div>
      </div>
      <div className="ReceiveModal-actions mbtn-container">
      <button className="mbtn mbtn-cancel" onClick={()=>props.dispatch(viewModal())} >Cancel</button>
      <button className="mbtn mbtn-confirm" onClick={(e)=>{
          props.dispatch(viewModal());
          props.sendBook(e);
        }}>Send</button>
    </div>
    </div>
  );
};

export default enhance(SendModal);
