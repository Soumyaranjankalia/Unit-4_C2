const mongoose = require("mongoose")


const savingAccountSchema = new mongoose.Schema({
    account_number:{type:Number,required:true},
    balance:{type:Number,required:true},
    interestRate:{type:Number,required:true},
    userID:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    }
},{
    versionKey:false,
    timestamps:true
})
const Savingaccount = mongoose.model("savingaccount", savingAccountSchema)

module.exports = Savingaccount;