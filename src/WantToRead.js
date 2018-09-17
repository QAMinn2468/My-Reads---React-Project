import React, { Component } from 'react'
import BookshelfChanger from './BookshelfChanger'
// books={[wr]}

class WantToRead extends Component {
  render() {
    const library = this.props.books
    return(
      <div className="bookshelf2">
        <h2 className="bookshelf-title">Books I Want to Read</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {library
              .filter(book => book.shelf === 'wantToRead')
              .map(book => (
            <li key={book.id}>
              <div className="book">
                <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                  <BookshelfChanger />
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.authors}</div>
              </div>
            </li>
          ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default WantToRead
