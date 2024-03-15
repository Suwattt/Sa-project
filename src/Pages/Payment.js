import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../Component/Header";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./BookingFrom.css";

function Payment() {
  const [paymentMethod, setPaymentMethod] = useState("");
  const [paymentDate, setPaymentDate] = useState(null);
  const [roomNumber, setRoomNumber] = useState("");
  const [existingCustomers, setExistingCustomers] = useState([]);
  const [existingRooms, setExistingRooms] = useState([]);
  const [existingBookings, setExistingBookings] = useState([]);
  const [numberphone, setNumberphone] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const responseCustomers = await fetch(
          "http://localhost:3001/customers"
        );
        if (!responseCustomers.ok) {
          throw new Error("Failed to fetch existing customers");
        }
        const dataCustomers = await responseCustomers.json();
        setExistingCustomers(dataCustomers);

        const responseRooms = await fetch("http://localhost:3001/rooms");
        if (!responseRooms.ok) {
          throw new Error("Failed to fetch existing rooms");
        }
        const dataRooms = await responseRooms.json();
        setExistingRooms(dataRooms);

        const responseBookings = await fetch("http://localhost:3001/bookings");
        if (!responseBookings.ok) {
          throw new Error("Failed to fetch existing bookings");
        }
        const dataBookings = await responseBookings.json();
        setExistingBookings(dataBookings);
      } catch (error) {
        console.error("Error fetching existing data:", error);
      }
    }
    fetchData();
  }, []);
 
    const handleSubmit = async (event) => {
        event.preventDefault();

    // Check if paymentDate is not null before calling toLocaleDateString()
    const paymentDateString = paymentDate
      ? paymentDate.toLocaleDateString()
      : "";

      const generateNewId = () => {
        const randomNumber = Math.floor(Math.random() * 1000); // สร้างค่า ID สุ่มตั้งแต่ 0 ถึง 999999
        return randomNumber.toString(); // แปลงค่า ID เป็นสตริง
      };
      
      const paymentid = generateNewId(); // ใช้ฟังก์ชันเพื่อสร้างค่า ID สุ่มที่เป็นสตริง
      
      
    const paymentData = {
      id: paymentid,
      PaymentMethod: paymentMethod,
      PaymentDate: paymentDateString,
      RoomNumber: roomNumber,
    };

    try {
      await fetch("http://localhost:3001/payments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(paymentData),
      });

      console.log("Payment Data:", paymentData);
      alert("Payment successful!");
      setPaymentMethod("");
      setPaymentDate(null);
      setRoomNumber("");
    } catch (error) {
      console.error("Error submitting payment data:", error);
      alert("Error submitting payment data. Please try again later.");
    }
  };

  return (
    <div>
      <Header />
      <div className="container">
        <div className="form-container">
          <h2>Payment Form</h2>
          <div>
            <h4>
              ธนาคารออมสิน 
              หมายเลขบัญชี: 000-0-00000-0
              ชื่อบัญชี:sirilergrand
            </h4>
          </div>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="paymentMethod">Payment Method:</label>
              <br />
              <select
                id="paymentMethod"
                value={paymentMethod}
                onChange={(event) => setPaymentMethod(event.target.value)}
                required>
                <option value="">Select Payment Method</option>
                <option value="Cash">ชำระด้วยเงินสด</option>
                <option value="Bank Transfer">ชำระผ่านแอปธนาคาร</option>
              </select>
            </div>
            <div>
              <label htmlFor="paymentDate">Payment Date:</label>
              <br />
              <DatePicker
                id="paymentDate"
                selected={paymentDate}
                onChange={(date) => setPaymentDate(date)}
                minDate={new Date()}
                dateFormat="dd/MM/yyyy"
                required
              />
            </div>
            <div>
              <label htmlFor="roomNumber">Room Number:</label>
              <br />
              <select
                id="roomNumber"
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
            <Link to="/payment-details">
                <button style={{ marginLeft: '10px' }}>Payment Details</button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Payment;
