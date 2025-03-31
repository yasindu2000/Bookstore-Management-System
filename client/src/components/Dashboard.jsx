import React from 'react'
import '../CSS/Dashboard.css'

function Dashboard() {
  return (
    <div className="dashboard">
      <div className="dashboard-box">
        <h2>Total Books</h2> <br/>
        <h2></h2>
      </div>

      <div className="dashboard-box">
        <h2>Total Students</h2> <br/>
        <h2></h2>
      </div>

      <div className="dashboard-box">
        <h2>Total Admins</h2> <br/>
        <h2></h2>
      </div>
    </div>
  )
}

export default Dashboard