//express pkg retrieving
import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv'
import morgan from 'morgan';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoutes.js'
import cors  from 'cors'

//rest object
const app =express()

// dot env file configuration for connecting .env file
dotenv.config();

//database connection
connectDB();


//middlewares
app.use(cors());
app.use(express.json())
app.use(morgan('dev'))

//-------------------------------------------------------------------------------------------

//routes":
// This is the base URL or route prefix. Any routes defined in authRoutes will be accessed through URLs that start with /api/v1/auth.
// For example:
// If there's a GET /login route inside authRoutes, it will be accessed through /api/v1/auth/login.
// If there's a POST /register route inside authRoutes, it will be accessed through /api/v1/auth/register.
app.use("/api/v1/auth",authRoutes)


//------------------------------------------------------------------------------------------------

// Define a route for the homepage
//rest api
app.get('/',(req,res)=>{
    res.send(
        "<h1>Welcome to the ecommerce app</h1>"
    )
})

// //port
// const PORT = 8080

//port calling from .env
const PORT = process.env.PORT || 8080;

//run listen- severstarting 
app.listen(PORT,()=>{
    console.log(`server is running on ${process.env.DEV_MODE} ${PORT}`.bgBlue.white)
})