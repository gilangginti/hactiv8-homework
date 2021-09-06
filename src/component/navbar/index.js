import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Container, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  toolbar: {
      marginRight: 40,
    },
  spacing: {
      marginRight:150,
  },
  loginspace: {
      marginLeft: 500,
  },
  AppBar:{
    backgroundColor: '#f5f5f5',
    height: 50,
    textAlign: 'center',
    color: 'black',
  },
}));

export default function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.AppBar}>
        <Container>
        <Toolbar variant="dense">
          <Typography variant="h4"  className={classes.spacing}>
            QTemu
          </Typography>
          <Typography variant="h6"  className={classes.toolbar} href="#">
            CreateBlogs
          </Typography>
          <Button variant="h6"  className={classes.toolbar}>
            CreateBlogs
          </Button>
          <Button variant="h6" className={classes.loginspace}>
            Login
          </Button>
        </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}
