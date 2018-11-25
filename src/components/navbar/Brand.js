import React from "react";
import PropTypes from "prop-types";
import { compose } from "redux";
import { withHandlers, branch, renderNothing } from "recompose";
import { withFirestore } from "react-redux-firebase";

const Brand = () => {
  return (
    <div className="Brand">
      <div className="Brand-name">Llama</div>
    </div>
  );
};

export default Brand;
