import React, { Component } from 'react'

class Search extends Component {
  render() {
    return(
      <div className="search-books">
        <div className="search-books-bar">
          <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
          <div className="search-books-input-wrapper">
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.


              const library = this.props.books

              {library
                .filter(book => book.shelf === 'currentlyReading')
                .map(book => (
                <li key={book.id}>
                  <div className="book">
                    <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 190, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                      <BookshelfChanger book={book} moving={this.props.moving}/>
                    </div>
                    <div className="book-title">{book.title}</div>
                    <div className="book-authors">{book.authors}</div>
                  </div>
                </li>
              ))
            }

            */}
            <input type="text" placeholder="Search by title or author"/>
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid"></ol>
        </div>
      </div>
    )
  }
}

export default Search
