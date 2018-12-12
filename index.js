const express = require('express');
const app = express();
const flats = require('./controller/flats');
const models = require('./models');

app.use('/flats', flats);

app.listen(3000);
