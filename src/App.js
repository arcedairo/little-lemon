import './App.css';
import React from 'react';
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer'
import BookingPage from './components/BookingPage';
import Hero from './components/Hero';
import BookingForm from './components/BookingForm';
import Menu from './components/Menu';

function App() {
  return (
    <>   
      <Nav />
      <Main/>
      <Menu />
      <Footer />
    </>
  );
}

export default App;
