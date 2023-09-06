const express = require('express')
const resolvers = require('./resolvers')
const schema = require('./schema')

const {graphqlHTTP} = require('express-graphql') 

const app = express()
const port = 3000

app.get("/", (req, res) => {
    res.send("Up and runnig with graphsql crash course")
})

const root = resolvers//{lco: ()=> console.log("LearnCodeOne.in")}

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}))

app.listen(port, () => {
    console.log("Running at 3000 port")
})