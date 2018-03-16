import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './App.css'
//import { Link } from 'react-router-dom'
//import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'

class BookShelf extends Component {


 static propTypes = {
   books: PropTypes.array.isRequired
 }

 componentDidMount() {
     BooksAPI.getAll().then((books) => {
       this.setState({books})
       console.log(books)
     })
   }

 render () {

  const { books } = this.props

  return (
   <div className="list-books">
    <div className="list-books-title">
     <h1>MyReads</h1>
    </div>
    <div className="list-books-content">
     <div>
      <div className="bookshelf">
       <h2 className="bookshelf-title">Currently Reading</h2>
        <div className="bookshelf-books">
         <ol className="books-grid">
          {books.map((book) => (
          <li key={books.id}>
           <div className="book">
            <div className="book-top">
             <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}>
             </div>
             <div className="book-shelf-changer">
              <select>
               <option value="none" disabled>Move to...</option>
               <option value="currentlyReading">Currently Reading</option>
               <option value="wantToRead">Want to Read</option>
               <option value="read">Read</option>
               <option value="none">None</option>
              </select>
             </div>
            </div>
            <div className="book-title">{book.title}</div>
            <div className="book-authors">{book.author}</div>
           </div>
          </li>
         ))}
         </ol>
        </div>
       </div>
      </div>
     </div>
    </div>
  )}
  }

export default BookShelf;
