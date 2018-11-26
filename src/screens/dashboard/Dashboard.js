import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { withHandlers } from "recompose";
import { firebaseConnect, isLoaded, isEmpty } from 'react-redux-firebase';

// components
import Navbar from "./components/navbar/Navbar";
import ShelfList from "./components/shelf/ShelfList";

// css
import "../../stylesheets/css/base.css";

const enhance = compose(
  firebaseConnect(),
  connect(({ firebase: { auth } }) => ({ auth })),
  withHandlers({
    pushSample: ({firebase, auth}) => firebase.push('userBooks', {
      books: "9xzHVb6LM4Cq67XUHFRF",
      booksFor: auth.uid
    })
  })
)

const Dashboard = ({ pushSample }) => {
  return (
    <div className="Dashboard">
      <ShelfList />
      <Navbar />
      <button onClick={pushSample}></button>
    </div>
  );
};

export default enhance(Dashboard);
