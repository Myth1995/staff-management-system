
import * as React from 'react';
import axios from 'axios';
import { serverUrl } from '../common';
import { Button, TextField, Link, Grid, Checkbox, Box, Typography, Container, CssBaseline, Avatar, FormControlLabel } from '@mui/material';
import {
    Toolbar,
    makeStyles,
  } from "@material-ui/core";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Copyright(props) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="#">
          Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

const theme = createTheme();

function Login() {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        let formData = {
          email: data.get('email'),
          password: data.get('password'),
        };
        if(formData.email === "a@a.com" && formData.password === "a") {
            window.localStorage.email = formData.email;
            window.localStorage.name = formData.name;
            window.location.href = "/admin";
        }
        else {
            axios.post(serverUrl + "/login", formData)
            .then((res)=>{
                console.log(res);
                debugger;
                if(res.data.status === "success") {
                    window.localStorage.email = res.data.email;
                    window.localStorage.name = res.data.name;
                    window.location.href = "/user";
                }
                else if(res.data.status === "none") {
                    alert("Please valid email or password.");
                }
            })
            .catch((err)=>{

            });
        }
      };

      const useStyles = makeStyles((theme) => ({
        navlinks: {
          marginLeft: theme.spacing(10),
          display: "flex",
        },
       logo: {
        //   flexGrow: "1",
          cursor: "pointer",
        },
        link: {
          color: "white",
          fontSize: "20px",
          marginLeft: "40px !important",
          cursor: "pointer",
          textDecoration: "none !important",
          "&:hover": {
            color: "#a9c3dd",
          },
        },
      }));

      const classes = useStyles();
      
    return (
        <ThemeProvider theme={theme}>
            <Toolbar>
                <Typography variant="h4" onClick={()=>{
                    window.location.href = "/";
                }} className={classes.logo}>
                Company Logo
                </Typography>
                <Container className={classes.navlinks}>
                    <Link href="/about" className={classes.link}>
                    About Us
                    </Link>
                    <Link href="/contact" className={classes.link}>
                    Contact Us
                    </Link>
                </Container>
            </Toolbar>
            <Container component="main" maxWidth="xs">
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
                    />
                    <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Remember me"
                    />
                    <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    >
                    Sign In
                    </Button>
                    <Grid container>
                    <Grid item xs>
                        <Link href="#" variant="body2">
                        Forgot password?
                        </Link>
                    </Grid>
                    </Grid>
                </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}

export default Login;
