import React from 'react';
import BookingForm from './BookingForm';

function BookingPage(props) {
  return (
    <div className='form-section'>
      <h1>Book Your Reservation</h1>
      <p>Fill out the form below to reserve your table.</p>
      <BookingForm availableTimes={props.availableTimes} dispatch={props.dispatch} submitForm={props.submitForm}/>
    </div>
  );
}

export default BookingPage;
