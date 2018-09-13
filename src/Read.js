import React, { Component } from 'react'
import BookshelfChanger from './BookshelfChanger'
// import Spine from './Spine'
import './App.css'
// line 15             <Spine />     return when backend is attached
// books={[r]}


class Read extends Component {
  render() {
    return(
      <div className="bookshelf3">
        <h2 className="bookshelf-title">Books I Have Read</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            <li>
              <div className="book">
                <div className="book-top">
                  <div className="book-cover" style={{ width: 128, height: 174, backgroundImage: 'url("http://books.google.com/books/content?id=1q_xAwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE712CA0cBYP8VKbEcIVEuFJRdX1k30rjLM29Y-dw_qU1urEZ2cQ42La3Jkw6KmzMmXIoLTr50SWTpw6VOGq1leINsnTdLc_S5a5sn9Hao2t5YT7Ax1RqtQDiPNHIyXP46Rrw3aL8&source=gbs_api")' }}></div>
                  <BookshelfChanger />
                </div>
                <div className="book-title">Oh, the Places You'll Go!</div>
                <div className="book-authors">Seuss</div>
              </div>
            </li>
            <li>
              <div className="book">
                <div className="book-top">
                  <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: 'url("http://books.google.com/books/content?id=32haAAAAMAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72yckZ5f5bDFVIf7BGPbjA0KYYtlQ__nWB-hI_YZmZ-fScYwFy4O_fWOcPwf-pgv3pPQNJP_sT5J_xOUciD8WaKmevh1rUR-1jk7g1aCD_KeJaOpjVu0cm_11BBIUXdxbFkVMdi&source=gbs_api")' }}></div>
                  <BookshelfChanger />
                </div>
                <div className="book-title">The Adventures of Tom Sawyer</div>
                <div className="book-authors">Mark Twain</div>
              </div>
            </li>
          </ol>
        </div>
      </div>
    )
  }
}

export default Read
