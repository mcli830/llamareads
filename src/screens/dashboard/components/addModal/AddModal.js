import React from "react";
import PropTypes from "prop-types";
import { compose } from "redux";
import { withHandlers, branch, renderNothing } from "recompose";
import { withFirestore } from "react-redux-firebase";

// components
import "./SearchResults";
import "../modal/ModalActions/modalActions";

// css
import "../../../../stylesheets/css/base.css";

const AddModal = () => {
  return (
    <div className="AddModal">
      <div className="AddModal-search">
        <input id="AddModal-search-input" />
      </div>
      <SearchResults />
      <ModalActions />
    </div>
  );
};

export default AddModal;
