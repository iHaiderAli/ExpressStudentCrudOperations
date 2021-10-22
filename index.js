import express from 'express'
import bodyParser from 'body-parser';

import studentsRoute from './routes/students_route.js'

const app = express();
const PORT = 8000;

//initilizing body parser & we are going to user JSON data in our application
app.use(bodyParser.json());

app.use('/una', studentsRoute)

//Routers which we can vistir from our browser or we send requests to
app.get('/', (req, res) => {
    res.send('Hello from home page')
})

app.listen(PORT, () => console.log(`Server is running on port: http://localhost:${PORT}`));