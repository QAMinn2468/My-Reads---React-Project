import React, { Component } from 'react'
import './App.css'
import * as BooksAPI from './BooksAPI'
import BookshelfChanger from './BookshelfChanger'
import Data from './Data.js'



/******************************************************************************
prop- individual book key

.filter() => each shelf

switch statement
*******************************************************************************/
let cr = [];
let r = [];
let wr = [];

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


class Spine extends Component {
  render() {
    return(
      {this.props.books.map((book) => (

      <li key={book.id}>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ {book.width}, {book.height}, {book.backgroundImage} }}></div>
            <BookshelfChanger />
          </div>
          <div className="book-title">{book.title}</div>
          <div className="book-authors">{book.authors}</div>
        </div>
      </li>



    ))
   }
    )
  }
}

export default Spine
