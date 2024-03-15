import React, { useState, useEffect } from 'react';
import Header from '../Component/Header';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './BookingFrom.css';

function BookingForm() {
  const [name, setName] = useState('');
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [numberphone, setNumberphone] = useState('');
  const [roomNumber, setRoomNumber] = useState('');
  const [existingCustomers, setExistingCustomers] = useState([]);
  const [existingRooms, setExistingRooms] = useState([]);
  const [existingBookings, setExistingBookings] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const responseCustomers = await fetch('http://localhost:3001/customers');
        if (!responseCustomers.ok) {
          throw new Error('Failed to fetch existing customers');
        }
        const dataCustomers = await responseCustomers.json();
        setExistingCustomers(dataCustomers);
  
        const responseRooms = await fetch('http://localhost:3001/rooms');
        if (!responseRooms.ok) {
          throw new Error('Failed to fetch existing rooms');
        }
        const dataRooms = await responseRooms.json();
        setExistingRooms(dataRooms);
  
        const responseBookings = await fetch('http://localhost:3001/bookings');
        if (!responseBookings.ok) {
          throw new Error('Failed to fetch existing bookings');
        }
        const dataBookings = await responseBookings.json();
        setExistingBookings(dataBookings);
      } catch (error) {
        console.error('Error fetching existing data:', error);
      }
    }
    fetchData();
  }, []);

  const generateNewId = (dataArray) => {
    if (dataArray.length === 0) {
      return "1";
    } else {
      const maxId = dataArray.reduce((max, item) => {
        const itemId = parseInt(item.id);
        return itemId > max ? itemId : max;
      }, 0);
      return String(maxId + 1);
    }
  };
  

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    // เพิ่มเงื่อนไขเพื่อตรวจสอบว่าเป็นตัวเลขทั้งหมดและมีความยาว 10 ตัว
    const isNumber = /^\d+$/;
    if (!isNumber.test(numberphone) || numberphone.length !== 10) {
      alert('โปรดกรอกเบอร์โทรศัพท์ให้ถูกต้อง');
      return;
    }
  
    // Check if the room is already booked for the selected dates
    const isRoomBooked = existingBookings.some(booking => {
      const bookingCheckIn = new Date(booking['Check-in Date']);
      const bookingCheckOut = new Date(booking['Check-out Date']);
  
      // Convert check-in and check-out dates to Date objects for comparison
      const selectedCheckIn = new Date(checkInDate);
      const selectedCheckOut = new Date(checkOutDate);
  
      // Check if the room is booked for overlapping dates
      return (
        booking['Room Number'] === roomNumber &&
        (
          (selectedCheckIn >= bookingCheckIn && selectedCheckIn < bookingCheckOut) ||
          (selectedCheckOut > bookingCheckIn && selectedCheckOut <= bookingCheckOut) ||
          (selectedCheckIn <= bookingCheckIn && selectedCheckOut >= bookingCheckOut)
        )
      );
    });
  
    if (isRoomBooked) {
      alert('ห้องนี้ถูกจองไปแล้วในช่วงวันที่เลือก');
      return;
    }
  
    const id = generateNewId(existingBookings);
    const bookingData = {
      id: generateNewId(existingBookings),
      Name: name,
      NumberPhone: numberphone,
      'Check-in Date': checkInDate.toLocaleDateString(),
      'Check-out Date': checkOutDate.toLocaleDateString(),
      'Room Number': roomNumber
    };
  
    try {
      await fetch('http://localhost:3001/customers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: generateNewId(existingCustomers), Name: name, PhoneNumber: numberphone }),
      });
  
      await fetch('http://localhost:3001/rooms', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: generateNewId(existingRooms), RoomNumber: roomNumber, Status: 'Available' }),
      });
  
      await fetch('http://localhost:3001/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: id, Name: name, PhoneNumber: numberphone, 'Check-in Date': checkInDate.toLocaleDateString(), 'Check-out Date': checkOutDate.toLocaleDateString(), 'Room Number': roomNumber }),
      });
  
      console.log('Booking Data:', bookingData);
      alert('Booking successful!');
      setName('');
      setCheckInDate(null);
      setCheckOutDate(null);
      setNumberphone('');
      setRoomNumber('');
    } catch (error) {
      console.error('Error submitting booking data:', error);
      alert('Error submitting booking data. Please try again later.');
    }
  };  
  
  
  return (
    <div>
      <Header />
      <div className="container">
        <div className="form-container">
          <h2>Booking Form</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="numberphone">NumberPhone:</label>
              <input
                type="tel"
                id="numberphone"
                value={numberphone}
                onChange={(event) => setNumberphone(event.target.value)}
                maxLength={10}
                required
              />
            </div>
            <div>
              <label htmlFor="checkin">Check-in Date:</label><br />
              <DatePicker
                id="checkin"
                selected={checkInDate}
                onChange={(date) => setCheckInDate(date)}
                minDate={new Date()}
                dateFormat="dd/MM/yyyy"
                required
              />
            </div>
            <div>
              <label htmlFor="checkout">Check-out Date:</label><br />
              <DatePicker
                id="checkout"
                selected={checkOutDate}
                onChange={(date) => setCheckOutDate(date)}
                minDate={checkInDate || new Date()}
                dateFormat="dd/MM/yyyy"
                required
              />
            </div>
            <div>
              <label htmlFor="roomnumber">Room Number:</label><br />
              <select
                id="roomnumber"
                value={roomNumber}
                onChange={(event) => setRoomNumber(event.target.value)}
                required
              >
                <option value="">Select Room Number</option>
                <option value="101">101</option>
                <option value="102">102</option>
                <option value="103">103</option>
                <option value="104">104</option>
                <option value="105">105</option>
              </select>
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default BookingForm;
