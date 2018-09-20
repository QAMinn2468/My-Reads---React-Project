import React from 'react'
import Search from './Search'
import CurrentlyReading from './CurrentlyReading'
import Read from './Read'
import WantToRead from './WantToRead'
import * as BooksAPI from './BooksAPI'
import './App.css'
// import reactDOM from 'react-dom'

class BooksApp extends React.Component {
  state = {
    screen: '',                                                                 // '' or 'create'
    showSearchPage: false,
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
      <div>
      {this.state.screen === '' && (

      <div className="app">
          <Search books={this.state.books}
                  moving={this.moving}
                  onNavigate={() => {
              this.setState({ screen: 'search' })
            }}/>
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
              <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
            </div>
          </div>
      </div>
    )}
    </div>
  )
  }
}

export default BooksApp
