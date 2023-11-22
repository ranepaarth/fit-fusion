const express = require('express');
require('dotenv').config()
const app = express();
const workoutRouter = require('./router/workoutRouter')

app.use('/api/workout',workoutRouter)

app.listen(process.env.PORT,()=>{
    console.log(`listening on port ${process.env.PORT}`)
})