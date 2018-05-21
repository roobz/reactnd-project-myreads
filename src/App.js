import React from 'react'
import './App.css'
import { Link } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Search from './Search'
import * as BooksAPI from './BooksAPI'
import BookShelves from './bookShelves'


class BooksApp extends React.Component {

  state = {
    books: [],
    showSearchPage: false
  }

  // componentDidMount() {
  //     BooksAPI.getAll().then((books) => {
  //       this.setState({ books })
  //     })
  //   }

    componentWillMount() {
      BooksAPI.getAll().then((books) => {
        this.setState({ books })
        console.log(this.state.books)
      })
    }

   changeShelf = (bookToAdd, shelf) => {
      this.setState(state => {
            const nextState = state.shelvedBooks.filter(book => book.id !== bookToAdd.id).concat( [{...bookToAdd, shelf}] );
            return { shelvedBooks: nextState };
          });
        }

  render() {
    return (

      <div className="app">
       <Route exact path='/search' render={() => (
        <Search
         books={this.state.books}
        />
       )}/>
        <Route exact path='/' render={() => (
          <BookShelves
           books={this.state.books}
          />
        )}/>
        <div className="open-search">
          <Link
           to='/search'
           onClick={() => this.setState({ showSearchPage: true })}>Add a book</Link>
        </div>
      </div>
    )
  }
}

export default BooksApp;
