import React, { Component } from 'react'
import Book from './Book'

class LibraryShelf extends Component {
  render() {
    const library = this.props.books
    return(
      <div>
      <div className="bookshelf">
        <h2 className="bookshelf-title">Currently Reading</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {library
              .filter(book => book.shelf === 'currentlyReading')
              .map(book => (
                <Book book={book} moving={this.props.moving} />
            ))
          }
          </ol>
        </div>
      </div>
      <div className="bookshelf">
        <h2 className="bookshelf-title">Books I Want to Read</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {library
              .filter(book => book.shelf === 'wantToRead')
              .map(book => (
                <Book book={book} moving={this.props.moving} />
            ))
          }
          </ol>
        </div>
      </div>
      <div className="bookshelf">
        <h2 className="bookshelf-title">Books I Have Read</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {library
              .filter(book => book.shelf === 'read')
              .map(book => (
                <Book book={book} moving={this.props.moving} />
            ))
          }
          </ol>
        </div>
      </div>
      </div>
    )
  }
}

export default LibraryShelf
