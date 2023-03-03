import React, { useState } from 'react'
import {Drawer,List, ListItemButton, ListItemIcon, ListItemText,IconButton,useMediaQuery,useTheme,Button} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link,useNavigate } from "react-router-dom";
const PAGES=["Home"]
function DrawerComp() {
const navigate = useNavigate(); const [openDrawer,setOpenDrawer]=useState(false)
const theme=useTheme();
console.log(theme)
const isMatch=useMediaQuery(theme.breakpoints.down('md'));
console.log(isMatch)
const goToLogout=()=>{
    localStorage.removeItem('token')
    navigate("/Login")
}
  return (
    <React.Fragment>
        <Drawer open={openDrawer}
        onClose={()=>setOpenDrawer(false)}
        >
          <List>
            {
              PAGES.map((page,index)=>(
                <>
                <ListItemButton onClick={()=>setOpenDrawer(false)} key={index} component={Link} to={`/${page}`}>
              <ListItemIcon >
                <ListItemText >{page}</ListItemText>
              </ListItemIcon>
            </ListItemButton>

<Button onClick={goToLogout} sx={{ marginLeft: 'auto' }} variant="contained">Logout</Button>
                </>
              ))
            }
          </List>
        </Drawer>
        <IconButton sx={{color:'white',marginLeft:'auto'}} onClick={()=>setOpenDrawer(!openDrawer)}>
          <MenuIcon/>
        </IconButton>
    </React.Fragment>
  )
}

export default DrawerComp;