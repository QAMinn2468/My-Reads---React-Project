import React, { Component } from 'react'
<<<<<<< HEAD
import BookshelfChanger from './BookshelfChanger'
// import Spine from './Spine'

||||||| merged common ancestors
import BookshelfChanger from './BookshelfChanger'

=======
// import BookshelfChanger from './BookshelfChanger'
import Spine from './Spine'
>>>>>>> master

class CurrentlyReading extends Component {
  render() {
    const library = this.props.books
    return(
      <div className="bookshelf">
        <h2 className="bookshelf-title">Currently Reading</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
<<<<<<< HEAD
            {library.map(book => (
              <li key={book.title}>
                <div className="book">
                  <div className="book-top">
                  <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: `url(${book.backgroundImage})` }}></div>
                    <BookshelfChanger />
                  </div>
                  <div className="book-title">{book.title}</div>
                  <div className="book-authors">{book.authors}</div>
                </div>
              </li>
            ))
          }

||||||| merged common ancestors
            <li>
              <div className="book">
                <div className="book-top">
                  <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url("http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api")' }}></div>
                    <BookshelfChanger />
                </div>
                <div className="book-title">To Kill a Mockingbird</div>
                <div className="book-authors">Harper Lee</div>
              </div>
            </li>
            <li>
              <div className="book">
                <div className="book-top">
                  <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: 'url("http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api")' }}></div>
                  <BookshelfChanger />
                </div>
                <div className="book-title">Ender's Game</div>
                <div className="book-authors">Orson Scott Card</div>
              </div>
            </li>
=======
            <Spine />
>>>>>>> master
          </ol>
        </div>
      </div>
    )
  }
}

export default CurrentlyReading
