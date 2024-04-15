import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import {Link} from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import axios from 'axios';


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        teater
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const defaultTheme = createTheme();

export default function Register() {

  const expectedAdminCode = '@nk1t'
  const[email, setEmail] = useState('');
  const[password, setPassword] = useState('');
  const[userName, setUserName] = useState('');
  const[mobileNo, setMobileNo] = useState('');
  //const[lastName, setLastName] = useState('');
  const[errors, setErrors] = useState({});
  const[userType, setUserType] = useState('User');
  const[adminCodeError, setAdminCodeError] = useState('');

  const validateForm = () => {
    let tempErrors = {};

    tempErrors.userName = userName ? "" : "Username  is required";
   // tempErrors.lastName = lastName ? "" : "Last Name is required";
    tempErrors.email = email ? "" : "Email is required";
    tempErrors.password = password ? "" : "Password is required";
    tempErrors.mobileNo = mobileNo ? "" : "Mobile Number is required";

    setErrors(tempErrors);
    return Object.values(tempErrors).every(x => x === "");
  }

  const handleUserTypeChange = (event) => {
    const selectedUserType = event.target.value;

    if(selectedUserType === 'Admin'){
      const adminCode = window.prompt('Enter the Admin Code');
      if(adminCode === expectedAdminCode){
        setUserType(selectedUserType);
        setAdminCodeError('');
      }else{
        setAdminCodeError('Invaid Admin Code');
      }
    }else{
      setUserType(selectedUserType);
      setAdminCodeError('');
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if(validateForm()){
    
    const data = {
      email: email,
      password: password,
      mobileNo: mobileNo,
      userName: userName,
      userType: userType
    };

    axios.post('http://localhost:8080/user/register', data)
    .then(response => {
      console.log(response);
    }).catch(error => {
      console.log('Error', error);
    })
    
  }
};

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs" style={{backgroundColor: "#ffd700", minheight:"58vh"}}>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="username"
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  autoFocus
                  value={userName}
                  onChange={e => setUserName(e.target.value)}
                  error={Boolean(errors.userName)}
                  helperText = {errors.userName} 
                />
              </Grid>
            
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value = {email}
                  onChange = {e => setEmail(e.target.value)}
                  error = {Boolean(errors.email)}
                  helperText ={errors.email}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  value = {password}
                  onChange = {e => setPassword(e.target.value)}
                  error = {Boolean(errors.password)}
                  helperText = {errors.password}
                />
              </Grid>
              <Grid item xs={12}>
               
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="mobileNo"
                  label="Mobile Number"
                  type="tel"
                  id="mobile-no"
                  autoComplete="new-password"
                  value = {mobileNo}
                  onChange = {e => setMobileNo(e.target.value)}
                  error = {Boolean(errors.mobileNo)}
                  helperText = {errors.mobileNo}
                />
              </Grid>
              <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="userType"
                select
                label="User Type"
                value={userType}
                onChange={handleUserTypeChange}
                helperText={adminCodeError}
              >
                <MenuItem value="User">User</MenuItem>
                <MenuItem value="Admin">Admin</MenuItem>
              </TextField>
            </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Register
            </Button>
            <Grid container justifyContent="center">
              <Grid item>
                <Link to ="/login" variant="body2">
                  Already have an account? Log In
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}