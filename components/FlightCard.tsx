import React from 'react';

export default function FlightCard({ flight }) {
  return (
    <div className="border p-4 rounded-md shadow-md">
      <h2 className="text-xl font-semibold">{flight.origin} to {flight.destination}</h2>
      <p className="text-lg text-gray-600">Price: ${flight.price}</p>
    </div>
  );
}

