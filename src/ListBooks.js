import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'


class ListBooks extends Component {
 static propTypes = {
   AllBooks: PropTypes.func.isRequired
   //onDeleteBook: PropTypes.func.isRequired
 }

  state = {
    query: ''
  }

  componentDidMount() {
    BooksAPI.getAll().then((AllBooks) => {
      this.setState({ AllBooks })
    })
  }

  updateQuery = (query) => {
     this.setState({ query: query.trim() })
   }

   render() {
    const { AllBooks } = this.props
    const { query } = this.state
       return (
        <div className="search-books">
          <div className="search-books-bar">
            <Link
             to=''
             className="close-search"
             onClick={() => this.setState({ showSearchPage: false })}>Close</Link>
            <div className="search-books-input-wrapper">
              {
               <input
               type="text"
               placeholder="Search by title or author"
               value={this.state.query}
               onChange={(event) => this.updateQuery(event.target.value)}
              />
               }
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid">
             {this.props.AllBooks.map((book) => (
               <li key={book.id} className=''>
               </li>
             ))}
            </ol>
          </div>
        </div>
       )
     }
   }

 export default ListBooks
