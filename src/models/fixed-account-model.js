const { default: mongoose } = require("mongoose");

const fixedAc = new mongoose.Schema({
    account_no : {type:"String", required:true, unique : true},
    balance : {type:"Number", required:true},
    interestRate: {type:"Number", required:true},
    startDate: {type:"String", required:true},
    maturityDate: {type:"String", required:true},
    masterId: {type: mongoose.Schema.Types.ObjectId,ref:"masterSchema"},
},{
    versionKey: false,
    timestamps:true,
})

const fixedAccount = mongoose.model("fixedAccount", fixedAc)