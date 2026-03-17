import express from "express"
import dotenv from "dotenv"
dotenv.config()
import connectDb from "./config/db.js"
import authRouter from "./Routes/authRoute.js"
import cookieParser from "cookie-parser"

import cors from "cors"
import userRouter from "./Routes/user.Route.js"

const app= express()

const port=process.env.PORT 
app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))

app.use("/api/auth",authRouter)
app.use("/api/user",userRouter)

app.get("/",(req,res)=>{
    res.send("server started")
})



app.listen(port,()=>{
    console.log("server started");
    connectDb()
    
})