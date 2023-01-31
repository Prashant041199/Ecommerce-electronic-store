const mongoose = require("mongoose")
mongoose.set('strictQuery', true);

const productSchema = new mongoose.Schema({
    id: String,
    name: String,
    company: String,
    price: Number,
    image: String,
    description: String,
    category: String,
    featured: Boolean
})


module.exports = mongoose.model("users", productSchema)