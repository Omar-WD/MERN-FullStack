const express = require('express');
const users=require('../controllers/user')

const userRouter=express.Router()

userRouter.post('/',users.createUser)


module.exports=userRouter