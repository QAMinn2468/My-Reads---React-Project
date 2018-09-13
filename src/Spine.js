import React, { Component } from 'react'
import './App.css'
import * as BooksAPI from './BooksAPI'
import BookshelfChanger from './BookshelfChanger'



/******************************************************************************
prop- individual book key
style is unique.
title (The Hobbit) & authors (J.R.R. Tolkien) too.

{this.props.books.map((book) => (

))}

*******************************************************************************/
class Spine extends Component {
  render() {
    return(

      <li key={book.title}>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={ width={book.width}, height={book.height}, backgroundImage={book.backgroundImage} }></div>
            <BookshelfChanger />
          </div>
          <div className="book-title">{book.bookTitle}</div>
          <div className="book-authors">{book.bookAuthors}</div>
        </div>
      </li>

    )
  }
}

export default Spine
