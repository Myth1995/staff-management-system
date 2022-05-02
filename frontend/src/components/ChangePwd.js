
import * as React from 'react';
import axios from 'axios';
import { serverUrl } from '../common';
import { Button, TextField, Box, Typography, Container, CssBaseline, Avatar } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const theme = createTheme();

function ChangePwd() {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
                
        if(data.get('password') === data.get('confirm')) {
          let formData = {
            email: window.localStorage.email,
            password: data.get('password'),
          };
          console.log(formData);

          axios.post(serverUrl + "/change-pwd", formData)
          .then((res)=>{
              console.log(res);
              if(res.data.status === "success") {
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

    return (
        <ThemeProvider theme={theme}>
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
                    Change Password
                </Typography>
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      name="password"
                      label="New Password"
                      type="password"
                      id="password"
                      autoComplete="current-password"
                    />
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      name="confirm"
                      label="Re-type Password"
                      type="password"
                      id="confirm"
                      autoComplete="current-confirm"
                    />
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      sx={{ mt: 3, mb: 2 }}
                    >
                      Change
                    </Button>
                </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}

export default ChangePwd;
