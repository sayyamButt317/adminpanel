const moongose = require('mongoose')
const UserSchema = new moongose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    }
})

const UserModel = moongose.model('User',UserSchema)
module.exports = UserModel