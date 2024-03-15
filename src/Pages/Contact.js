// Contact.js
import React from 'react';
import Header from '../Component/Header';
import './Contact.css'; // เชื่อมต่อไฟล์ CSS
import Footer from '../Component/Footer';

function Contact() {
  return (
    <>
      <Header />
      <div className="contact-container">
        <h2>Contact Page</h2>
        <h4>Phone Numbers: 0894533964, 0661097506</h4>
        <h4>Email: sirilersrand@gmail.com</h4>
        <h4>Address:146/2 ม.5 ต.กรับใหญ่ อ.บ้านโป่ง จ.ราชบุรี 70190</h4>
      </div>
      <Footer/>
    </>
  );
}

export default Contact;
