import express from 'express';
import data from '../backend/data';
import dotenv from 'dotenv';
import config from '../backend/config';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import userRouter from '../backend/routers.js/userRouter'
import productRouter from '../backend/routers.js/productRouter'
dotenv.config();

const mongodbUrl = config.MONGODB_URL;
console.log(mongodbUrl);

mongoose.connect(mongodbUrl,{ useNewUrlParser: true, useUnifiedTopology: true })
.then( () => {
    console.log('Connected to database ');
    
})
.catch( (err) => {
    console.error(`Error connecting to the database. \n${err}`);
});


const app = express();

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET", "PUT", "POST", "DELETE", "OPTIONS");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});
app.use(bodyParser.json());
app.use('/api/users', userRouter);
app.use('/api/products', productRouter);


app.listen(5000,()=>{console.log("server started http://localhost:5000")});

process.on('SIGTERM', () => {
    server.close(() => {
      console.log('Process terminated')
    })
  })