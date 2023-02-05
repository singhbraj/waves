const express = require('express');
const app =express();
const mongoose = require('mongoose');
const xss = require('xss-clean');
const mongoSanitize = require('express-mongo-sanitize');
const routes = require('./routes');
const { handleError, convertToApiError } = require('./middleware/apiError');
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


// routes

app.use('/api',routes)



// handle error
// if the error not recognized....convert to api error 
app.use(convertToApiError);
app.use((err,req,res,next)=>{
    handleError(err,res)
})

const port = process.env.PORT || 3001
app.listen(port,()=>{
    console.log(`Server run on port ${port}`)
})