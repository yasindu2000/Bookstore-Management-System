import React, { useEffect, useState } from "react";
import "../CSS/Login.css";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function EditBook() {

  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const navigate = useNavigate()
  const {id} = useParams()

  useEffect(() => {
    axios.get("http://localhost:3001/book/book/" + id)
    .then(res => {


       setName(res.data.name)
       setAuthor(res.data.author)
       setImageUrl(res.data.imageUrl)
        
    })
    .catch(err => console.log(err))
  
    
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault()

    axios.put("http://localhost:3001/book/book/" + id, {name, author, imageUrl})
    .then(res => {
        if(res.data.updated){
           navigate("/books");

        }else{
            console.log(res)
        }
        
    })
    .catch(err => console.log(err))
  };

  return (
    <div className="student-form-container">
      <form action="" className="student-form" onSubmit={handleSubmit}>
        <h2 className="">Edit Book</h2>

        <div className="form-group">
          <label htmlFor="name" className="">
            Name:
          </label>
          <input type="text" className="" name="name" id="name" value={name}
          onChange={(e) => setName(e.target.value)} />
        </div>

        <div className="form-group">
          <label htmlFor="author" className="">
            Author:
          </label>
          <input type="text" className="" name="author" id="author" value={author}
          onChange={(e) => setAuthor(e.target.value)}/>
        </div>

        <div className="form-group">
          <label htmlFor="imageUrl" className="">
            Image Url:
          </label>
          <input type="text" className="" name="imageUrl" id="imageUrl" value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}/>
        </div>

        
        <button type="submit" className="">
          Update
        </button>
      </form>
    </div>
  )
}

export default EditBook