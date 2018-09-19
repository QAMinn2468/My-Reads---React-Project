import React, { Component } from 'react'
import BookshelfChanger from './BookshelfChanger'
import * as BooksAPI from './BooksAPI'
import { Link } from 'react-router-dom'
import { Route } from 'react-router-dom'


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
  let catchThumbnail = this.state.resultBooks.imageLinks ?
                       this.state.resultBooks.imageLinks.thumbnail : ''

    return(
        <div>
          <div className="search-books">
            <div className="search-books-bar">
              <Link to='/' className='close'>Close</Link>
                 <Route exact path="/" component={App} />
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
                  {this.state.resultBooks.map(book => (
                    <li key={book.id}>
                      <div className="book">
                        <div className="book-top">
                          <div className="book-cover" style={{ width: 128, height: 190, backgroundImage: `url(${catchThumbnail})` }}></div>
                            <BookshelfChanger book={book} moving={this.props.moving}/>
                        </div>
                        <div className="book-title">{book.title}</div>
                        <div className="book-authors">{book.authors}</div>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>


        </div>

  )}}

export default Search
