'use client';

import { useState } from 'react';

export default function SearchBar() {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [date, setDate] = useState('');
  const [price, setPrice] = useState('');
  const [airline, setAirline] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Searching for flights:', { from, to, date, price, airline });
  };

  return (
    <div className="p-4 bg-gray-200 rounded-lg max-w-lg mx-auto mt-8">
      <h2 className="text-xl font-semibold mb-4">Search Flights</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="From"
          value={from}
          onChange={(e) => setFrom(e.target.value)}
          className="p-2 rounded border w-full mb-4"
        />
        <input
          type="text"
          placeholder="To"
          value={to}
          onChange={(e) => setTo(e.target.value)}
          className="p-2 rounded border w-full mb-4"
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="p-2 rounded border w-full mb-4"
        />
        <select
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="p-2 rounded border w-full mb-4"
        >
          <option value="">Price Range</option>
          <option value="low">Low Price</option>
          <option value="medium">Medium Price</option>
          <option value="high">High Price</option>
        </select>
        <select
          value={airline}
          onChange={(e) => setAirline(e.target.value)}
          className="p-2 rounded border w-full mb-4"
        >
          <option value="">Select Airline</option>
          <option value="airline1">Airline 1</option>
          <option value="airline2">Airline 2</option>
          <option value="airline3">Airline 3</option>
        </select>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-lg w-full"
        >
          Search Flights
        </button>
      </form>
    </div>
  );
}


