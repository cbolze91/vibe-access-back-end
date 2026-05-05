require('dotenv').config();

const express = require('express');
const cors = require('cors');
const logger = require('morgan');

require('./db/connection');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(logger('dev'));

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to VibeAccess API' });
});

app.listen(port, () => {
  console.log(`The express app is ready on port ${port}!`);
});