import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Typography, Box, Container, Grid } from '@mui/material';
import Logo from '../assets/img/logo/logo.png';
import {makeStyles} from "@material-ui/core";

const theme = createTheme();

function Contact() {

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
        }, 
        content: {
            textAlign: "center"
        }
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
            </Grid>
            <Container>
                <Typography variant="h6" sx={{my: 3}} className={classes.content}>
                    Contact No: +1 234 567 8901
                </Typography>
                <Typography variant="h6" className={classes.content}>
                    Fax No: 1 234 567 8901
                </Typography>
                <Typography variant="h6" sx={{my: 3}} className={classes.content}>
                    Email: admin@admin.com
                </Typography>
                <Typography variant="h6" className={classes.content}>
                    Address: Malaysia
                </Typography>
            </Container>
        </ThemeProvider>
    );
}

export default Contact;
