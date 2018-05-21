import React, { Component } from 'react'
//import PropTypes from 'prop-types'
import * as BooksAPI from './BooksAPI'

class Book extends Component {
 constructor(props) {
   super(props);
   this.handleChange = this.handleChange.bind(this);
 }

 handleChange(event) {
     this.setState({value: event.target.value});
   }

 handleChange(event) {
  this.props.changeShelf(this.props.book, event.target.value);
  BooksAPI.update(this.props.book, event.target.value);
}

mapShelf(foundBook) {
    const defaultShelf = "none";
    if (foundBook.shelf) {
      return foundBook.shelf;
    } else {
      const match = this.props.shelvedBooks.filter(
        book => book.id === foundBook.id
      );
      if (!Array.isArray(match) || !match.length) {
        return defaultShelf;
      } else {
        return match[0].shelf;
      }
    }
  }


render () {
 const { books } = this.props
 const { book } = this.props

 // console.log (this.props.books)
 // console.log (books)



return (

<li key={book.id}>
 <div className="book">
  <div className="book-top">
   <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}>
   </div>
   <div className="book-shelf-changer">
    <select defaultValue={this.mapShelf(book)} onChange={this.handleChange}>
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
