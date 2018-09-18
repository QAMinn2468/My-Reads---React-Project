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
    showSearchPage: false,
    books: []
  }

componentDidMount() {                                                          // Once mounted, gather the books on shelves
  BooksAPI.getAll().then((books) => {
    this.setState({ books })
  })
}

moving = (book, shelf) => {                                                     //  https://reactjs.org/docs/handling-events.html *Experimental Syntax*
  console.log(shelf);
  BooksAPI.update(book, shelf)                                                  // book.shelf is the new shelf
  .then(this.setState({ showSearchPage: false }))                               // Once book is move to new shelf, return to main page.
  .then((book, shelf) => {
    this.setState({book, shelf})                                                // Macrunning (FEND) tip on Slack project 6 channel.
  })
}

// searchForBook = () => {
//   BooksAPI.search(query)
// }


  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <Search moving={this.moving}/>
        ) : (
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
        )}
      </div>
    )
  }
}

export default BooksApp
