
import * as React from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { serverUrl } from '../common';
import { Container, Button, TextField, Box, Grid } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

function Register() {
    useEffect(()=>{
        if(window.localStorage.email === "") {
            window.location.href = "/";
        }
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        
        let data = {
            name: formData.get('name'),
            passport: formData.get('passport'),
            email: formData.get('email'),
            department: formData.get('department'),
            dob: formData.get('dob'),
            contact: formData.get('contact'),
            residential: formData.get('residential'),
            emergency: formData.get('emergency'),
            password: formData.get('pwd'),
        }
        console.log(data);
        if(formData.get('pwd') !== formData.get('retype_pwd')) {
            alert("Please input password same!");
            return;
        }

        axios.post(serverUrl + "/add-user", data)
        .then((res)=>{
            // window.location.href = "/profile"
            alert("User Register success!");
            return;
        })
        .catch((err)=>{

        });
    }

    return (
        <ThemeProvider theme={theme}>
            <Container maxWidth="lg">
                <Box sx={{mx: "auto", mt: 5, pt: 5}}>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <Grid container xs={6} spacing={3} sx={{mx: "auto"}}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    id="outlined-required"
                                    label="Name"
                                    name="name"
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    id="outlined-required"
                                    label="IC/Passport"
                                    name="passport"
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    id="outlined-required"
                                    label="Email"
                                    name="email"
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    id="outlined-required"
                                    label="Department"
                                    name="department"
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    id="outlined-required"
                                    label="D O B"
                                    name="dob"
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    id="outlined-required"
                                    label="Contact No"
                                    name="contact"
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    id="outlined-required"
                                    label="Residential"
                                    name="residential"
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    id="outlined-required"
                                    label="Emergency Contact"
                                    name="emergency"
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    id="outlined-required"
                                    label="Password"
                                    type="password"
                                    name="pwd"
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    id="outlined-required"
                                    label="Retype Password"
                                    type="password"
                                    name="retype_pwd"
                                    fullWidth
                                />
                            </Grid>
                        </Grid>
                        <Grid container xs={6} spacing={3} sx={{mx: "auto", mt: 2}}>
                            <Grid item xs={12} sm={6}>
                                <Button fullWidth variant="contained" color="error">Back</Button>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Button type="submit" fullWidth variant="contained" color="success">Register</Button>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}

export default Register;
