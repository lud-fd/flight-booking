'use client';

import { useState } from 'react';
import FlightCard from '@/components/FlightCard';

export default function Flights() {
  const [fromLocation, setFromLocation] = useState('');
  const [toLocation, setToLocation] = useState('');
  const [date, setDate] = useState('');
  const [priceRange, setPriceRange] = useState('');
  const [airline, setAirline] = useState('');
  const [flights, setFlights] = useState([]);

  const handleSearch = async () => {
    const res = await fetch(
      `/api/flights?from_location=${fromLocation}&to_location=${toLocation}&date=${date}&price_range=${priceRange}&airline=${airline}`
    );
    const data = await res.json();
    setFlights(data);
  };

  return (
    <div>
      <h1 className="text-4xl text-center py-8">Search Flights</h1>
      <div className="form">
        <input
          type="text"
          placeholder="From"
          value={fromLocation}
          onChange={(e) => setFromLocation(e.target.value)}
        />
        <input
          type="text"
          placeholder="To"
          value={toLocation}
          onChange={(e) => setToLocation(e.target.value)}
        />
        <input
          type="text"
          placeholder="mm/dd/yyyy"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <input
          type="text"
          placeholder="Price Range"
          value={priceRange}
          onChange={(e) => setPriceRange(e.target.value)}
        />
        <input
          type="text"
          placeholder="Airline"
          value={airline}
          onChange={(e) => setAirline(e.target.value)}
        />
        <button onClick={handleSearch}>Search Flights</button>
      </div>

      <div className="results">
        {flights.map((flight) => (
          <FlightCard key={flight.id} flight={flight} />
        ))}
      </div>
    </div>
  );
}

