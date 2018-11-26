import React from "react";
import PropTypes from "prop-types";
import { compose } from "redux";
import { withHandlers, branch, renderNothing } from "recompose";
import { withFirestore } from "react-redux-firebase";

// components

// css
import "../../../../stylesheets/css/base.css";

const BookCard = () => {
  return (
    <div className="BookCard">
      <div className="BookCard-cover">
        <img
          className="BookCard-cover-img"
          src="https://images-na.ssl-images-amazon.com/images/G/01/aplusautomation/vendorimages/83031f01-7618-44c8-803a-75351555d121.jpg._CB301830675_.jpg"
          alt=""
        />
      </div>
      <div className="BookCard-info">
        <div className="BookCard-title">
          Title: <strong>Pax</strong>
        </div>
        <div className="BookCard-author">
          Author: <strong>Sara Pennypacker</strong>
        </div>
        <div className="BookCard-description">
          A moving story of the extraordinary friendship between a boy and his
          fox, and their epic journey to be reunited. Beautifully illustrated by
          multi-award winner, Jon Klassen. Pax was only a kit when his family
          was killed and he was rescued by ‘his boy’, Peter…
        </div>
        <button className="BookCard-details btn">Details</button>
      </div>
    </div>
  );
};

export default BookCard;
