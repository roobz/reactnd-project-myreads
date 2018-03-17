import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import escapeRegExp from 'escape-string-regexp'
import './App.css'

class Search extends Component {
 static propTypes = {
   books: PropTypes.array.isRequired
   //onDeleteBook: PropTypes.func.isRequired
 }

  state = {
    query: ''
  }

  updateQuery = (query) => {
     this.setState({ query: query.trim() })
   }

   render() {
    const { books } = this.props
    const { query } = this.state

    let showingBooks
    if (query) {
      const match = new RegExp(escapeRegExp(this.state.query), 'i')
      showingBooks = this.props.books.filter((book) => match.test(book.title || book.author))
    }
    else {
      showingBooks = []
    }

       return (
        <div className="search-books">
          <div className="search-books-bar">
            <Link
             to=''
             className="close-search"
             onClick={() => this.setState({ showSearchPage: false })}>Close</Link>
            <div className="search-books-input-wrapper">
             <input
             type="text"
             placeholder="Search by title or author"
             value={this.state.query}
             onChange={(event) => this.updateQuery(event.target.value)}
            />
           </div>
          </div>
          <div className="search-books-results">
           <div className="bookshelf">
            <div className="bookshelf-books">
             <ol className="books-grid">
             {showingBooks.map((book) => (
               <li key={book.id} className=''>
               <div className="book">
                 <div className="book-top">
                   <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
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
             ))}
            </ol>
           </div>
          </div>
         </div>
        </div>
       )
     }
   }

 export default Search
