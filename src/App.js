
import './App.css';
import Home from './Home';
import React from 'react';


import {BrowserRouter,Routes,Route} from "react-router-dom";
import Homepage from './Homepage';
import BookingForm from './BookingForm';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
     <Routes>
      <Route path='/' element={<Homepage/>} />
      <Route path='/book' element={<BookingForm/>} />

     </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;


{/* <ThemeProvider>
      <Header />
      <Home />
      <Footer />
    </ThemeProvider> */}