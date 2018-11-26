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
    addBook: props => ({ auth }) =>
      props.firestore.add("booksList", {
        bookFor: props.auth.uid,
        book: "9xzHVb6LM4Cq67XUHFRF",
        inbox: true
      }),
    sendBook: props => e => {
      props.firestore.add('booksList', { bookFor: e.target.value, book: "9xzHVb6LM4Cq67XUHFRF", inbox: true })
      // props.firestore.add('journeyList', { sender: key, notes: e.target.value})
    }
  }),
  firestoreConnect(({ auth }) => [
    {
      collection: "users"
    },
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
  addBook,
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
              value={user.id}
            >
              Send Book
            </button>
          ))}
      <button onClick={addBook} />
      <input value={searchVal} onChange={onSearchChange} type="text" />
      <ModalBase content={<SendModal />} />
      {/* <AddModal /> */}
      {/* <ModalBase content={<ReceiveModal />} /> */}
      <button onClick={pushSample} />
    </div>
  );
};

export default enhance(Dashboard);
