import React, { useState } from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './global';
import { light, dark } from './themes';
import Header from './components/Header/Header';
import Countries from './components/Countries/Countries';
import CountryDetail from './components/CountryDetail/CountryDetail';


function App() {

  const stored = localStorage.getItem('isDarkMode');
  const [isDarkMode, setIsDarkMode] = useState(
    stored === 'true' ? true : false
  );

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    localStorage.setItem('isDarkMode', !isDarkMode);
  };

  return (
      <ThemeProvider theme={isDarkMode ? dark : light}>
          <GlobalStyles />
          <BrowserRouter>
          <Header toggleThemes={toggleTheme}/> 
              <Switch>
                  <Route exact path='/countries_info' component={Countries} />        
                  <Route path='/:alpha3Code' component={CountryDetail} />
              </Switch>
          </BrowserRouter>
      </ThemeProvider>
  );
}

export default App;
