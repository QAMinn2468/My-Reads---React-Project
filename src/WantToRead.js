import React, { Component } from 'react'
import BookshelfChanger from './BookshelfChanger'


class WantToRead extends Component {
  render() {
    return(
      <div className="bookshelf2">
        <h2 className="bookshelf-title">Want to Read</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            <Spine />
          </ol>
        </div>
      </div>
    )
  }
}

export default WantToRead
