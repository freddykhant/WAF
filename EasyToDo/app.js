const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Middleware to parse URL-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

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
