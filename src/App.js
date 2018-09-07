import React from 'react'
import BookshelfChanger from './BookshelfChanger'
import CurrentlyReading from './CurrentlyReading'
import Read from './Read'
import Search from './Search'
import WantToRead from './WantToRead'

// import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false
  }

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
                <CurrentlyReading />
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
