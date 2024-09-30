import React from 'react';
import Header from './Header';
import { ThemeProvider } from './ThemeContext';
import Home from './Home';


import Footer from './Footer';

function Homepage() {
  return (
    <div>
      <ThemeProvider>
      <Header />
      <Home />
      <Footer />
    </ThemeProvider>
    </div>
  )
}

export default Homepage
