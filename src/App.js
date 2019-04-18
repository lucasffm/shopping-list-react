import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createMuiTheme } from '@material-ui/core/styles';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import teal from '@material-ui/core/colors/teal';

import './App.css';

import Header from './components/Header';
import Home from './components/Home';
import CreateList from './components/CreateList';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  },
  palette: {
    primary: teal,
    secondary: {
      main: '#009688'
    }
  }
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Router>
          <div>
            <Header />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/lista' component={CreateList} />
            </Switch>
          </div>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
