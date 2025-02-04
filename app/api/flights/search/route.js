import connection from '../../../lib/db';

export async function GET(req) {
  const { searchParams } = new URL(req.url);

  const from = searchParams.get('from');
  const to = searchParams.get('to');
  const date = searchParams.get('date');
  const priceMin = searchParams.get('priceMin');
  const priceMax = searchParams.get('priceMax');
  const airline = searchParams.get('airline');

  let query = 'SELECT * FROM flights WHERE 1=1';

  if (from) query += ` AND from_location LIKE '%${from}%'`;
  if (to) query += ` AND to_location LIKE '%${to}%'`;
  if (date) query += ` AND departure_date = '${date}'`;
  if (priceMin) query += ` AND price >= ${priceMin}`;
  if (priceMax) query += ` AND price <= ${priceMax}`;
  if (airline) query += ` AND airline LIKE '%${airline}%'`;

  return new Promise((resolve, reject) => {
    connection.query(query, (err, results) => {
      if (err) {
        return reject(new Error('خطا در دریافت پروازها'));
      }
      resolve(new Response(JSON.stringify(results), { status: 200 }));
    });
  });
}



