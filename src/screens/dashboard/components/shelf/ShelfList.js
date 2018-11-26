import React from "react";
import PropTypes from "prop-types";
import { compose } from "redux";
import { withHandlers, branch, renderNothing } from "recompose";
import { withFirestore } from "react-redux-firebase";

// linked component
import Shelf from "./Shelf";

// css
import "../../../../stylesheets/css/base.css";

const ShelfList = () => {
  return (
    <div className="ShelfList">
      <Shelf />
    </div>
  );
};

export default ShelfList;
