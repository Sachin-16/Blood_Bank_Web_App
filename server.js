const express=require('express');
const dotenv=require("dotenv");
const colors=require('colors');
const morgan=require('morgan');
const cors=require('cors');
const mongoose = require("mongoose");
const connectDB = require('./config/db');
connectDB()

const app=express();
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));
app.use('/api/v1/test',require('./routes/testRoutes'));
app.use("/api/v1/auth", require("./routes/authRoutes"));
app.use("/api/v1/inventory", require("./routes/inventoryRoutes"));
app.use("/api/v1/analytics", require("./routes/analyticsRoutes"));
app.use("/api/v1/admin", require("./routes/adminRoutes"));
// app.get('/',(req,res)=>{
//     res.status(200).json({
//         message:"welcome to my",
//     });
// });


const PORT=8080;

app.listen(PORT,()=>{
    console.log(`Blood_Bank_application is Running using node server ${PORT}`.bgBlue.white);
});