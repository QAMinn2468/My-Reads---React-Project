import React from 'react'
import Search from './Search'
import CurrentlyReading from './CurrentlyReading'
import Read from './Read'
import WantToRead from './WantToRead'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Link } from 'react-router-dom'
import { Route } from 'react-router-dom'


class BooksApp extends React.Component {
  state = {
    screen: '/',   // /, /search
    books: []
  }

componentDidMount() {                                                          // Once mounted, gather the books on shelves
  BooksAPI.getAll().then((books) => {
    this.setState({ books: books })
  })
}

moving = (book, shelf) => {                                                     //  https://reactjs.org/docs/handling-events.html *Experimental Syntax*
  BooksAPI.update(book, shelf)                                                  // book.shelf is the new shelf

  BooksAPI.getAll()
      .then((books) => {this.setState({ books: books })})
      .then(this.setState({ showSearchPage: false }))                               // Once book is move to new shelf, return to main page.
}

  render() {
    return (
      <div className="app">
        <Route exact path="/" render{() => (
          <div>
          <Search screen={this.state.screen} books={this.state.books} moving={this.moving}/>
            <div className="list-books">
              <div className="list-books-title">
                <h1>~My Reads ~</h1>
              </div>
              <div className="list-books-content">
                <div>
                  <CurrentlyReading books={this.state.books} moving={this.moving}/>
                  <WantToRead books={this.state.books} moving={this.moving}/>
                  <Read books={this.state.books} moving={this.moving}/>
                </div>
              </div>
              <div className="open-search">
                <Link> to='/search' className='add-book'>Add a book
                 </Link>
              </div>
            </div>
          </div>
        )}/>
    </div>
  )}
}

export default BooksApp
