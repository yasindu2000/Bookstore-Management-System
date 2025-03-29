import React, { useState } from "react";
import "../CSS/Login.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("student");

  const handleSubmit = ()=>{

    
  }

  return (
    <div className="login-page">
      <div className="login-container">
        <h2 className="">Login</h2>
        <br />

        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            className=""
            placeholder="Enter Username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="username">Password:</label>
          <input
            type="password"
            className=""
            placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="role">Role:</label>
          <select
            name="role"
            id="role"
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="admin">Admin</option>
            <option value="student">Student</option>
          </select>
        </div>
        <button className="btn-login" onClick={handleSubmit}>Login</button>
      </div>
    </div>
  );
}

export default Login;
