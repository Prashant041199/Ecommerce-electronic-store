const mongoose = require('mongoose')
mongoose.set('strictQuery', true);

const contactSchema = new mongoose.Schema({
    name:String,
    email:String,
    query:String
})

module.exports = mongoose.model("contact",contactSchema)