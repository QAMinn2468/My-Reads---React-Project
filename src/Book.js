import React, { Component } from 'react'
import BookshelfChanger from './BookshelfChanger'
import Description from './Description'



class Book extends Component {
  render() {
    let catchThumbnail = this.props.book.imageLinks ? this.props.book.imageLinks.thumbnail : ''

    return(
        <div className="book">
          <div className="dButton"  >
            <Description book={this.props.book}  />
          </div>
          <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 190, backgroundImage: `url("${catchThumbnail}")` }}></div>
            <BookshelfChanger book={this.props.book} moving={this.props.moving}/>
          </div>
          <div className="book-title">{this.props.book.title}</div>
          <div className="book-authors">{this.props.book.authors}</div>
        </div>
    )
  }
}

export default Book
