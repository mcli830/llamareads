import React from "react";
import PropTypes from "prop-types";
import { compose } from "redux";
import { withHandlers, branch, renderNothing } from "recompose";
import { withFirestore } from "react-redux-firebase";

// css
import "../../../../stylesheets/css/base.css";

const ShelfHeader = ({setModal}) => {
  return (
    <div className="ShelfHeader">
      <div>My Books</div>
      <button 
        onClick={()=>setModal("add")}
        className="ShelfHeader-add-btn"
        >+</button>
    </div>
  );
};

export default ShelfHeader;
