import React, { Component } from 'react'
import BookshelfChanger from './BookshelfChanger'

class CurrentlyReading extends Component {
  render() {
    const library = this.props.books
    return(
      <div className="bookshelf">
        <h2 className="bookshelf-title">Currently Reading</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {library
              .filter(book => book.shelf === 'currentlyReading')
              .map(book => (
              <li key={book.id}>
                <div className="book">
                  <div className="book-top">
                  <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                    <BookshelfChanger book={this.props.books} moving={this.props.moving}/>
                  </div>
                  <div className="book-title">{book.title}</div>
                  <div className="book-authors">{book.authors}</div>
                </div>
              </li>
            ))
          }
          </ol>
        </div>
      </div>
    )
  }
}

export default CurrentlyReading
