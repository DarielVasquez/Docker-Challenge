
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs')
const request = require('request');

const app = express();
// app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
    fs.readFile('name.txt', 'utf8', (err, data) => {
        if (err) {
          console.error(err);
          res.send('File missing!\n');
          return;
        }
        res.send(`Hello ${data}\n`);
        console.log(data);
    });
});

app.get('/ping', (req, res) => {
    request('http://service2:8080/receive', (err, res2, body) => {
        if (err) { return console.log(err); }
        res.send(body);
    })
});

app.get('/receive', (req, res) => {
    res.send('Pong!')
})

app.set('port', process.env.PORT || 8080);
let server = app.listen(app.get('port'), () => {
    console.log(`App listening on port ${app.get('port')}`);
});

module.exports = { app, server };