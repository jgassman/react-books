import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { HashRouter, Route } from "react-router-dom";

import { AppHeader, AppFooter } from './components/AppHeader';
import Books from './components/Books';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#f9f9f9",
  },
  bookBox: {
    backgroundColor: "#f6f6f6",
  }
}));

function App() {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppHeader />
      <br />
      <HashRouter>
        <Route path="/books" exact render={() => <Books />} />
      </HashRouter>
      <AppFooter />
    </div>
  );
}

export default App;
