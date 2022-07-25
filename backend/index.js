const express = require('express')
const mongoose = require('mongoose')
const Product = require('./Product')

require('dotenv').config()

mongoose.connect(process.env.MONGO_STRING, { useNewUrlParser: true, useUnifiedTopology: true })

const app = express()

app.use(express.json())

app.get('/api', (req, res) => {
    res.send({
        'name': 'jimmy neutron'
    })
})

app.get('/api/products', async (req, res) => {
    const products = await Product.find()
    res.send(products)
    
})

app.post('/api/products', async (req, res) => {
    // check if body has all required fields
    if (!req.body.name || !req.body.skus || !req.body.details  || !req.body.image) {
        res.status(400).send('missing required fields')
        return
    }

    const product = new Product({
        _id: req.body.name,
        name: req.body.name,
        skus: req.body.skus,
        details: req.body.details,
        image: req.body.image
    })
    await product.save()
    res.send(product)
    
})

// send email
app.post('/sendmail', (req, res) => {
    
})

app.listen(3000)