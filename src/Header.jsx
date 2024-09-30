
import React, { useState } from 'react';
import { useTheme } from './ThemeContext';
import BookingForm from './BookingForm';
import { Link } from "react-router-dom"
const Header = () => {
  //useState is imported to manage the state of the showBookingForm variable, which controls whether the booking form is displayed or not.
//useTheme is imported from your ThemeContext to allow toggling between dark and light modes.
//BookingForm is imported to display the booking form inside the header.
//toggleDarkMode: Function from the ThemeContext used to toggle between light and dark themes.
//showBookingForm: Boolean state to control the visibility of the BookingForm. It's initially set to false.
  const { toggleDarkMode } = useTheme();
  const [showBookingForm, setShowBookingForm] = useState(false);
 // handleBookHereClick: This function is triggered when the "BOOK A STAY" button is clicked. 
 //It sets showBookingForm to true, displaying the BookingForm.
  const handleBookHereClick = () => {
    setShowBookingForm(true);

  };
 // handleCloseBookingForm: This function is triggered when the booking form is submitted or closed,
 // and sets showBookingForm to false.
  const handleCloseBookingForm = () => {
    setShowBookingForm(false);
  };

  return (
    <header>
      <nav>
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Stay</li>
          <li>Contact Us</li>
          <li>Special Offers</li>
        </ul>
         <button className = 'dark'onClick={toggleDarkMode}>Toggle Dark Mode</button> 
         <Link to="/book">
        <button className='book' onClick={handleBookHereClick}  >BOOK A STAY</button>
        </Link>
      </nav>
      {/* The BookingForm component is conditionally rendered ({showBookingForm && ...}). It will only display if showBookingForm is true. */}
{/* The BookingForm component receives onClose={handleCloseBookingForm} as a prop, allowing it to close the form from within. */}
      {showBookingForm && <BookingForm onClose={handleCloseBookingForm} />}
    </header>
  );
};

export default Header;