import React, { Component } from 'react'
// import { gql } from 'apollo-boost';
import { flowRight as compose } from 'lodash';

import { graphql } from 'react-apollo';
import { getAuthorsQuery, addBookMutation } from '../queries/queries';


// const getAuthorsQuery = gql`
// {
//     authors{
//         name
//         id
//     }
// } 
// `


class AddBook extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            genre: '',
            authorId: ''
        }
    }
    displayAuthors() {
        var data = this.props.getAuthorsQuery;
        console.log(this.props.getAuthorsQuery);
        if (data.loading) {
            return (<option disabled>Loading authors...</option>);
        } else {
            return data.authors.map(author => {
                return (
                    <option key={author.id} value={author.id}>{author.name}</option>
                );
            })
        }

    }


    submitForm(e) {
        e.preventDefault();
        // console.log(this.state);
        this.props.addBookMutation()
    }
    render() {
        console.log(this.props);
        return (
            <form action="" id='add-book' onSubmit={this.submitForm.bind(this)}>
                <div className="field">
                    <label htmlFor="">Book name:</label>
                    <input type="text" onChange={(e) => this.setState({ name: e.target.value })} />
                </div>
                <div className="field">
                    <label htmlFor="">Genre:</label>
                    <input type="text" onChange={(e) => this.setState({ genre: e.target.value })} />
                </div>
                <div className="field">
                    <label htmlFor="">Author:</label>
                    <select name="" id="" onChange={(e) => this.setState({ authorId: e.target.value })}>
                        <option value="">Select author</option>
                        {
                            this.displayAuthors()
                        }
                    </select>
                </div>
                <button>+</button>

            </form>
        );
    }
}

export default compose(
    graphql(getAuthorsQuery, { name: "getAuthorsQuery" }),
    graphql(addBookMutation, { name: "addBookMutation" }),

)(AddBook);