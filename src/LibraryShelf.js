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
                <li key={book.id}>
                <Book
                      currentShelf={'currentlyReading'}
                      book={book}
                      moving={this.props.moving}
                      />
                </li>
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
                <li key={book.id}>
                <Book
                     currentShelf={'wantToRead'}
                     book={book}
                     moving={this.props.moving}
                     />
                </li>

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
                <li key={book.id}>
                <Book
                     currentShelf={'read'}
                     book={book}
                     moving={this.props.moving}
                     />
                </li>

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
