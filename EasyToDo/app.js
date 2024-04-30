const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require( 'mongoose' );

mongoose.connect( 'mongodb+srv://20618166:tulip@cluster0.yh7lhnx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0' )
.then(() => console.log( 'Connected to MongoDB' ))
.catch(err => console.error( 'Could not connect to MongoDB' , err));

// Middleware to parse URL-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'pug');

// Serve the index.html file on GET requests to the root
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

// Start listening on port 3000
app.listen(3000, function() {
    console.log('Listening on port 3000');
});

// Corrected POST handler to match form action "/todos"
app.post('/todos', function(req, res) {
    console.log(req.body);  // Logs the form data from the request body
    res.send("Task added!"); // Response to avoid hanging the request
});