const mongoose = require("mongoose")

const cartSchema = new mongoose.Schema({
    email: String,
    cartitem: {
        id: String,
        name: String,
        company: String,
        price: Number,
        image: String,
        description: String,
        category: String,
        featured: Boolean
    },
    qty: Number
})

module.exports = mongoose.model("cartItem", cartSchema)