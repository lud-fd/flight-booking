'use client'

export default function FlightCard({ flight }) {
  const { from_location = 'Unknown', to_location = 'Unknown', price = 'N/A', airline = 'Unknown' } = flight || {};

  return (
    <div className="flight-card">
      <h2>{`${from_location} to ${to_location}`}</h2>
      <p>Price: {price}</p>
      <p>Airline: {airline}</p>
      <button>Book Now</button>
    </div>
  );
}






