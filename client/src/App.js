import './App.css';
import BookList from './components/BookList';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
const cors = require('cors');


const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
})


function App() {
  return (
    <ApolloClient client={client}>

      <div id='main' className="App">
        <BookList />

      </div>


    </ApolloClient>
  );
}

export default App;
