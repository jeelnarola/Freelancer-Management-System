const express = require('express');
const cookie = require('cookie-parser')
const cors = require('cors')
const DatabaseConnect = require('./configs/db');
const userRouter = require('./routers/user.router');
const FRouter = require('./routers/freelancer.router');
require('dotenv').config()
const app = express()


app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookie())
app.use(cors())
app.use('/Auth',userRouter)
app.use('/Freelancer',FRouter)

app.get("/",(req,res)=>{
    req.status(201).json({success:true,message:"Welcome To freelancer Management System..."})
})
app.listen(process.env.PORT,()=>{
    console.log("Server Start...");
    DatabaseConnect()
})