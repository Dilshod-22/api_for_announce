const mongoose = require("mongoose")
const Schema = new mongoose.Schema({
    username:String,
    password:String,
    email:String,
    profilePicture:Array,
    desc:String,
    searchName:String
})
module.exports = mongoose.model("People",Schema)