import React, {useState} from 'react'
import TextField from '@mui/material/TextField';
import { Button, Grid, Typography } from '@mui/material';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { Alert, CircularProgress } from '@mui/material';

const Login = () => {
    const [loginData, setLoginData] = useState({});

    const { user, loginUser, isLoading, authError } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnchange = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData);
        console.log(loginData);

    }

    const handleLoginSubmit = (e) => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }
    return (
        <>
        <Grid container spacing={2}>
        <Grid sx={{ mt: 10 }} item xs={12} md={12}>
          <Typography variant="body1" gutterBottom>Login</Typography>
          {!isLoading && <form onSubmit={handleLoginSubmit}>
            <TextField
                sx={{width:'35%', m:1}}
                id="standard-basic"
                label="Your Email"
                color="secondary"
                type="email"
                name="email"
                onBlur={handleOnchange}
              /><br/>
            <TextField
                sx={{width:'35%', m:1}}
                id="standard-basic"
                label="Your password"
                color="secondary"
                type="password"
                name="password"
                onBlur={handleOnchange}
            />
            <br/>
            <Button variant="contained" type="submit" sx={{ width: '35%', m: 1 }}>Login</Button>
            <br/>
            <NavLink to="/register" variant="text">New User? Please Register</NavLink>
                    </form>}
                    {isLoading && <CircularProgress />}
                    {user.email && <Alert severity="success" >Register  Complete !</Alert>}
                    {authError && <Alert severity="error">{ authError}</Alert>}
        </Grid>
    </Grid>
    </>
    )
}

export default Login
