import React, { Component } from 'react'
import BookshelfChanger from './BookshelfChanger'
import * as BooksAPI from './BooksAPI'



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
  BooksAPI.search(query).then((resultBooks) => {
    this.setState({ resultBooks: resultBooks })
  })
}

render() {
  if (this.state.query) {
    return(
      <div className="search-books">
        <div className="search-books-bar">
          <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
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

            {this.state.resultBooks.map(resultBooks => (
              <li key={resultBooks.id}>
                <div className="book">
                  <div className="book-top">
                  <div className="book-cover" style={{ width: 128, height: 190, backgroundImage: `url(${resultBooks.imageLinks.thumbnail})` }}></div>
                    <BookshelfChanger resultBooks={resultBooks} moving={this.props.moving}/>
                  </div>
                  <div className="book-title">{resultBooks.title}</div>
                  <div className="book-authors">{resultBooks.authors}</div>
                </div>
              </li>
            ))}

          </ol>
        </div>
      </div>
    )
  }
}

  } else {
    return(
      <div className="search-books">
        <div className="search-books-bar">
          <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
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
            <p>That search term is not listed.  Please try again. </p>
          </div>
        </div>
      )
    }

export default Search
