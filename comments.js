// create web server
// create web server
const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');

// create a route
// app.get('/', (req, res) => {
//     res.send('Hello World!');
// });

// create a route
app.get('/comments', (req, res) => {
    res.json({ comments: [
        {username: 'Todd', comment: 'lol'},
        {username: 'Skyler', comment: 'rofl'},
        {username: 'Sk8rBoi', comment: 'omg'}
    ]});
});

app.use(bodyParser.json());

app.post('/comments', (req, res) => {
    console.log(req.body);
    res.json({ status: 'ok' });
});

// listen to the server
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});