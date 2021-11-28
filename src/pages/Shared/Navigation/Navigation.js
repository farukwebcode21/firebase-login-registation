import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Menu as MenuIcon } from "@material-ui/icons";
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';




const Navigation = () => {

    const { user, logout } = useAuth();

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                >
                    <MenuIcon />
                    </IconButton>
                    <NavLink style={{ textDecoration: 'none' }} to="/"><Button style={{ color: 'white' }}>Home</Button></NavLink>
                    <NavLink style={{textDecoration: 'none'}} to="/appointment"><Button style={{ color: 'white' }}>Appointmet</Button></NavLink>

                    {
                        user?.email ?
                            <Button onClick={logout} style={{textDecoration: 'none', color: 'white'}} color="inherit">Logout</Button>
                            :
                            <NavLink style={{textDecoration: 'none', color: 'white'}} to="/login">
                                <Button color="inherit">Login</Button>
                            </NavLink>
                    }
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Navigation
