const mongoose = require("mongoose")
mongoose.set('strictQuery', true);

const userSchema = new mongoose.Schema({
    firstname:String,
    lastname:String,
    email:String,
    password:String
})


module.exports = mongoose.model("userdata", userSchema)