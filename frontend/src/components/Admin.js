
import * as React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { serverUrl } from '../common';
import { Paper, Container, Button, Grid, Table ,TableBody ,TableCell ,TableContainer ,TableHead ,TableRow } from '@mui/material';

function Admin() {
    const [userList, setUserList] = useState([]);
    useEffect(()=>{
        if(window.localStorage.email === "") {
            window.location.href = "/";
        }
        async function getUsers() {
            await axios.get(serverUrl + "/get-users")
            .then((res)=>{
                setUserList(res.data);
            })
            console.log(userList);
        }
        getUsers();
    }, []);

    return (
        <Container className='admin' component="main" maxWidth="md">
            <Grid container>
                <Grid item xs={2} >
                    <Button
                        type="button"
                        fullWidth
                        variant="contained"
                        color="warning"
                        >
                        Update / Edit
                    </Button>
                </Grid>
                <Grid item xs={1} ></Grid>
                <Grid item xs={2} >
                    <Button
                        type="button"
                        fullWidth
                        variant="contained"
                        >
                        Release
                    </Button>
                </Grid>
                <Grid item xs={1} ></Grid>
                <Grid item xs={3}>
                    <Button
                        type="button"
                        fullWidth
                        color="success"
                        variant="contained"
                        onClick={()=>{
                            window.location.href="/register";
                        }}
                    >
                        Create New User
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

export default Admin;
