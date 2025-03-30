import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config()

const Connection = async ()=>{
    
    try {
        await mongoose.connect(process.env.URL, { 
            useNewUrlParser: true, 
            useUnifiedTopology: true 
        });
        console.log("DB Connected")
    } catch (error) {
        console.log("Error", error)
    }
}

Connection()