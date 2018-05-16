import React, { Component } from 'react'
//import PropTypes from 'prop-types'
// import * as BooksAPI from './BooksAPI'

class Book extends Component {
 constructor (book, shelf) {
         super(book, shelf)
         this.state = {
             shelf: book.shelf
         }
     }

render () {
 const { books } = this.props
 const { book } = this.props

 // console.log("this.props is" + this.props)
 // console.log("this.props.books is" + this.props.books)
 // console.log (this.props.books)
 // console.log (books)



return (

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

 )}
}

export default Book
