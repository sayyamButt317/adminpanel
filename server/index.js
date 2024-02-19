const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app =express()
const Routes =require('./Routes/staticroutes')
const UserModel = require('../Model/User')
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://127.0.0.1:27017/AdminPanel")

app.use("/",Routes)
app.listen(3001,(req,res)=>{
    console .log("server started")
})