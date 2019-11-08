const express = require('express')
const app = express()
const mongoose = require('mongoose')
var bodyParser = require('body-parser');
require('dotenv/config')

const appRoutes = require('./routes/posts')

app.use('/posts',appRoutes)

app.use(bodyParser.json());
mongoose.connect(
  process.env.DB_CONNECTION,
  {useNewUrlParser:true, useUnifiedTopology: true},  
  ()=>{
  console.log('Connected to db')
})

app.listen(3000,()=>{
    console.log('Ready to go!')
})