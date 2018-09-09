import React, { Component } from 'react'
import BookshelfChanger from './BookshelfChanger'
// import Spine from './Spine'
import './App.css'
// line 15             <Spine />     return when backend is attached



class Read extends Component {
  render() {
    return(
      <div className="bookshelf3">
        <h2 className="bookshelf-title">Read</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            <Spine />
          </ol>
        </div>
      </div>
    )
  }
}

export default Read
