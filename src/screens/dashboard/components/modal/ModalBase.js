import React from "react";
import PropTypes from "prop-types";
import { compose } from "redux";
import { withHandlers, branch, renderNothing } from "recompose";
import { withFirestore } from "react-redux-firebase";

// components

// css
import "../../../../stylesheets/css/base.css";

const ModalBase = props => {
  return (
    <div className="ModalBase" onClick={
      function(e){
        if (e.target == document.querySelector('.ModalBase')){
          props.changeModal('');
        }
      }
    }>
      <div className="ModalBase-view">
        <div className="ModalBase-visuals" />
        <div className="ModalBase-exit" onClick={()=>props.changeModal('')} />
        <div className="ModalBase-header">Modal Title Message</div>
        <div className="ModalBase-content">{props.content}</div>
      </div>
    </div>
  );
};

export default ModalBase;
