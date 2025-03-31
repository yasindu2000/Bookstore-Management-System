import express from "express";
import dotenv from "dotenv";
import "./db.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import { AdminRouter } from "./routes/auth.js";
import { studentRouter } from "./routes/student.js";
import { bookRouter } from "./routes/book.js";

import { Book } from "./models/Book.js";
import { Admin } from "./models/Admin.js";
import { Student } from "./models/Student.js";

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
  })
);
app.use(cookieParser());
dotenv.config();
app.use("/auth", AdminRouter);
app.use("/student", studentRouter);
app.use("/book", bookRouter);

app.get("/dashboard", async (req, res) => {
  try {
    const student = await Student.countDocuments();
    const admin = await Admin.countDocuments();
    const book = await Book.countDocuments();
    

    return res.json({
      ok: true,
      student,
      book,
      admin
    });
  } catch (error) {
    return res.json(err);
  }
});

app.listen(process.env.PORT, () => {
  console.log("Server is running");
});
