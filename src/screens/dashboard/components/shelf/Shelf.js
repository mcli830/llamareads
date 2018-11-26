import React from "react";
import PropTypes from "prop-types";
import { compose } from "redux";
import { withHandlers, branch, renderNothing } from "recompose";
import { withFirestore } from "react-redux-firebase";

// linked component
import ShelfPlatform from "./ShelfPlatform";
import ShelfHeader from "./ShelfHeader";
import BookList from "../book/BookList";

// css
import "../../../../stylesheets/css/base.css";

const Shelf = () => {
  return (
    <div className="Shelf">
      <ShelfHeader />
      <BookList />
    </div>
  );
};

export default Shelf;
