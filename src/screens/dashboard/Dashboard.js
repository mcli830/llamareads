import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { withHandlers, withStateHandlers } from "recompose";
import {
  firebaseConnect,
  firestoreConnect,
  withFirestore,
  isLoaded,
  isEmpty
} from "react-redux-firebase";

// components
import Navbar from "./components/navbar/Navbar";
import ShelfList from "./components/shelf/ShelfList";
import ModalBase from "./components/modal/ModalBase";
import ReceiveModal from "./components/receiveModal/ReceiveModal";
import SendModal from "./components/sendModal/SendModal";
// import AddModal from "./components/addModal/AddModal";

// css
import "../../stylesheets/css/base.css";

const enhance = compose(
  withFirestore,
  firebaseConnect(),
  connect(({ firebase: { auth } }) => ({ auth })),
  withHandlers({
    pushSample: props => ({ auth }) =>
      props.firestore.add("booksList", {
        bookFor: props.auth.uid,
        book: "9xzHVb6LM4Cq67XUHFRF"
      }),
    sendBook: props => e => {
      console.log(e.target);
      // props.firestore.add('booksList', { bookFor: key, book: "9xzHVb6LM4Cq67XUHFRF" })
      // props.firestore.add('journeyList', { sender: key, notes: e.target.value})
    }
  }),
  firestoreConnect(({ auth }) => [
    {
      collection: "users"
    }
  ]),
  connect(({ firestore }) => ({
    users: firestore.ordered.users
  })),
  withStateHandlers(
    ({ initialVal = "" }) => ({
      searchVal: initialVal
    }),
    {
      onSearchChange: ({ props }) => e => ({ searchVal: e.target.value })
    }
  )
);

const Dashboard = ({
  users,
  pushSample,
  onSearchChange,
  searchVal,
  sendBook
}) => {
  return (
    <div className="Dashboard">
      <ShelfList />
      <Navbar />
      {!isLoaded(users)
        ? ""
        : isEmpty(users)
        ? ""
        : users.map(user => (
            <button
              onClick={sendBook}
              key={user.id}
              value={user.id && searchVal}
            >
              Send Book
            </button>
          ))}
      <button onClick={pushSample} />
      <input value={searchVal} onChange={onSearchChange} type="text" />
      <ModalBase content={<SendModal />} />
      {/* <AddModal /> */}
      {/* <ModalBase content={<ReceiveModal />} /> */}
      <button onClick={pushSample} />
    </div>
  );
};

export default enhance(Dashboard);
