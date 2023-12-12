const VadhuSuchak = require('../Models/vadhusuchak')

exports.getVadhuSuchak = async (req,res)=>{
    try {
        const data = await VadhuSuchak.find()
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}

exports.postVadhuSuchak = async (req,res)=>{
    try {
        const data = await VadhuSuchak.create(req.body)
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}

exports.putVadhuSuchak = async (req,res)=>{
    try {
        const data = await VadhuSuchak.findByIdAndUpdate(req.params.id,req.body,{new:true})
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}

exports.deleteVadhuSuchak = async (req,res)=>{
    try {
        const data = await VadhuSuchak.findByIdAndDelete(req.params.id,req.body)
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}