import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";


import { AppBar, Typography, Toolbar, Tabs, Tab, Button, useMediaQuery, useTheme } from '@mui/material';
import DrawerComp from '../DrawerComp/DrawerComp';
import "./Header.scss";
let PAGES = ["Home"];
const Header = () => {
    const [value, setValue] = useState();
    const theme = useTheme();
    const navigate = useNavigate();
    //current theme
    console.log(theme)
    const isMatch = useMediaQuery(theme.breakpoints.down('md'));
    const goToLogin = () => {
        navigate('/Login')
    }
    const goToLogout=()=>{
        localStorage.removeItem('token')
        navigate("/Login")
    }
    return (
        <>
            <div className='hContainer'>
                <AppBar className='happbar' sx={{ backgroundColor: "#E0E0E0" }}>
                    <Toolbar>
                        <Typography className='htitle'>LOGO</Typography>
                        {
                            isMatch ? (
                                <>
                                    <DrawerComp />
                                </>
                            ) : (
                                <>
                                    <Tabs value={value} onChange={(e, value) => setValue(value)}
                                        TabIndicatorProps={{
                                            hidden: true,
                                            sx: { color: 'white' }
                                        }}
                                        sx={{
                                            "& button:hover": { backgroundColor: "blue", color: 'white' },
                                            "& button:active": { backgroundColor: "gold" },
                                            "& button.Mui-selected": { backgroundColor: "black", color: 'white' },
                                        }}
                                    >
                                        {localStorage.getItem("token")?
                                            PAGES.map((page, index) => (
                                              <>
                                              <Tab className='htab' key={index} label={page} component={Link} to={`/${page}`} />
                                                <Button onClick={goToLogout} sx={{ marginLeft: 'auto' }} variant="contained">Logout</Button>
                                              </>
                                            ))
                                        : <Button onClick={goToLogin} sx={{ marginLeft: 'auto' }} variant="contained">Login</Button>
                                    }
                                    </Tabs>
                                </>
                            )
                        }
                    </Toolbar>
                </AppBar>
            </div>
        </>
    )
}
export default Header
