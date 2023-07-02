const { response ,json } = require('express');
const mongoose = require('mongoose')
require("dotenv").config()
const CS=process.env.DB_Connection_String

mongoose.connect(CS)
.then(()=>{
    console.log("Server is Connected")
}).catch((error)=>{
    console.error("cannot connect to data base",error)
})


