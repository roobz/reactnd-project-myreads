import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './App.css'
import Shelf from './shelf'

class BookShelves extends Component {

 static propTypes = {
   books: PropTypes.array.isRequired
 }

 // state = {
 //  books: [],
 // }


 render () {
  // var matchingbooks = books.filter(function(it,ix,arr) {
  // return it.books.shelf === book.shelf;
  // });

  const { books } = this.props.books
  const { book } = this.props

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
