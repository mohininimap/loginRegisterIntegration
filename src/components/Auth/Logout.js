import React from 'react'
import {
    BrowserRouter as Router,
    useNavigate,NavLink
  } from "react-router-dom";
  import {  Button,Box } from '@mui/material';

const Logout = () => {
  const navigate = useNavigate();
  
  
   
        localStorage.removeItem('token')
     
    

  return (
    <>
        <Box sx={{ marginLeft: 'auto',marginTop:"100px" }} >< NavLink to="/" variant="contained">New to Nimap? Join now</NavLink>
</Box>
    </>
  )
}

export default Logout