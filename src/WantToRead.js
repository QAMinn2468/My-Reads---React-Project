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
            {library.map(book => (
            <li key={book.title}>
              <div className="book">
                <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: `url(${book.backgroundImage})` }}></div>
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
