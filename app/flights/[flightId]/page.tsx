import React from 'react';
import { useRouter } from 'next/router';

export default function FlightDetails() {
  const router = useRouter();
  const { flightId } = router.query;

  return (
    <div className="max-w-4xl mx-auto py-16">
      <h1 className="text-3xl font-bold text-center mb-4">Flight Details for {flightId}</h1>
      <p className="text-lg text-gray-700">Details for flight {flightId} will be shown here.</p>
    </div>
  );
}
