
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Alert from 'react-bootstrap/Alert';
//useState: Manages the form’s input state for name, check-in and check-out dates, number of days, and total price.
//DatePicker: A date picker component imported from the react-datepicker library to simplify date selection.
const BookingForm = ({ onClose }) => {
  const [name, setName] = useState('');
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [numberOfDays, setNumberOfDays] = useState('');
  const [price, setPrice] = useState(0);
  const [showAlert, setShowAlert] = useState(false); // To show booking alert
//name,checkin date.... all this variables store values enterd by user
  const basePricePerDay = 1200;
  //handleSubmit: This function is called when the form is submitted. It prevents the default form submission behavior using e.preventDefault(). 
 // Then it closes the form by calling the onClose function, which was passed as a prop from the Header component.
  const handleSubmit = (e) => {
    e.preventDefault();
    setShowAlert(true); // Show success alert
    setTimeout(() => {
      setShowAlert(false); // Hide alert after 5 seconds (optional)
    }, 5000);
   
    
   // onClose();
  };
 // useEffect: React's useEffect hook is used here to perform the calculation when either the checkInDate or checkOutDate changes.
  React.useEffect(() => {
    //If either checkInDate or checkOutDate is not selected, the price is set to 0.
    if (!checkInDate || !checkOutDate) {
      setPrice(0);
      return;
    }
   // The number of days (daysDiff) is calculated by subtracting checkInDate from checkOutDate and converting the difference from milliseconds to days.
   //If checkOutDate is before checkInDate, it shows an alert.
    const daysDiff = Math.floor((checkOutDate - checkInDate) / (1000 * 60 * 60 * 24));
    if (daysDiff < 0) {
      alert('Check-out date cannot be before check-in date');
      return;
    }
    //If dates are valid, setNumberOfDays is updated to daysDiff + 1, and the price is calculated by multiplying the number of days by the base price (1200 Rs/day).
    setNumberOfDays(daysDiff + 1);
    setPrice(basePricePerDay * (daysDiff + 1)); 
  }, [checkInDate, checkOutDate]);

  return (
    <div className="bookingform">
      {/* Show alert when form is submitted
      {showAlert && (
        <Alert variant="success" className='booking-alert'>
          Booking is successful!
        </Alert>
      )} */}

{showAlert ? (
        <Alert variant="success" className='booking-alert'>
          Booking is successful!
        </Alert>
      ):
      
      (<form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} />
        </label><br></br>
        <label>
          Check-in Date:
          <DatePicker selected={checkInDate}
           onChange={(date) => setCheckInDate(date)} 
           dateFormat="dd/MM/yyyy" />
        </label><br></br>
        <label>
          Check-out Date:
          <DatePicker selected={checkOutDate} 
          onChange={(date) => setCheckOutDate(date)}
           dateFormat="dd/MM/yyyy" />
        </label><br></br>
        <label>
          Number of Days: {numberOfDays}
        </label><br></br>
        <label>
          Total Price: {price} Rs
        </label>
        <button type="submit">Book</button>
      </form>)
}
    </div>
  );
};

export default BookingForm;