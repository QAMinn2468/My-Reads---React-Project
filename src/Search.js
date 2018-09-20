import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import { Link } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Book from './Book'


class Search extends Component {
  state = {
    query: '',
    resultBooks: []
  }

updateQuery = (query) => {
  this.setState({
    query: query
  })
  this.searchForBook(query)
}

searchForBook = (query) => {
  if (query) {
  BooksAPI.search(query).then((resultBooks) => {
    if (resultBooks.error) {
      this.setState({ resultBooks: [] })
    } else {
      this.setState({ resultBooks: resultBooks })
    }
  })
} else {
  this.setState({ resultBooks: [] })
}
}

render() {
    return(
      <div>
      <Route path="/search" render={() => (

      <div className="search-books">
        <div className="search-books-bar">
          <Link to='/'
                className="close-search"
          >Close</Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.query}
              onChange={(event) =>
                this.updateQuery(event.target.value)}
              />
                </div>
              </div>
              <div className="search-books-results">
                <ol className="books-grid">
                  {
                    this.state.resultBooks.map(resultBook => (
                      <li key={resultBook.id}>
                      <Book book={resultBook} moving={this.props.moving} />
                      </li>
                  ))}
                </ol>
              </div>
            </div>
     )} />
     </div>
    )
  }
}

export default Search
