'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

export default function FlightDetailsPage() {
  const [flight, setFlight] = useState(null);
  const [loading, setLoading] = useState(true);
  const { query } = useRouter();
  const { flightId } = query;

  useEffect(() => {
    if (flightId) {
      axios.get(`/api/flights/${flightId}`)
        .then(response => {
          setFlight(response.data);
          setLoading(false);
        })
        .catch(error => {
          console.error('Error fetching flight details:', error);
          setLoading(false);
        });
    }
  }, [flightId]);

  if (loading) {
    return <div>در حال بارگذاری...</div>;
  }

  if (!flight) {
    return <div>پرواز مورد نظر یافت نشد.</div>;
  }

  return (
    <div>
      <h1>جزئیات پرواز</h1>
      <p>مبدا: {flight.from_location}</p>
      <p>مقصد: {flight.to_location}</p>
      <p>تاریخ پرواز: {flight.departure_date}</p>
      <p>قیمت: {flight.price} دلار</p>
      <p>شرکت هواپیمایی: {flight.airline}</p>
    </div>
  );
}
