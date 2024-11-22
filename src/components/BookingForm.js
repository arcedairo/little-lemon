import React, { useState } from 'react';

function BookingForm(props){
  const [date, setDate] = useState("");
  const [times, setTimes] = useState("");
  const [guests, setGuests] = useState("");
  const [occasion, setOccasion] = useState("");

  const handleChange = (e) =>{
    setDate(e);
    props.dispatch(e);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    props.submitForm(e);
  }
  return (
    <div>
      <section>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <div>
              <label htmlFor='book-date'>Choose date:</label>
              <input id='book-date' value={date} onChange={(e) => handleChange(e.target.value)} type='date' required/>
            </div>

            <div>
              <label htmlFor='book-time'>Choose time:</label>
              <select id='book-time' value={times} onChange={(e) => setTimes(e.target.value)}>
                  <option value="">Select a time</option>
                  {
                    props.availableTimes.availableTimes.map(availableTimes => {return <option key={availableTimes}>{availableTimes}</option>})
                  }
              </select>
            </div>

            <div>
              <label htmlFor='book-guests'>Number of guests:</label>
              <input id='book-guests' min='1' value={guests} onChange={(e) => setGuests(e.target.value)}></input>
            </div>

            <div>
              <label htmlFor='book-occasion'>Select occasion:</label>
              <select id='book-occasion' key={occasion} value={occasion} onChange={e => setOccasion(e.target.value)}>
                <option>Birthday</option>
                <option>Romantic date</option>
                <option>Anniversary</option>
                <option>Graduation ceremony</option>
              </select>

              <div className='btnReceive'>
                <input aria-label='' type='submit' value={"Reserve now"}/>
              </div>
            </div>
          </fieldset>
        </form>
      </section>
    </div>
  );
}

export default BookingForm;
