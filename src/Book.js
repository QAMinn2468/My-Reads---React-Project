import React, { Component } from 'react'
import BookshelfChanger from './BookshelfChanger'

catchThumbnail = () =>
 (this.props.book.imageLinks) ? return 'this.props.book.imageLinks.thumbnail': return ''

class Book extends Component {
  render() {
    return(

      <li key={this.props.book.id}>
        <div className="book">
          <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 190, backgroundImage: `url(${catchThumbnail})` }}></div>
            <BookshelfChanger book={this.props.book} moving={this.props.moving}/>
          </div>
          <div className="book-title">{this.props.book.title}</div>
          <div className="book-authors">{this.props.book.authors}</div>
        </div>
      </li>
    )
  }
}

export default Book
