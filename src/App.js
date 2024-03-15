import React, { useState } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import BookingFrom from './Pages/BookingFrom';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import BookingDetails from './Pages/BookingDetails';
import Payment from './Pages/Payment';
import PaymentDetails from './Pages/PaymentDetails';


function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }
  return (
    <>
      {/* <Header />
      <Banner />
      <Content /> */}
      <div>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home/>}/>
            <Route path='/booking' element={<BookingFrom/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/booking-details' element={<BookingDetails/>}/>
            <Route path='/payment' element={<Payment/>}/>
            <Route path='/payment-details' element={<PaymentDetails/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
