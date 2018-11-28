import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { compose } from "redux";
import { withHandlers, branch, renderNothing } from "recompose";
import { withFirestore } from "react-redux-firebase";

import viewModal from "../../../../functions/actions/viewModal";

// components

// css
import "../../../../stylesheets/css/base.css";

const ModalBase = props => (
  <div className="ModalBase">
    <div className="ModalBase-view">
      <div className="ModalBase-visuals" />
      <div className="ModalBase-exit" onClick={props.exit} />
      <div className="ModalBase-header">{props.title}</div>
      <div className="ModalBase-content">{props.content}</div>
    </div>
  </div>
);

export default ModalBase;
