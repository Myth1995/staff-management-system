
import * as React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { serverUrl } from '../common';
import { Link, Paper, Container, Button, Grid, Table ,TableBody ,TableCell ,TableContainer ,TableHead ,TableRow, Typography } from '@mui/material';
import { Toolbar, makeStyles } from "@material-ui/core";

function User() {
    const [userList, setUserList] = useState([]);
    const [userName, setUserName] = useState("");
    useEffect(()=>{
        if(window.localStorage.email === "") {
            window.location.href = "/";
        }
        setUserName(window.localStorage.name);
        async function getUsers() {
            await axios.get(serverUrl + "/get-users")
            .then((res)=>{
                setUserList(res.data);
            })
            console.log(userList);
        }
        getUsers();
    }, []);

    const useStyles = makeStyles((theme) => ({
        navlinks: {
          marginLeft: theme.spacing(10),
          display: "flex",
        },
        link: {
          color: "white",
          fontSize: "20px",
          cursor: "pointer",
          float: 'right',
          textDecoration: "none !important",
          "&:hover": {
            color: "#a9c3dd",
          },
        },
      }));

    const classes = useStyles();

    const onLogout = () => {
        window.localStorage.name = "";
        window.localStorage.email = "";
        window.location.href = "/";
    }

    return (
        <Container component="main" maxWidth="md">
            <Toolbar>
                <Container className={classes.navlinks}>
                    <Link onClick={() =>{
                        onLogout();
                    }} className={classes.link}>
                    LOG OUT
                    </Link>
                </Container>
            </Toolbar>
            <Typography variant='h4'>
                Welcome {userName}!
            </Typography>
            <Grid container>
                <Grid item xs={2} >
                    <Button
                        type="button"
                        fullWidth
                        variant="contained"
                        color="warning"
                        >
                        User Profile
                    </Button>
                </Grid>
                <Grid item xs={1} ></Grid>
                <Grid item xs={3} >
                    <Button
                        type="button"
                        fullWidth
                        variant="contained"
                        href='/change-pwd'
                        >
                        Change Password
                    </Button>
                </Grid>
            </Grid>
            <Grid>
                <Grid item xs={12} sx={{m: "auto"}}>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>ID</TableCell>
                                    <TableCell align="right">Employee No</TableCell>
                                    <TableCell align="right">Employee Name</TableCell>
                                    <TableCell align="right">Department</TableCell>
                                    <TableCell align="right">Shift</TableCell>
                                    <TableCell align="right">Annual Day Leave</TableCell>
                                    <TableCell align="right">Remark</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                            {userList.map((row, index) => (
                                <TableRow
                                key={index}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">{index+1}</TableCell>
                                    <TableCell align="right">{}</TableCell>
                                    <TableCell align="right">{row.name}</TableCell>
                                    <TableCell align="right">{row.department}</TableCell>
                                    <TableCell align="right">{}</TableCell>
                                    <TableCell align="right">{}</TableCell>
                                    <TableCell align="right">{}</TableCell>
                                </TableRow>
                            ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>
        </Container>
    );
}

export default User;
