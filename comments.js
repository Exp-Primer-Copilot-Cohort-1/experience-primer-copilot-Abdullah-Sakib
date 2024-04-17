// create web server
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');
var path = require('path');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// to get all comments
app.get('/comments', function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    fs.readFile('comments.json', 'utf8', function(err, data) {
        if (err) {
            console.log(err);
            res.status(500).json({error: 'Something went wrong'});
            return;
        }
        res.send(data);
    });
});

// to add a new comment
app.post('/comments', function(req, res) {
    fs.readFile('comments.json', 'utf8', function(err, data) {
        if (err) {
            console.log(err);
            res.status(500).json({error: 'Something went wrong'});
            return;
        }
        var comments = JSON.parse(data);
        comments.push(req.body);
        fs.writeFile('comments.json', JSON.stringify(comments), function(err) {
            if (err) {
                console.log(err);
                res.status(500).json({error: 'Something went wrong'});
                return;
            }
            res.status(201).json({message: 'Comment added'});
        });
    });
});

// to delete a comment
app.delete('/comments/:id', function(req, res) {
    fs.readFile('comments.json', 'utf8', function(err, data) {
        if (err) {
            console.log(err);
            res.status(500).json({error: 'Something went wrong'});
            return;
        }
        var comments = JSON.parse(data);
        var filteredComments = comments.filter(function(comment) {
            return comment.id !== req.params.id;
        });
        fs.writeFile('comments.json', JSON.stringify(filteredComments), function(err) {
            if (err) {
                console.log(err);
                res.status(500).json({error: 'Something went wrong'});
                return;
            }
            res.status(200).json({message: 'Comment deleted'});
        });
    });
});

app.listen(3000, function() {
    console.log('Server running on port 3000!!');
});
