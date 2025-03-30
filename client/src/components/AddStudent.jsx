import React, { useState } from "react";
import "../CSS/Login.css";
import axios from "axios";

function AddStudent() {
  const [roll, setRoll] = useState("student");
  const [username, setUsername] = useState("");
  const [grade, setGrade] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault()

    axios.post("http://localhost:3001", {roll, username, grade, password})
    .then(res => console.log(res))
    .catch(err => console.log(err))
  };

  return (
    <div className="student-form-container">
      <form action="" className="student-form" onSubmit={handleSubmit}>
        <h2 className="">Add Student</h2>

        <div className="form-group">
          <label htmlFor="roll" className="">
            Roll No:
          </label>
          <input type="text" className="" name="roll" id="roll"
          onChange={(e) => setRoll(e.target.value)} />
        </div>

        <div className="form-group">
          <label htmlFor="username" className="">
            User Name:
          </label>
          <input type="text" className="" name="username" id="username" 
          onChange={(e) => setUsername(e.target.value)}/>
        </div>

        <div className="form-group">
          <label htmlFor="grade" className="">
            Grade:
          </label>
          <input type="text" className="" name="grade" id="grade" 
          onChange={(e) => setGrade(e.target.value)}/>
        </div>

        <div className="form-group">
          <label htmlFor="password" className="">
            Password:
          </label>
          <input type="text" className="" name="password" id="password" 
          onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <button type="submit" className="">
          Register
        </button>
      </form>
    </div>
  );
}

export default AddStudent;
