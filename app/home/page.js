'use client'
import FlightCard from '@/components/FlightCard';

export default async function Home() {
  const res = await fetch('http://localhost:3000/api/flights');
  const flights = await res.json();

  console.log(flights); // چاپ داده‌ها برای بررسی

  return (
    <div>
      <h1 className="text-4xl text-center py-8">Flight Search Results</h1>
      <div className="flex flex-wrap justify-center">
        {flights.length > 0 ? (
          flights.map((flight) => (
            <FlightCard key={flight.id} flight={flight} />
          ))
        ) : (
          <p>No flights found.</p>
        )}
      </div>
    </div>
  );
}
