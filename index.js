const express = require('express');
const app = express();
const cors = require('cors');
require ('dotenv').config()
const Port = process.env.port
require('./db')

app.use(cors())

app.get('/', (req, res) => {
res.send("Hello World")
});

const userRouter=require("./routes/user")
const propertyRouter=require("./routes/property")
app.use(express.json())
app.use("/users",userRouter)
app.use("/properties",propertyRouter)
app.listen(process.env.Port || 4000, () => {
    console.log(`Server started on http://localhost:${Port} `);
});

