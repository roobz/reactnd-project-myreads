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

    componentDidMount() {
      BooksAPI.getAll().then((books) => {
        this.setState({ books })
        console.log(books)
      })
    }



  render() {
    return (

      <div className="app">
       
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
