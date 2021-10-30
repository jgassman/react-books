import React from 'react';
import { makeStyles } from '@material-ui/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles(() => ({
  menuButton: {},
  title: {
    flexGrow: 1,
    textAlign: 'center',
  },
  appHeader: {
    color: '#e2e2e2',
    backgroundColor: '#0066e2',
  },
  appFooter: {
    color: '#e2e2e2',
    backgroundColor: '#0066e2',
    top: 'auto',
    bottom: 0,
  },
}));

export const AppHeader = () => {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.appHeader}>
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          Jessica's Reading Nook
        </Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  );
};

export const AppFooter = () => {
  const classes = useStyles();

  return (
    <AppBar position="fixed" color="primary" className={classes.appFooter}>
      <p>Footer</p>
    </AppBar>
  );
};
