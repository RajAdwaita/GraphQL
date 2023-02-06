import React, { Component } from 'react'
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';
const getBooksQuery = `{
    books{
        name
        genre
        id
    }
}`


class BookList extends Component {




    render() {


        return (
            <div>BookList</div>
        );
    }
}

export default graphql(getBooksQuery)(BookList)