import express from 'express'
import bodyParser from 'body-parser';

import usersRoute from './routes/users.js'

const app  = express();
const PORT = 3000;

//initilizing body parser & we are going to user JSON data in our application
app.use(bodyParser.json());

app.use('/users', usersRoute)

//Routers which we can vistir from our browser or we send requests to
app.get('/', (req, res) => {
    console.log('test')

    res.send('Hello from home page')
})

app.listen(PORT, () => console.log(`Server is running on port: http://localhost:${PORT}`));