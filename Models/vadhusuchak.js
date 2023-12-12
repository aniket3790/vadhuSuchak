const mongoose = require('mongoose')

const vadhuSuchakSchema = new mongoose.Schema({
    vadhuSuchakKendra:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    dob:{
        type:String,
        required:true
    },
    mobileNo:{
        type:Number,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    review:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model('vadhuSuchak',vadhuSuchakSchema)