import axios from 'axios';
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

function Logout({setRoleUpdate}) {
  
const navigate = useNavigate()
    useEffect(() => {
        
    axios.get("http://localhost:3001/auth/logout")
        .then(res =>{

            if(res.data.Logout){
                setRoleUpdate("")
                navigate("/")
            }
        }).catch(err => console.log(err))
    }, []);
}

export default Logout