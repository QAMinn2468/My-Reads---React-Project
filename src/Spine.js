<<<<<<< HEAD
import React, { Component } from 'react'
import './App.css'
import * as BooksAPI from './BooksAPI'
import BookshelfChanger from './BookshelfChanger'
||||||| merged common ancestors
// import React, { Component } from 'react'
// import './App.css'
// import * as BooksAPI from './BooksAPI'
// import BookshelfChanger from './BookshelfChanger'
=======
import React, { Component } from 'react'
import './App.css'
// import * as BooksAPI from './BooksAPI'
import BookshelfChanger from './BookshelfChanger'
>>>>>>> master



/******************************************************************************
prop- individual book key

<<<<<<< HEAD
{this.props.books.map((book) => (

))}
||||||| merged common ancestors
li> //
=======
.filter() => each shelf
>>>>>>> master

switch statement
*******************************************************************************/
<<<<<<< HEAD
class Spine extends Component {
  render() {
    return(

      <li key={book.title}>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={ width={book.width}, height={book.height}, backgroundImage={book.backgroundImage} }></div>
            <BookshelfChanger />
          </div>
          <div className="book-title">{book.bookTitle}</div>
          <div className="book-authors">{book.bookAuthors}</div>
        </div>
      </li>

    )
  }
}

export default Spine
||||||| merged common ancestors
// class Spine extends Component {
//   render() {
//     return(
//       {this.props.books.map((book) => (
//
//       <li key={book.id}>
//         <div className="book">
//           <div className="book-top">
//             <div className="book-cover" style={{ {book.width}, {book.height}, {book.backgroundImage} }}></div>
//             <BookshelfChanger />
//           </div>
//           <div className="book-title">{book.bookTitle}</div>
//           <div className="book-authors">{book.bookAuthors}</div>
//         </div>
//       </li>
//      ))}
//     )
//   }
// }
//
// export default Spine
=======

let cr = [];
let r = [];
let wr = [];

// divide books array into shelves

switch (book.shelf) {

  case 'CurrentlyReading':
    cr.push(book);
    break;

  case 'Read':
    r.push(book);
    break;

  case 'WantToRead':
    wr.push(book);
    break;

  default:
   break;
}

let book = []


class Spine extends Component {
  render() {
    return(
      <div>
      {this.props.map((book) => (

      <li key={book.title}>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={ {width: book.width}, {height: book.height}, {backgroundImage: book.backgroundImage} }>
            </div>
            <BookshelfChanger />
          </div>
          <div className="book-title">{book.title}</div>
          <div className="book-authors">{book.authors}</div>
        </div>
      </li>
    ))
   }
   </div>
    )
  }
}

export default Spine
>>>>>>> master
