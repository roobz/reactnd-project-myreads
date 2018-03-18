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
       //console.log(books)
     })
   }

 render () {
  // var matchingbooks = books.filter(function(it,ix,arr) {
  // return it.books.shelf === book.shelf;
  // });

  const { books } = this.props

  // let CurrentlyReading
  // let WanttoRead
  // let Read

  // const catShelf = books.map (shelf => books.shelf)
  // console.log(catShelf)

  const catShelf = books.map (books.shelf)
  console.log(catShelf)

  // const shelfGroup = books.map(shelf => shelf === catShelf)
  // console.log(shelfGroup)


  return (
   <div className="list-books">
    <div className="list-books-title">
     <h1>MyReads</h1>
    </div>
    <div className="list-books-content">
     <div>
      {books.map((book) => (
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
