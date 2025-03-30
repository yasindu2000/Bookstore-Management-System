import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    role: {
        type: String,
        required: true,
        
      },

    grade: {
        type: String,
        required: true,
      },

  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    unique: true,
  },
});

const studentModel = mongoose.model("Student",studentSchema)
export {studentModel as Student}

