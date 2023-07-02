const express = require('express');
const property=require('../controllers/property')

const propertyRouter=express.Router()

propertyRouter.post("/",property.createProperty)
propertyRouter.get("/",property.getProperties)
propertyRouter.get("/:id",property.getPropertyByID)


module.exports=propertyRouter