import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Typography, Box, Container, Grid } from '@mui/material';
import Logo from '../assets/img/logo/logo.png';
import {makeStyles} from "@material-ui/core";

const theme = createTheme();

function About() {

    const useStyles = makeStyles((theme) => ({
        header: {
            display: "flex",           
        }, 
        logo: {
          cursor: "pointer"
        },
        title: {
            display: "flex",
            margin: "auto",
            textAlign: "center",
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
            <Grid container xs={12} spacing={0} className={classes.header}>
                <Grid item xs={5}>
                    <Box
                        component="img"
                        sx={{
                            height: 233,
                            width: 350,
                            maxHeight: { xs: 233, md: 167 },
                            maxWidth: { xs: 350, md: 250 },
                            marginTop: 0,
                            marginLeft: "3%"
                        }}
                        alt="The house from the offer."
                        src={Logo}
                        className={classes.logo}
                    />
                </Grid>
                <Grid item xs={4}>
                    <Typography variant="h3" className={classes.title} sx={{pt: 2}} xs={4}>
                        Company Background
                    </Typography>
                </Grid>
            </Grid>
            <Container>
                <Typography variant="h5" sx={{my: 3}}>
                    1. Directors
                </Typography>
                <Typography variant="h6">
                    Director
                </Typography>
                <Typography variant="h5" sx={{my: 3}}>
                    2. What we do
                </Typography>
                <Typography variant="h6">
                    Director
                </Typography>
            </Container>
        </ThemeProvider>
    );
}

export default About;
