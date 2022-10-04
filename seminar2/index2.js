const express = require("express");
const req = require("express/lib/request");

const app = express();

app.get('/', (req, res) => {
    res.send('Hello world')
});

app.get('/ping', (req, res) => {
    res.send('ping pong ding dong')
});

app.listen(8080);