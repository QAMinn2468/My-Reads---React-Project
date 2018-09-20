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
    screen: '',                                                                 // '' or 'create'
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
}

  render() {
    return (
      <div>
      <div className="app">
        <Search books={this.state.books}
                className='search-hide'
                moving={this.moving}
                onNavigate={() => {
            this.setState({ screen: 'search' })}}/>
        <Route exact path="/" render={() => (

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
              <Link to='/search'
                    className='add-book'
                    >Add a book</Link>
            </div>
          </div>
    )} />
    </div>

    </div>
  )
  }
}

export default BooksApp
