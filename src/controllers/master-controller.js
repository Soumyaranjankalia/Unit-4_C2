const express = require("express")
const app = express()

const master = require("../models/master-account-model")

app.get("", async(req, res) => {
    try{
        const masters = await Master.find().lean().exec()
        return res.status(200).send({masters})
    }
    catch(err){
        return res.status(500).send({message:"Something Wrong..."})
    }
});

app.post("", async(req, res) => {
    try{
        const masters = await Master.create(req.body)
        return res.status(201).send({masters})
    }
    catch(err){
        return res.status(500).send({message:"something Wrong..."})
    }
})

module.exports = app;