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


// The shelf changes therefor the shelf is STATE not props!!!


// removeBookFromBC = (book) => {
//   this.setState((state) => ({
//     bookcase: state.books.filter((b) =>
//       b.id !== book.id)
//   }))
// }
function moveToCurrentlyRead(book) {
  book.shelf = 'CurrentlyReading';
}

function moveToRead(book) {
  book.shelf = 'Read';
}

function moveToWantToRead(book) {
  book.shelf = 'WantToRead';
}

function removeFromShelves(book) {
  book.shelf = '';
}

class BookshelfChanger extends Component {
  render() {
    return(
      <div className="book-shelf-changer">
        <select>
          <option value="move" disabled>Move to...</option>
          <option value="currentlyReading" onClick={() => moveToCurrentlyRead(book)}>Currently Reading</option>
          <option value="wantToRead" onClick={() => moveToWantToRead(book)}>Want to Read</option>
          <option value="read" onClick={() => moveToRead(book)}>Read</option>
          <option value="none" onClick={() => removeFromShelves(book)}>None</option>
        </select>
      </div>
    )
  }
}


export default BookshelfChanger
