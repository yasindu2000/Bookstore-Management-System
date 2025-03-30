import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Books from "./components/Books";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import AddStudent from "./components/AddStudent";
import { useState } from "react";
import Logout from "./components/Logout";

function App() {

  const [role, setRole] = useState("");
  return (
    <BrowserRouter>
      <Navbar role = {role} />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Books" element={<Books/>} />
        <Route path="/login" element={<Login setRoleUpdate = {setRole}/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/addstudent" element={<AddStudent/>} />
        <Route path="/logout" element={<Logout setRoleUpdate = {setRole}/>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
