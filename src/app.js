const express = require('express');
const routes = require('./routes');
const app = express();

app.use(express.json());
app.use('/api', routes);

app.get('/', (req, res) => {
    res.send('This is a workshop. It will be my new portfolio API, first project with express JS');
});

module.exports = app;