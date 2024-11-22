import React from 'react';
import { Link } from 'react-router-dom';
import restaurantfood from '../images/restauranfood.jpg';

function Hero() {
  return (
    <section className='hero'>
        <div className='banner'>
          <h2>Little Lemon</h2>
          <h3>Chicago</h3>
          <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
          <Link to="/booking"><button aria-label='Reserve a table'>Reserve table</button></Link>
        </div>

        <div className='banner-img'>
          <img src={restaurantfood} alt='' />
        </div>
    </section>
  );
}

export default Hero;