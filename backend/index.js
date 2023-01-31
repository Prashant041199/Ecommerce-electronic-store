const { response } = require("express")
const express = require("express")
require("./config")
const app = express()
const products = require("./Products")
const cors = require('cors')
const user = require("./User")
const contact = require("./Contact")
const cart = require("./CartItems")

app.use(express.json())

//fixing cors issue
app.use(cors())


//push to database
app.post('/products', async (req, res) => {
    let productData = new products(req.body)
    let result = await productData.save()

    res.send(result)
})


//all items
app.get('/productItems', async (req, res) => {
    let result = await products.find({}).sort({ 'price': 1 }).exec(function (err, docs) {
        if (err) {
            console.log(err)
        } else {
            console.log(docs)
            res.send(docs)
        }
    })
})


//filter with category
app.get('/productItems/:category', async (req, res) => {
    let result = await products.find({
        category: req.params.category,
    }).sort({ 'price': 1 }).exec(function (err, docs) {
        if (err) {
            console.log(err)
        } else {
            console.log(docs)
            res.send(docs)
        }
    })

    result = JSON.stringify(result)
    console.log(result)
    // res.send(result)
})


//User registeration post req

app.post('/register', async(req,res)=>{
    let userData = new user(req.body)
    let result = await userData.save()
    res.send(result)
})


//registered users

app.get('/getregistered/:email', async (req,res)=>{
    let results = await user.find({
        email: req.params.email,
    })
    results = JSON.stringify(results)
    res.send(results)
})

app.get('/login/', async (req,res)=>{

    console.log(req.query.email)
    let results = await user.find({
        email:req.query.email,
        password:req.query.password
    }).select("-password")

    console.log(req.params.pass)
    results = JSON.stringify(results)
    res.send(results)
})


// posting query

app.post("/sendquery", async (req,res)=>{
    let query = new contact(req.body)
    let result = await query.save()
    res.send(result)
})


//posting cart items

app.post("/cart", async (req,res)=>{
    let cartvalue = new cart(req.body)
    let result = await cartvalue.save()
    res.send(result)
})

//get cart items

app.get("/cartitem/:email", async (req,res)=>{
    let results = await cart.find({
        email:req.params.email
    })
    results = JSON.stringify(results)
    res.send(results)
})


//put cart items
app.put("/cart/put/:id/:qty", async(req,res)=>{
    let filter = {_id:req.params.id}
    let update = {qty:req.params.qty}
    let results = await cart.findOneAndUpdate(filter,update,{
        new:true
    })
    res.send(results)
})


//delete single cart items

app.delete("/cart/delete/:id", async(req,res)=>{
    let filter =req.params.id    
    console.log(filter)
    let results = await cart.deleteOne({_id:filter})
    res.send(results)
})

//delete all cart items

app.delete("/cart/deleteall/:email", async(req,res)=>{
    let filter =req.params.email    
    console.log(filter)
    let results = await cart.deleteMany({email:filter})
    res.send(results)
})

//start the backend
app.listen(5000, () => {
    console.log("App is up on port 5000")
});