'use client'; // قرار دادن دستور use client در ابتدای فایل

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

export default function CheckoutPage() {
  const [flight, setFlight] = useState(null);
  const [loading, setLoading] = useState(true);
  const [paymentDetails, setPaymentDetails] = useState({
    name: '',
    cardNumber: '',
    expirationDate: '',
    cvv: ''
  });

  const searchParams = useSearchParams();
  const flightId = searchParams.get('flightId');

  useEffect(() => {
    if (flightId) {
      fetch(`/api/flights/${flightId}`)
        .then(response => response.json())
        .then(data => {
          setFlight(data);
          setLoading(false);
        })
        .catch(error => {
          console.error('Error fetching flight details:', error);
          setLoading(false);
        });
    }
  }, [flightId]);

  const handlePayment = (e) => {
    e.preventDefault();
    console.log('پرداخت انجام شد:', paymentDetails);
    // اینجا می‌توانید عملیات پرداخت واقعی را انجام دهید
  };

  if (loading) {
    return <div>در حال بارگذاری...</div>;
  }

  if (!flight) {
    return <div>پرواز مورد نظر یافت نشد.</div>;
  }

  return (
    <div>
      <h1>خرید بلیط</h1>
      <h3>{flight.from_location} → {flight.to_location}</h3>
      <p>تاریخ پرواز: {flight.departure_date}</p>
      <p>قیمت: {flight.price} دلار</p>
      <p>شرکت هواپیمایی: {flight.airline}</p>

      <form onSubmit={handlePayment}>
        <h2>جزئیات پرداخت</h2>
        <label>
          نام:
          <input
            type="text"
            value={paymentDetails.name}
            onChange={(e) => setPaymentDetails({ ...paymentDetails, name: e.target.value })}
            required
          />
        </label>
        <label>
          شماره کارت:
          <input
            type="text"
            value={paymentDetails.cardNumber}
            onChange={(e) => setPaymentDetails({ ...paymentDetails, cardNumber: e.target.value })}
            required
          />
        </label>
        <label>
          تاریخ انقضا:
          <input
            type="month"
            value={paymentDetails.expirationDate}
            onChange={(e) => setPaymentDetails({ ...paymentDetails, expirationDate: e.target.value })}
            required
          />
        </label>
        <label>
          CVV:
          <input
            type="text"
            value={paymentDetails.cvv}
            onChange={(e) => setPaymentDetails({ ...paymentDetails, cvv: e.target.value })}
            required
          />
        </label>

        <button type="submit">پرداخت</button>
      </form>
    </div>
  );
}
