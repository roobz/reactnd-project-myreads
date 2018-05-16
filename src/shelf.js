import React, { Component } from 'react'
// import PropTypes from 'prop-types'
// import * as BooksAPI from './BooksAPI'
import Book from './book.js'

class Shelf extends Component {
  // static propTypes = {
  //  books: PropTypes.array.isRequired
  // }

  render () {

   const { books } = this.props.books
   const { book } = this.props

   // console.log("this.props is" + this.props)
   // console.log("this.props.books is" + this.props.books)
   // console.log (this.props.books)





   let CurrentlyReading
   let WanttoRead
   let Read

   CurrentlyReading = books.filter (book => book.shelf === 'CurrentlyReading')
   //console.log("CurrentlyReading")
   WanttoRead = books.filter (book => book.shelf === 'WanttoRead')
   Read = books.filter (book => book.shelf === 'Read')


   return (
    <div>
     <div className="bookshelf" key={book.id}>
      <h2 className="bookshelf-title">{book.shelf}</h2>
       <div className="bookshelf-books">
        <ol className="books-grid">
         {books.map(book => (
          <li key={book.id}>
         <Book
          book={CurrentlyReading}
         />
        </li>
        ))}
        </ol>
       </div>
      </div>
     </div>
 )}
}

export default Shelf
