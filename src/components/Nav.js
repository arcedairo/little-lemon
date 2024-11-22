import React, { useState } from 'react';

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }

  return (
    <nav className={`navbar ${menuOpen ? "open":""}`}>
      <a href='/'>
        <img src="/Logo.svg" alt="Little Lemon Logo" />
      </a>
      {/*Mobile navbar*/}
      <div className='menu-icon' onClick={toggleMenu}>
        <div className='bar'></div>
        <div className='bar'></div>
        <div className='bar'></div>
      </div>

      <ul className={`nav-links ${menuOpen ? "visible":""}`}>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About Us</a></li>
        <li><a href="/menu">Menu</a></li>
        <li><a href="/reservations">Reservations</a></li>
        <li><a href="/order">Order Online</a></li>
        <li><a href="/login">Login</a></li>
      </ul>
    </nav>
  );
}

export default Nav;
