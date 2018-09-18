import React, { Component } from 'react'
import BookshelfChanger from './BookshelfChanger'
import * as BooksAPI from './BooksAPI'
// import RegExp from 'RegExp'
// import sortBy from 'sortBy'




// let showingQuery
// if (this.state.query) {
  // const match = new RegExp(escapeRegExp(this.state.query), 'i')
  // showingQuery = this.props.resultBooks.filter((resultBook) =>
  //   match.test(resultBook.title || resultBook.authors || resultBook.subject))
  // } else {
    // showingQuery = this.props.resultBooks
  // }

// showingQuery.sort(sortBy('authors'))



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
    this.setState({ resultBooks: resultBooks })
  })
} else {
  this.setState({ resultBooks: []} )
}
}

render() {
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

export default Search
