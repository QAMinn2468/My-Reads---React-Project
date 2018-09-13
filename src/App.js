import React from 'react'
import CurrentlyReading from './CurrentlyReading'
import Read from './Read'
import Search from './Search'
import WantToRead from './WantToRead'
// import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {
    // screen: 'Bookcase',  // Bookcase or Search
    // books= []
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.

     bookcase: T/F Is this a book on the MY READS PAGE?
     switch: want or read or current?

     */
    showSearchPage: false
  }

//   componentDidMount() {
//   BooksAPI.getAll().then((books) => {                         -// TODO: once backend server is attached, unveil
//     this.setState({ books })
//   })
// }

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <Search />
        ) : (
          <div className="list-books">
            <div className="list-books-title">
              <h1>~ Kim's Reads ~</h1>
            </div>
            <div className="list-books-content">
              <div>
                <CurrentlyReading books={[{
                   width: 128,
                   height: 193,
                   backgroundImage: 'url("http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api")',
                   title: 'To Kill a Mockingbird',
                   authors: 'Harper Lee',
                   shelf: 'CurrentlyReading'
                 }, {
                   width: 128,
                   height: 188,
                   backgroundImage: 'url("http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api")',
                   title: 'Ender\'s Game',
                   authors: 'Orson Scott Card',
                   shelf: 'CurrentlyReading'
                 }
                 ]}/>
                <WantToRead />
                <Read />
              </div>
            </div>
            <div className="open-search">
              <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default BooksApp
