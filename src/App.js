import React from 'react'
import Search from './Search'
import CurrentlyReading from './CurrentlyReading'
import Read from './Read'
import WantToRead from './WantToRead'
import * as BooksAPI from './BooksAPI'
import './App.css'
import reactDOM from 'react-dom'

class BooksApp extends React.Component {
  state = {
    showSearchPage: false,
    books: []
  }

componentDidMount() {
  BooksAPI.getAll().then((books) => {
    this.setState({ books })
  })
}


  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <Search />
        ) : (
          <div className="list-books">
            <div className="list-books-title">
              <h1>~My Reads ~</h1>
            </div>
            <div className="list-books-content">
              <div>
                <CurrentlyReading books={this.state.books}/>
                <WantToRead books={this.state.books}/>
                <Read books={this.state.books}/>
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
