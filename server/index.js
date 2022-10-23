require('dotenv').config({path: __dirname + '/../.env'});
require('./../database/index');


const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const app = express();
const port = 8003;
const baseRouter = require('./api/baseRouter');


app.use(cors());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true}));
app.use(express.json());


app.use('/base', baseRouter);


app.listen(port, () => {
  console.log(`Listening to port: ${port}`);
});
