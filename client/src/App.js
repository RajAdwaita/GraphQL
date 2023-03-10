import React, { Component } from 'react'

import './App.css';
import BookList from './components/BookList';
import AddBook from './components/AddBook';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
const cors = require('cors');


const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
})


function App() {
  return (
    <ApolloProvider client={client}>

      <div id="main">
        <BookList />
        <AddBook />

      </div>


    </ApolloProvider>
  );
}

export default App;
