import React, { Component } from 'react'
import BookshelfChanger from './BookshelfChanger'
// import Description from './Description'

// <div className="dButton"  >
//   <Description book={this.props.book}  />
// </div>


class Book extends Component {
  render() {
    let catchThumbnail = this.props.book.imageLinks ? this.props.book.imageLinks.thumbnail : ''

    return(
        <div className="book">

          <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 190, backgroundImage: `url("${catchThumbnail}")` }}></div>
            <BookshelfChanger
              book={this.props.book}
              moving={this.props.moving}
              currentShelf={this.props.currentShelf}
              />
          </div>
          <div className="book-title">{this.props.book.title}</div>
          <div className="book-authors">{this.props.book.authors}</div>
        </div>
    )
  }
}

export default Book
