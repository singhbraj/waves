const express = require('express');
const app =express();
const mongoose = require('mongoose');
const xss = require('xss-clean');
const mongoSanitize = require('express-mongo-sanitize');
const routes = require('./routes')

// middleware

app.use(express.json())
app.use(xss())
app.use(mongoSanitize());

app.use('/api',routes)

const port = process.env.PORT || 3001
app.listen(port,()=>{
    console.log(`Server run on port ${port}`)
})