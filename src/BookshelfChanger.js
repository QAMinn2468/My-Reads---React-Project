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
        <select onChange={(event) =>                                            // Would like to make the event listener passive (passive = true). To improve scroll preformance
          this.props.moving(this.props.book, event.target.value
          )}>
          <option value="move" disabled>Move to...</option>
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
