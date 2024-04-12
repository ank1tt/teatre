import * as React from 'react';
import { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import Alert from '@mui/material/Alert';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

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

export default function UserLogIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [alert, setAlert] = useState({ message: '', severity: '' });

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newErrors = {};

    // Check for empty fields
    if (!email) newErrors.email = 'Email is required.';
    if (!password) newErrors.password = 'Password is required.';

    // If there are errors, update the state, otherwise, submit the form
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      try {
        const loginResponse = await axios.post('http://localhost:8080/user/login', {
          email: email,
          password: password
        });

        console.log(loginResponse);
        if (loginResponse.data === 'Login Successful') {
          setAlert({ message: 'Congratulations, You are logged in!', severity: 'success' });
          setTimeout(() => setAlert({ message: '', severity: '' }), 3000);

          const userTypeResponse = await axios.get('http://localhost:8080/user/usertype', {
            params: {
              email: email
            }
          });

          console.log(userTypeResponse.data);
          if (userTypeResponse.data.trim().toLowerCase() === 'admin') {
            navigate('/admin');
          }
        }
      } catch (error) {
        console.log(error);
        if (error.response && error.response.data) {
          setAlert({ message: error.response.data, severity: 'error' });
        } else {
          setAlert({ message: 'An error occurred. Please try again later.', severity: 'error' })
        }
        setTimeout(() => setAlert({ message: '', severity: '' }), 3000);
      }
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container maxWidth="sm">
        {alert.message && <Alert variant="filled" severity={alert.severity}>{alert.message}</Alert>}
      </Container>
      <Container component="main" maxWidth="xs" style={{ backgroundColor: '#ffd700', height: '47vh' }}  >
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
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={e => setEmail(e.target.value)}
              error={!!errors.email}
              helperText={errors.email}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              error={!!errors.password}
              helperText={errors.password}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Log In
            </Button>
            <Grid container justifyContent='center'>
              <Grid item>
                <Link to="/register" variant="body2">
                  {"Don't have an account? Register"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
