import express from 'express';
import graphqlHTTP from 'express-graphql';
import {schema} from './data/schema';

const app = express();

app.get('/', (req, res) => {
    res.send('GraphQL rocks!');
});


app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true,
}));

app.listen(8080, () => console.log("app is running"))