const functions = require("firebase-functions");
const express = require("express");
const cors= require("cors")
const stripe = require("stripe")('sk_test_51Ji12ZSArv039XEFXK5FLFY0x73uWpeyW7vnhxi0qq6nDAswQ08A4tRVp9aM3SisGbX700ajIX7LXX');

//api

//app configs
const app = express()

//middlewares
app.use(cors({origin: true}))
app.use(express.json())
//API routes
app.get('/', (req, res) => {
    res.status(200).send('Hello Server')
})

app.post('/payments/create', async (req, res) => {
    const total = req.query.total;
    console.log('Payment req recieved'+total)
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "inr",
        description: "hello transaction", 
    })
    res.status(201).send({
        clientSecret: paymentIntent.client_secret
    })
})

//Lister command
exports.api = functions.https.onRequest(app)
//http://localhost:5001/clone-513e7/us-central1/api
