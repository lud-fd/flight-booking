import React, { useState } from 'react';

export default function SearchBar() {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');

  const handleSearch = () => {
    console.log('Searching for flights from', origin, 'to', destination);
  };

  return (
    <div className="flex justify-center space-x-4 py-8">
      <input
        type="text"
        value={origin}
        onChange={(e) => setOrigin(e.target.value)}
        placeholder="Origin"
        className="p-2 rounded-md border"
      />
      <input
        type="text"
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
        placeholder="Destination"
        className="p-2 rounded-md border"
      />
      <button
        onClick={handleSearch}
        className="bg-blue-500 text-white py-2 px-4 rounded-md"
      >
        Search
      </button>
    </div>
  );
}

