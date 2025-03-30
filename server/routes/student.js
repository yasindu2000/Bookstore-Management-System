import express from "express";
import { Student } from "../models/Student.js";
import bcrypt from 'bcrypt'
const router = express.Router();
import { verifyAdmin } from "./auth.js";


router.post('/register',verifyAdmin, async (req, res) =>{

    try {

        const {username, password, role, grade} = req.body
        const student = await Student.findOne({username})
        if(student){
            return res.json({
                message:"student is registered"
            })
        }
        const hashPassword = await bcrypt.hash(password, 10)
        const newstudent = new Student({
            username,
            password:hashPassword,
            role:role,
            grade
        })
        await newstudent.save()
        return res.json({
            registered: true
        })
    } catch (error) {

        return res.json({
            message: "error in registering student"
        })
        
    }
     
})


export {router as studentRouter}