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
import BookPlaceholder from "../book/BookPlaceholder";

// css
import "../../../../stylesheets/css/base.css";

const Shelf = (props) => {
  return (
    <div className="Shelf-wrapper">
      <div className="Shelf">
        <div className="Shelf-platform">
          <div className="Shelf-header">My Books</div>
        </div>
        <BookList />
        <div className="Shelf-right">
          <BookPlaceholder />
          <div className="Llama-container"></div>
        </div>
    </div>
    </div>
  );
};

export default Shelf;
