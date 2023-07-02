const Property = require("../models/property")


const createProperty=async(req,res)=>{
    try{
        const {body:{title,Description,price,bedrooms,area,image,images,owner,availability,createdAt}}=req;
        const property= await Property.create({title,Description,price,bedrooms,area,image,images,owner,availability,createdAt})
        res.status(201).json(property)
    }catch(error){
        res.status(500).send("Error creating property")
    }
}


const getProperties =async(req,res)=>{
    try{
        const property=await Property.find().populate("owner","name")
        res.status(201).json(property)

    }catch(error){
        res.status(500).send("Error while getting properties")
    }
}

const getPropertyByID =async(req,res)=>{
    try{
        const id = req.params.id
        const property=await Property.findById(id).populate("owner","name")
        res.status(201).json(property)

    }catch(error){
        res.status(500).send("Error while getting properties")
    }
}






module.exports={createProperty,getProperties,getPropertyByID}