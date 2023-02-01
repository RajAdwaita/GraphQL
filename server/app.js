const express = require('express');
// const graphqlHTTP = require('express-graphql');
const app = express();
const schema = require('./schema/schema.js')
const { graphqlHTTP } = require('express-graphql');

// app.use('/graphql', graphqlHTTP({


// }));

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(4000, () => {
    console.log("Jai Shree Ram");
});