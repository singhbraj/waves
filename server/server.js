const express = require('express');
const app =express();
const mongoose = require('mongoose');
const xss = require('xss-clean');
const mongoSanitize = require('express-mongo-sanitize');
const routes = require('./routes')
require('dotenv').config()


const mongoUri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}?retryWrites=true&w=majority`
mongoose.set("strictQuery", false);
mongoose.connect(mongoUri,{
    useNewUrlParser: true, 
    useUnifiedTopology: true 
},err => {
    if(err) throw err;
    console.log('Connected to MongoDB!!!')
 })

// middleware

app.use(express.json())
app.use(xss())
app.use(mongoSanitize());

app.use('/api',routes)

const port = process.env.PORT || 3001
app.listen(port,()=>{
    console.log(`Server run on port ${port}`)
})