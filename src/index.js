import React from 'react'
import ReactDOM from 'react-dom'
import BooksApp from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';
import { Route } from 'react-router-dom'



ReactDOM.render(<BrowserRouter><BooksApp /></BrowserRouter>,
 document.getElementById('root'))

 render () {
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
   </div>
  )
 }

registerServiceWorker();
