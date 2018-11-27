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

// components
import Navbar from "./components/navbar/Navbar";
import ShelfList from "./components/shelf/ShelfList";
import ModalBase from "./components/modal/ModalBase";
import ReceiveModal from "./components/receiveModal/ReceiveModal";
import SendModal from "./components/sendModal/SendModal";
import AddModal from "./components/addModal/AddModal";
import StoryView from "./components/storyView/StoryView";

// css
import "../../stylesheets/css/base.css";
import Login from "../identity/Login";

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
      props.firestore.add("inboxList", {
        sender: props.auth.uid,
        inboxFor: e.target.value,
        book: "9xzHVb6LM4Cq67XUHFRF"
      });
      props.firestore.add("journeyList", {
        sender: props.auth.uid,
        notes: "This is a note"
      });
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

const Dashboard = ({ users, addBook, onSearchChange, searchVal, sendBook }) => {
  return (
    <div className="Dashboard">
      <ShelfList />
      <Navbar />
      {!isLoaded(users)
        ? ""
        : isEmpty(users)
        ? ""
        : users.map(user => (
            <button onClick={sendBook} key={user.uid} value={user.uid}>
              Send Book to {user.displayName}
            </button>
          ))}
      <button onClick={addBook}>Add book to your shelf</button>
      <input value={searchVal} onChange={onSearchChange} type="text" />
      {/* <ModalBase content={<SendModal />} /> */}
      {/* <ModalBase content={<AddModal />} /> */}
    </div>
  );
};

// const other = ({
//   modal
// }) => {
//   switch(modal){
//     case 'add':
//     return (
//       <div className="Dashboard">
//         <MainDashboard />
//         { <ModalBase content={<AddModal />} /> }
//       </div>
//     )
//   case 'send':
//     return (
//       <div className="Dashboard">
//         <MainDashboard />
//         { <ModalBase content={<AddModal />} /> }
//       </div>
//     )
//   case 'receive':
//     return (
//       <div className="Dashboard">
//         <MainDashboard />
//         { <ModalBase content={<AddModal />} /> }
//       </div>
//     )
//   default:
//     return (
//       <div className="Dashboard">
//         <MainDashboard />
//       </div>
//     )
//   }
// };

export default enhance(Dashboard);

// <ShelfList />
// <Navbar />
// {!isLoaded(users)
//   ? ""
//   : isEmpty(users)
//   ? ""
//   : users.map(user => (
//       <button
//         onClick={sendBook}
//         key={user.id}
//         value={user.id}
//       >
//         Send Book
//       </button>
//     ))}
// <button onClick={addBook} />
// <input value={searchVal} onChange={onSearchChange} type="text" />
// <ModalBase content={<SendModal />} />
// <ModalBase content={<AddModal />} />
// <ModalBase content={<ReceiveModal />} />
