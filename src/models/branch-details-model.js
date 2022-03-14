const mongoose = require("mongoose")


const branchDetailsSchema = new mongoose.Schema({
    name :{type:String,required:true},
    address :{type:String,required:true},
    IFSC :{type:String,required:true},
    MICR :{type:String,required:true},
    userID:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    }
},{
    versionKey:false,
    timestamps:true
})
const Branchdetails = mongoose.model("branchdetails", userSchema)

module.exports = Branchdetails;