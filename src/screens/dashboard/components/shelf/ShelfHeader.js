import React from "react";
import PropTypes from "prop-types";
import { compose } from "redux";
import { withHandlers, branch, renderNothing } from "recompose";
import { withFirestore } from "react-redux-firebase";

// css
import "../../../../stylesheets/css/base.css";

const ShelfHeader = ({changeModal}) => {
  return (
    <div className="ShelfHeader">
      <div>My Books</div>
      <button 
        onClick={() => changeModal('add')}
        className="ShelfHeader-add-btn"
        ></button>
    </div>
  );
};

export default ShelfHeader;
