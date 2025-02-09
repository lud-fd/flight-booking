export async function handler(req, res) {
  const { origin, destination } = req.query;

  if (!origin || !destination) {
    return res.status(400).json({ error: 'Origin and destination are required' });
  }

  // Sample flight data
  const flights = [
    { id: '1', origin: 'New York', destination: 'London', price: '500' },
    { id: '2', origin: 'Berlin', destination: 'Paris', price: '150' },
  ];

  // Filter based on query
  const result = flights.filter(
    flight => flight.origin === origin && flight.destination === destination
  );

  res.status(200).json(result);
}

