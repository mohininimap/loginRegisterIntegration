import React, { useEffect } from 'react'
import {
BrowserRouter as Router,
useNavigate
  } from "react-router-dom";
const Protected = (props) => {
    const {Component}=props
    const navigate=useNavigate()
    useEffect(()=>{
        let login=localStorage.getItem('token')
        {!login? navigate('/Login'): navigate('/Home')  }
    })
  return (
    <div>
        <Component/>
    </div>
  )
}

export default Protected