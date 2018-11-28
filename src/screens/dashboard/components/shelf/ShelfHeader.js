import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { compose } from "redux";
import { withStateHandlers, branch, renderNothing, withState } from "recompose";
import { withFirestore } from "react-redux-firebase";

// css
import "../../../../stylesheets/css/base.css";


const enhance = compose(
  connect(
    ({ app }) => ({ appState: app })
  ),
  withState('modal', 'viewModal', 'add')
);

const ShelfHeader = ({changeModal, viewModal}) => {
  return (
    <div className="ShelfHeader">
      <div>My Books</div>
      <button 
        onClick={() => viewModal('add')}
        className="ShelfHeader-add-btn"
        ></button>
    </div>
  );
};

export default enhance(ShelfHeader);
