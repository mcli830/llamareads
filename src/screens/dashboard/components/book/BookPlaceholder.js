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
    <div className="wrapper">
      <div className="cube">
        <div className="side  front"><i class="fas fa-plus"></i></div>
        <div className="side   back">2</div>
        <div className="side  right">3</div>
        <div className="side   left">4</div>
        <div className="side    top">5</div>
        <div className="side bottom">6</div>
      </div>
    </div>

    </div>
  );
};

export default enhance(BookPlaceholder);
