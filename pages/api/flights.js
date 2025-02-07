import { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { query } = req.query;

  const response = await fetch(`https://api.amadeus.com/v2/shopping/flight-offers?origin=NYC&destination=LON`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${process.env.AMADEUS_API_KEY}`
    }
  });

  const data = await response.json();
  res.status(200).json(data);
};

