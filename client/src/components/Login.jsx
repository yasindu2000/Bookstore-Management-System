import React from 'react'
import '../CSS/Login.css'

function Login() {
  return (
    <div className="login-page">
      <div className="login-container">
        <h2 className="">Login</h2><br/>

        <div className="form-group">
          <label htmlFor='username'>Username:</label>
          <input type="text" className="" placeholder='Enter Username' />
        </div>
        <div className="form-group">
          <label htmlFor='username'>Password:</label>
          <input type="password" className="" placeholder='Enter Password' />
        </div>
        <div className="form-group">
          <label htmlFor='role'>Role:</label>
          <select name='role' id='role'>
            <option value="admin">Admin</option>
            <option value="student">Student</option>

          </select>
        </div>
        <button className="btn-login">Login</button>
      </div>
    </div>
  )
}

export default Login