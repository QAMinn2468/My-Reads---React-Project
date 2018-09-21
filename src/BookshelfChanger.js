import React, { Component } from 'react'

class BookshelfChanger extends Component {
  render() {
    return(
      <div className="book-shelf-changer">
        <select onChange={(event) => this.props.moving(this.props.book, event.target.value)}>
          <option value="move" disabled selected="selected">Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Books I Want to Read</option>
          <option value="read">Books I Have Read</option>
          <option value="none">None</option>
        </select>
      </div>
    )
  }
}


export default BookshelfChanger
