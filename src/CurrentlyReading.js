import React, { Component } from 'react'
import BookshelfChanger from './BookshelfChanger'
import Spine from './Spine'

class CurrentlyReading extends Component {
  render() {
    return(
      <div className="bookshelf">
        <h2 className="bookshelf-title">Currently Reading</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            <Spine />
          </ol>
        </div>
      </div>
    )
  }
}

export default CurrentlyReading
