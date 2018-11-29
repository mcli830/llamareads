import React from "react";
import "../../../../stylesheets/css/base.css";

const ModalBaseTitle = props => (
  <div>
    <span className="text-light">{props.prefix}</span>
    <span className="ModalBaseTitle-book-title" style={{ fontStyle: "italic" }}>
      <i className="quote-left" class="fas fa-quote-left" />
      {props.title}
      <i className="quote-right" class="fas fa-quote-right" />
    </span>
    <span className="text-light">{props.suffix}</span>
  </div>
);

export default ModalBaseTitle;
