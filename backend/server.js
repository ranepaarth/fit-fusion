const express = require('express');
require('dotenv').config()
const app = express();

app.get('/',(req,res)=>{
    res.json({msg:"Get all workouts"})
})

app.get('/:id(\\d+)',(req,res)=>{
    res.json({msg:"Get single workout"})
})

app.post('/',(req,res)=>{
    res.json({msg:"Create a new workout"})
})

app.delete('/:id(\\d+)',(req,res)=>{
    res.json({msg:"Delete single workout"})
})

app.patch('/:id(\\d+)',(req,res)=>{
    res.json({msg:"Update single workout"})
})

app.listen(process.env.PORT,()=>{
    console.log(`listening on port ${process.env.PORT}`)
})