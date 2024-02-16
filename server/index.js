const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app =express()


app.use(cors())
app.use(express.json())

app.listen(3001,(req,res)=>{
    console .log("server started")
})