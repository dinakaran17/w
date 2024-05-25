const mongoose=require('mongoose')

const sh=new mongoose.Schema({
    name:String
})

const User=mongoose.model('User',sh)
module.exports=User;