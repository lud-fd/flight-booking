'use client';
import { useState, useEffect } from 'react';

export default function FlightDetailsPage({ params }) {
  const { flightId } = params;
  const [flightDetails, setFlightDetails] = useState(null);

  useEffect(() => {
    const fetchFlightDetails = async () => {
      const response = await fetch(`/api/flights/${flightId}`);
      const data = await response.json();
      setFlightDetails(data);
    };
    fetchFlightDetails();
  }, [flightId]);

  if (!flightDetails) return <div>Loading...</div>;

  return (
    <div>
      <h1>جزئیات پرواز</h1>
      <p>از: {flightDetails.from_location}</p>
      <p>به: {flightDetails.to_location}</p>
      <p>قیمت: {flightDetails.price}</p>
      {/* اطلاعات دیگر پرواز */}
    </div>
  );
}
