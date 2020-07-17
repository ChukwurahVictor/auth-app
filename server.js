const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const logger = require('morgan');
require('dotenv').config();

const app = express();

app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const userRoutes = require('./routes/users');

//Database
mongoose.connect('mongodb://localhost/auth_db', {
   useUnifiedTopology: true,
   useNewUrlParser: true,
   useFindAndModify: false
})
const db = mongoose.connection
db.once('open', () => {
   console.log('Database connected..')
})
db.on('error', error => console.error(error))

//Use Routes
app.use('/', userRoutes);

//Error Handling
app.use((req, res, next) => {
   const error = new Error('Not Found!')
   error.status = 404
   next(error)
})

app.use((error, req, res, next) => {
   res.status(error.status || 500);
   res.json({
      error: {
         message: error.message
      }
   })
})


//port listener
app.listen(8008, () => {
   console.log('Server running on port 8080');
});