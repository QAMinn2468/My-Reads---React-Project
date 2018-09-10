import React, { Component } from 'react'
import './App.css'
// import * as BooksAPI from './BooksAPI'
import BookshelfChanger from './BookshelfChanger'



/******************************************************************************
prop- individual book key

.filter() => each shelf

switch statement
*******************************************************************************/

let cr = [];
let r = [];
let wr = [];

// divide books array into shelves

switch (book.shelf) {

  case 'CurrentlyReading':
    cr.push(book);
    break;

  case 'Read':
    r.push(book);
    break;

  case 'WantToRead':
    wr.push(book);
    break;

  default:
   break;
}

let book = []


class Spine extends Component {
  render() {
    return(
      <div>
      {this.props.map((book) => (

      <li key={book.title}>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={ {width: book.width}, {height: book.height}, {backgroundImage: book.backgroundImage} }>
            </div>
            <BookshelfChanger />
          </div>
          <div className="book-title">{book.title}</div>
          <div className="book-authors">{book.authors}</div>
        </div>
      </li>
    ))
   }
   </div>
    )
  }
}

export default Spine
