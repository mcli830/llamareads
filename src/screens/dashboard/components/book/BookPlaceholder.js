import React from "react";
import PropTypes from "prop-types";
import { compose } from "redux";
import { connect } from "react-redux";
import { withHandlers, withProps } from "recompose";
import { firestoreConnect, isLoaded, isEmpty } from "react-redux-firebase";

// css
import "../../../../stylesheets/css/base.css";

//actions
import viewModal from "../../../../functions/actions/viewModal";

const enhance = compose(
  connect(({ dispatch }) => ({ dispatch })),
);

const BookPlaceholder = (props) => {
  return (
    <div
      className="Book-placeholder"
      onClick={() => props.dispatch(viewModal('add'))}
    >
      <div className="Book-add-btn" />
    </div>
  );
};

export default enhance(BookPlaceholder);