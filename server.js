const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const app = express();
const cors = require('cors');
const logger = require('morgan');

const authController = require('./controllers/auth');
const userController = require('./controllers/user');
const eventController = require('./controllers/events'); 
const verifyJwt = require('./middlewares/verify-token');

require('./db/connection');

const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(logger('dev'));

// Public routes
app.use('/auth', authController);

// Protected routes
app.use(verifyJwt);
app.use('/users', userController);
app.use('/events', eventController); 

app.listen(port, () => {
  console.log(`The express app is ready on port ${port}!`);
});