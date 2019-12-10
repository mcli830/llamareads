import React from "react";
import PropTypes from "prop-types";
import { compose } from "redux";
import { connect } from "react-redux";
import { withHandlers } from "recompose";
import { firestoreConnect, isLoaded, isEmpty } from "react-redux-firebase";

// components
import Book from "./Book";
import BookPlaceholder from "./BookPlaceholder";

// css
import "../../../../stylesheets/css/base.css";

const enhance = compose(
  connect(({ firebase: { auth } }) => ({ auth })),
  firestoreConnect(({ auth }) => [
    {
      collection: 'userBooks',
      where: [
        ['inbox', '==', false],
        ['user', '==', auth.uid]
      ]
    }
  ]),
  connect(({ firestore }) => ({
    userBooks: firestore.ordered.userBooks
  })),
  connect(({view, dispatch}) => ({view, dispatch}))
);

class BookList extends React.Component {
  constructor(props){
    super(props);
    this.cooldown = true;
    this.handleWheel = this.handleWheel.bind(this);
    // this.loadBooks(this.props);
  }

  componentDidMount() {
    document.addEventListener('wheel', this.handleWheel);
  }

  componentWillUnmount() {
    document.removeEventListener('wheel', this.handleWheel);
  }

  flowPosition(index, length) {
    var midpoint = Math.round(length / 2) - 1;
    var position = index - midpoint;
    if (position < -4) return "sl";
    if (position > 4) return "sr";
    switch (position){
      case -4: return "s1"
      case -3: return "s2"
      case -2: return "s3"
      case -1: return "s4"
      case 0: return "s5"
      case 1: return "s6"
      case 2: return "s7"
      case 3: return "s8"
      case 4: return "s9"
      default: return ""
    }
  }

  handleWheel(e) {
    if (this.props.view.modal == '' && !this.props.view.story){
      const dir = e.deltaX / Math.abs(e.deltaX);
      this.changePosition(dir);
    }
  }

  changePosition(dir){
    if (this.cooldown){
      this.cooldown = false;
      var sl,s1,s2,s3,s4,s5,s6,s7,s8,s9,sr;
      if (dir < 1) {
        var s5 = document.getElementsByClassName('s4')[0];
      } else {
        var s5 = document.getElementsByClassName('s6')[0];
      }
      if (s5) s4 = s5.previousSibling;
      if (s4) s3 = s4.previousSibling;
      if (s3) s2 = s3.previousSibling;
      if (s2) s1 = s2.previousSibling;
      if (s1) sl = s1.previousSibling;
      if (s5) s6 = s5.nextSibling;
      if (s6) s7 = s6.nextSibling;
      if (s7) s8 = s7.nextSibling;
      if (s8) s9 = s8.nextSibling;
      if (s9) sr = s9.nextSibling;
      if (sl) sl.className = "Book Angled-slide sl";
      if (s1) s1.className = "Book Angled-slide s1";
      if (s2) s2.className = "Book Angled-slide s2";
      if (s3) s3.className = "Book Angled-slide s3";
      if (s4) s4.className = "Book Angled-slide s4";
      if (s5) s5.className = "Book Angled-slide s5";
      if (s6) s6.className = "Book Angled-slide s6";
      if (s7) s7.className = "Book Angled-slide s7";
      if (s8) s8.className = "Book Angled-slide s8";
      if (s9) s9.className = "Book Angled-slide s9";
      if (sr) sr.className = "Book Angled-slide sr";
      setTimeout(()=>{
        this.cooldown = true;
      }, 80);
    }
  }

  render() {
    return (
      <div className="BookList Angled">
        <div className="Angled-wrapper">
        {!isLoaded(this.props.userBooks)
          ? <div className="spinner-square" />
          : isEmpty(this.props.userBooks)
          ? <div className="shelf-alert"><div>Add a book to your collection</div></div>
          : this.props.userBooks.sort((a,b)=> new Date(b.date) - new Date(a.date)).map((book, index) => (
              <Book
                key={book.id}
                book={book.book}
                journey={book.journey}
                flow={this.flowPosition(index, this.props.userBooks.length)}
              />
            ))
        }
        </div>
      </div>
    );
  }
}

export default enhance(BookList);
