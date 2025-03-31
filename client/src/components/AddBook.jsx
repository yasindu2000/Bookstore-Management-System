import React, { useState } from "react";
import "../CSS/Login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddBook() {

  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    axios.post("http://localhost:3001/book/add", {name, author, imageUrl})
    .then(res => {
        console.log(res)
    })
    .catch(err => console.log(err))
  };

  return (
    <div className="student-form-container">
      <form action="" className="student-form" onSubmit={handleSubmit}>
        <h2 className="">Add Book</h2>

        <div className="form-group">
          <label htmlFor="name" className="">
            Name:
          </label>
          <input type="text" className="" name="name" id="name"
          onChange={(e) => setName(e.target.value)} />
        </div>

        <div className="form-group">
          <label htmlFor="author" className="">
            Author:
          </label>
          <input type="text" className="" name="author" id="author" 
          onChange={(e) => setAuthor(e.target.value)}/>
        </div>

        <div className="form-group">
          <label htmlFor="imageUrl" className="">
            Image Url:
          </label>
          <input type="text" className="" name="imageUrl" id="imageUrl" 
          onChange={(e) => setImageUrl(e.target.value)}/>
        </div>

        
        <button type="submit" className="">
          Add Book
        </button>
      </form>
    </div>
  )
}

export default AddBook