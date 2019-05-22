import React from 'react';
// import './App.css';
import { MuiThemeProvider } from '@material-ui/core/styles';
import Home from './components';
import theme from './theme';

const App: React.FC = () => {
  return (
      <MuiThemeProvider theme={theme}>
        <Home/>
      </MuiThemeProvider>
  );
};

export default App;
