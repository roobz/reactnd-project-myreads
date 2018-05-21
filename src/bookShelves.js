import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './App.css'
import Shelf from './shelf.js'
// import * as BooksAPI from './BooksAPI'



class BookShelves extends Component {

 static propTypes = {
   books: PropTypes.array.isRequired
 }


 render () {
  // var matchingbooks = books.filter(function(it,ix,arr) {
  // return it.books.shelf === book.shelf;
  // });

  const books  = this.props.books.shelf
  const book  = this.props
  // console.log (this.props.books)
  // console.log (books)


  // const shelfGroup = books.map(shelf => shelf === catShelf)
  // console.log(shelfGroup)


  return (
   <div className="list-books">
    <div className="list-books-title">
     <h1>MyReads</h1>
    </div>
    <div className="list-books-content">
     <Shelf
      books={this.props.books.shelf}
     />
     </div>
    </div>
  )}
  }

export default BookShelves;
