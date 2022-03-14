const express = require("express")
const app = express()

const User = require("../models/user-model")

app.get("", async(req, res) => {
    try{
        const users = await User.find().lean().exec()
        return res.status(200).send({users:users})
    }
    catch(err){
        return res.status(500).send({message:"Something Wrong..."})
    }
});

app.post("", async(req, res) => {
    try{
        const users = await User.create(req.body)
        return res.status(201).send({users:users})
    }
    catch(err){
        return res.status(500).send({message:"something Wrong..."})
    }
})

module.exports = app;