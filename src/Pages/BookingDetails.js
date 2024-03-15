import React, { useEffect, useState } from 'react';
import Header from '../Component/Header';
import './BookingDetails.css'; // import CSS file for BookingDetails styling

function BookingDetails() {
  const [bookingData, setBookingData] = useState(null);

  useEffect(() => {
    async function fetchBookingData() {
      try {
        const response = await fetch('http://localhost:3001/bookings');
        if (!response.ok) {
          throw new Error('Failed to fetch booking data');
        }
        const data = await response.json();
        setBookingData(data);
      } catch (error) {
        console.error('Error fetching booking data:', error);
      }
    }

    fetchBookingData();
  }, []);

  const handleDeleteBooking = async (id) => {
    try {
      // ส่งคำขอลบข้อมูลไปยัง http://localhost:3001/bookings/{id}
      const response = await fetch(`http://localhost:3001/bookings/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Failed to delete booking');
      }
      // หากการลบสำเร็จ คุณสามารถลบข้อมูลลูกค้าและห้องที่เกี่ยวข้องด้วยได้
      // ส่งคำขอลบข้อมูลลูกค้าที่เกี่ยวข้องไปยัง http://localhost:3001/customers/{id}
      await fetch(`http://localhost:3001/customers/${id}`, {
        method: 'DELETE',
      });
      // ส่งคำขอลบข้อมูลห้องที่เกี่ยวข้องไปยัง http://localhost:3001/rooms/{id}
      await fetch(`http://localhost:3001/rooms/${id}`, {
        method: 'DELETE',
      });
      // Filter out the deleted booking from the current state
      const updatedBookings = bookingData.filter(booking => booking.id !== id);
      // Update state to reflect deletion
      setBookingData(updatedBookings);
    } catch (error) {
      console.error('Error deleting booking:', error);
    }
  };
  
  
    const handlePayment = async (id) => {
    // ดำเนินการชำระเงินที่นี่
    // เมื่อชำระเงินสำเร็จ ให้ redirect ผู้ใช้ไปยังหน้าใหม่
    window.location.href = '/payment'; // หรือสามารถใช้ window.location.href = '/payment'; ก็ได้
  };

  if (!bookingData || bookingData.length === 0) {
    return (
      <div >
        <Header/>
        <div className="no-bookings">No bookings available.</div>
        <div className="footer">BookingDetails</div>
      </div>
    );
  }

  return (
    <div>
      <Header/>
      <h2>Booking Details</h2>
      {bookingData.map((booking, index) => (
        <div className="booking-card" key={index}>
          <p><strong>Name:</strong> {booking.Name}</p>
          <p><strong>Number Phone:</strong> {booking.PhoneNumber}</p>
          <p><strong>Check-in Date:</strong> {booking['Check-in Date']}</p>
          <p><strong>Check-out Date:</strong> {booking['Check-out Date']}</p>
          <p><strong>Room Number:</strong> {booking['Room Number']}</p>
          <button className="delete-button" onClick={() => handleDeleteBooking(booking.id)}>Delete</button>
          <button className="payment-button" onClick={() => handlePayment(booking.id)}>Payment</button>
        </div>
      ))}
      <div className="footer">BookingDetails</div>
    </div>
  );
}

export default BookingDetails;
