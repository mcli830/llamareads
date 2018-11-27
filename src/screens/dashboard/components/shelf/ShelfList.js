import React from "react";
import PropTypes from "prop-types";
import { compose } from "redux";
import { withHandlers, branch, renderNothing } from "recompose";
import { withFirestore } from "react-redux-firebase";

// linked component
import Shelf from "./Shelf";

// css
import "../../../../stylesheets/css/base.css";

const ShelfList = ({ changeModal, sendBook }) => {
  return (
    <div className="ShelfList">
      <Shelf changeModal={changeModal} sendBook={sendBook} />
    </div>
  );
};

export default ShelfList;
