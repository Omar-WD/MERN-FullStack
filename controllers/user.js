const User = require('../models/user')

const createUser=async(req,res)=>{
    try{
        const {body:{email,name,phoneNumber}}=req
        const user =await User.create({email,name,phoneNumber})
        res.status(201).json(user)

    }catch(error){
        res.status(5000).send(message.error)
    }
}



module.exports={createUser}