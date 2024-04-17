// Create web server
const express = require('express');

// Create an express application
const app = express();

// Set the view engine to ejs
app.set('view engine', 'ejs');

// Use the express.static middleware to serve static files
app.use(express.static('public'));

// GET /comments
app.get('/comments', function (req, res) {
    res.render('comments');
});

// GET /comments
app.get('/comments', function (req, res) {
    res.render('comments');
});

// Start the server
app.listen(3000, function () {
    console.log('Server is listening on port 3000');
});