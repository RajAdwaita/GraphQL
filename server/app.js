const express = require('express');
const schema = require('./schema/schema.js')
const { graphqlHTTP } = require('express-graphql');
const mongoose = require("mongoose");
const cors = require('cors');
mongoose.set('strictQuery', true);


const app = express();
app.use(cors())
mongoose.connect("mongodb+srv://admin:admin@cluster0.gv2hp4y.mongodb.net/?retryWrites=true&w=majority");
mongoose.connection.once('open', () => {
    console.log("Connected to MongoDB");
})

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(4000, () => {
    console.log("Jai Shree Ram");
});