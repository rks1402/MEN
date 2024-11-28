const express = require('express');
const morgan = require('morgan');
const app = express();

app.use(morgan('dev')) // third party middleware to log HTTP requests and responses

app.use(express.json()) // built-in middleware to parse JSON data
app.use(express.urlencoded({ encoded: true })) // built-in middleware to parse URL-encoded data
app.use(express.static("public")) // built-in middleware to serve static files

app.set('view engine', 'ejs')

app.get('/', (req,res) => {
    res.render('index')
})

app.get('/about', (req,res) => {
    res.send('About Page.');
})

app.get('/contact', (req,res) => {
    res.send('Contact Page.');
})

app.post('/get-form-data', (req,res) => {
    console.log(req.body);
    res.send('data received')
})

app.listen(3000)