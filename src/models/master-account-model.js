const { default: mongoose } = require("mongoose");

const masterSchema = new mongoose.Schema({
    balance: {type:"Number", required:true},
    customerId: {tupe: mongoose.Schema.Types.ObjectId,ref : "userSchema" },
    branchId: {tupe: mongoose.Schema.Types.ObjectId,ref : "branchDetailsSchema" },
    employeeId: {tupe: mongoose.Schema.Types.ObjectId,ref : "userSchema" },
},{
    versionKey:false,
    timestamps:true
})

const masterAccount = mongoose.model("master Account", masterSchema)