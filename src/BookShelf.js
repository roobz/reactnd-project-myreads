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

 state = {
  books: [],
 }

 componentDidMount() {
     BooksAPI.getAll().then((books) => {
       this.setState({books})
       console.log(books[0])
     })
   }

 render () {
  // var matchingbooks = logos.filter(function(it,ix,arr) {
  // return it.book_shelf === book.shelf;
  // });

  const { books } = this.props

  let shelfGroup
  shelfGroup = this.props.books.filter(book => (book.shelf))
  console.log(shelfGroup)

  // const shelf = books.shelf
  // let shelfGroup = books.map(book => shelf == book.shelf )
  // console.log(shelfGroup)

  return (
   <div className="list-books">
    <div className="list-books-title">
     <h1>MyReads</h1>
    </div>
    <div className="list-books-content">
     <div>
      {shelfGroup.map((book) => (
      <div className="bookshelf" key={book.id}>
       <h2 className="bookshelf-title">{book.shelf}</h2>
        <div className="bookshelf-books">
         <ol className="books-grid">
          <li key={book.id}>
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
            <div className="book-authors">{book.authors}</div>
           </div>
          </li>
         </ol>
        </div>
       </div>
      ))}
      </div>
     </div>
    </div>
  )}
  }

export default BookShelf;
