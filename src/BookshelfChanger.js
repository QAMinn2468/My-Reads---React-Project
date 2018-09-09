import React, { Component } from 'react'
// import Books as BooksAPI from './BooksAPI'


/******************************************************************************

Add method onChange="value" =>{
return shelf name
move to new shelf /delete from shelves}

removeBook = (book clicked on) => {
  this.setState((current state) => ({
    bookcase/all books on the MY READS PAGE: state.books
}))
}
39) onRemove={this.removeBookFromBC}

OR

currentshelf: bookcase: True && shelf: newValue
none: removeBook

Switch:
  (none) => {bookcase: false}, break;
  (read) => (bookcase: true, readShelf: true, currentshelf: false, wantShelf: false), break;
  (currentlyReading) => (bookcase: true, readShelf: false, currentshelf: true, wantShelf: false), break;
  (wantToRead) => (bookcase: true, readShelf: false, currentshelf: false, wantShelf: true), break;

*****************************************************************************/
// removeBookFromBC = (book) => {
//   this.setState((state) => ({
//     bookcase: state.books.filter((b) =>
//       b.id !== book.id)
//   }))
// }


class BookshelfChanger extends Component {
  render() {
    return(
      <div className="book-shelf-changer">
        <select>
          <option value="move" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    )
  }
}


export default BookshelfChanger
