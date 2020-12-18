require('./db/mongoose');
const express = require('express');
const mountainRouter = require('./routers/mountain');

const app = express();
app.use(express.json());
app.use(mountainRouter);

module.exports = app;
