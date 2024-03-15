import React, { useState, useEffect } from "react";
import Header from '../Component/Header';

function PaymentDetails() {
  const [payments, setPayments] = useState([]);

  const fetchPayments = async () => {
    try {
      const response = await fetch("http://localhost:3001/payments");
      if (!response.ok) {
        throw new Error("Failed to fetch payments");
      }
      const data = await response.json();
      setPayments(data);
    } catch (error) {
      console.error("Error fetching payments:", error);
    }
  };

  useEffect(() => {
    fetchPayments(); // เรียกใช้งานฟังก์ชัน fetchPayments ใน useEffect เพื่อดึงข้อมูล payments เมื่อคอมโพเนนต์ถูกโหลด
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:3001/payments/${id}`, {
        method: "DELETE"
      });
      if (!response.ok) {
        throw new Error("Failed to delete payment");
      }
      // หลังจากลบข้อมูลสำเร็จ ให้ดึงข้อมูล Payments ใหม่
      fetchPayments(); // เรียกใช้งานฟังก์ชัน fetchPayments เพื่ออัปเดตข้อมูล
    } catch (error) {
      console.error("Error deleting payment:", error);
    }
  };

  return (
    <div>
        <Header/>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Payment Details</h2>
      <table style={{ borderCollapse: 'collapse', width: '100%' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>ID</th>
            <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Payment Method</th>
            <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Payment Date</th>
            <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Room Number</th>
            <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {payments.map((payment) => (
            <tr key={payment.id}>
              <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>{payment.id}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>{payment.PaymentMethod}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>{payment.PaymentDate}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>{payment.RoomNumber}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>
                <button style={{ backgroundColor: 'red', color: 'white', border: 'none', padding: '5px 10px', borderRadius: '5px' }} onClick={() => handleDelete(payment.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PaymentDetails;
