const express = require('express');
const morgan = require('morgan');
const app = express();
const userModel = require('./models/user')
const dbConnection = require('./config/db')

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

app.get('/register', (req,res) => {
    res.render('register')
})

// CRUD in mongodb

app.post('/register', async (req,res) => { // Create operation
    
    const { username, email, password } = req.body

    await userModel.create({
        username: username,
        email: email,
        password: password
    })

    res.send('user registered successfully')
})

app.get('/get-users', (req,res) => { // Read operation
    userModel.find({
        username: 'rks1402'
    }).then((users)=>{
        console.log(users)
        res.send(users)
    })
})

app.get('/update-user', async (req,res) => { // Update operation
    await userModel.findOneAndUpdate({
        username: 'rks1402'
    },{
        email: 'update@update.com'
    })

    res.send('user updated')
})

app.get('/delete-user', async (req,res) => { // Delete operation
    await userModel.findOneAndDelete({
        username: 'rks1402'
    })

    res.send('user deleted')
})

app.post('/get-form-data', (req,res) => {
    console.log(req.body);
    res.send('data received')
})

app.listen(3000)