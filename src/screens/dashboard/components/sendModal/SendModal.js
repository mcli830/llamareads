import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import {
  withHandlers,
  withStateHandlers,
  withProps,
  withState,
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

const enhance = compose(
  withFirestore,
  connect(({ view, dispatch }) => ({ view, dispatch })),
  firebaseConnect(),
  connect(({ firebase: { auth } }) => ({ auth })),
  firestoreConnect(({ auth, view }) => [
    {
      collection: "users"
    },
    {
      collection: "journey",
      where: ["idLink", "==", view.book.journey],
      storeAs: "journeyTimeline"
    }
  ]),
  connect(
    ({ firestore }) => ({
      users: firestore.ordered.users,
      journeyTimeline: firestore.ordered.journeyTimeline
    })
  ),
  withState('note', 'writeNote', ''),
  withState('receiver', 'changeReceiver', ''),
  withState('uid', 'uidChange', ''),
  withHandlers({
    sendBook:  props => ({ auth }) => {
      props.firestore.add("userBooks", {
        sender: props.auth.uid,
        senderName: props.auth.displayName,
        inbox: true,
        book: props.view.book.book,
        user: document.getElementById("uid").value,
        note: props.note,
        sendDate: new Date().toString(),
        journey: props.view.book.journey,
        journeyBook: {sender: props.auth.displayName, note: props.note}
      })
      console.log(props.journeyTimeline.map(journey => journey.id));
      props.firestore.update({
        collection: 'journey', doc: props.journeyTimeline[0].id,
      }, {timeline: props.journeyTimeline[0].timeline.concat({user: props.auth.displayName, note: props.note, date: new Date().toString(), picture: props.auth.photoURL})})
    },
    noteChange: props => event => {
      props.writeNote(event.target.value);
    },
    receiverChange: props => e => props.changeReceiver(e.target.value),
    uidChange: props => event => props.uidChange(event)
  })
);

const SendModal = props => {
  return (
    <div className="SendModal">
      <div className="SendForm">
        <div className="SendForm-search">
          <input
            placeholder="Type in your friend’s name"
            id="SendForm-search-input"
            value={props.receiver}
            onChange={e => props.receiverChange(e)}
          />
          {!isLoaded(props.users)
            ? ""
            : isEmpty(props.users)
            ? ""
            : props.users
                .filter(
                  receiver =>
                    receiver.displayName
                      .toLowerCase()
                      .includes(props.receiver.toLowerCase()) &&
                    props.receiver != ""
                )
                .map(user => (
                  <div className="divUsername">
                    <input
                      type="hidden"
                      key={user.id}
                      id="uid"
                      value={user.id}
                    />
                    <div className="Search-friend-results">
                      <i className="fas fa-paper-plane"></i> {user.displayName}
                    </div>
                  </div>
                ))[0]}
        </div>

        <div className="SendForm-note">
          <textarea
            placeholder="Add a short note"
            id="SendForm-note-input"
            value={props.note}
            onChange={e => props.noteChange(e)}
            rows="10"
          />
        </div>
      </div>
      <div className="ReceiveModal-actions mbtn-container">
        <button
          className="mbtn mbtn-cancel"
          onClick={() => props.dispatch(viewModal())}
        >
          Cancel
        </button>
        <button
          className="mbtn mbtn-confirm"
          onClick={e => {
            if (props.note != "") {
              props.sendBook(props.journeyTimeline);
              props.dispatch(viewModal());
            }
          }}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default enhance(SendModal);
