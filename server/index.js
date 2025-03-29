import express from "express"
import dotenv from "dotenv"
import "./db.js"
import cors from 'cors'
import cookieParser from "cookie-parser"

const app = express()
app.use(express.json())
app.use(cors())
app.use(cookieParser)
dotenv.config()



app.listen(process.env.PORT, () =>{
    console.log("Server is running");
})