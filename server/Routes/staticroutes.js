const express = require('express')
const app =express()
const UserModel = require('../Model/User')

app.get('/',(req,res) => {
    UserModel.find()
 .then(User => res.json(User))
 .catch(err => res.json(err))
})

app.get('/create',(req, res) =>{
UserModel.create(req.body)
.then(User => res.json(User))
.catch(err => res.json(err))
})