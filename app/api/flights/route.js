import mysql from 'mysql2';

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'flight_booking',
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
  } else {
    console.log('Connected to the MySQL database.');
  }
});

export async function GET(req) {
  const { from_location, to_location, date, price_range, airline } = req.query;

  return new Promise((resolve, reject) => {
    let query = 'SELECT * FROM flights WHERE 1=1';
    if (from_location) query += ` AND from_location LIKE '%${from_location}%'`;
    if (to_location) query += ` AND to_location LIKE '%${to_location}%'`;
    if (date) query += ` AND date LIKE '%${date}%'`;
    if (price_range) query += ` AND price <= ${price_range}`;
    if (airline) query += ` AND airline LIKE '%${airline}%'`;

    db.query(query, (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(new Response(JSON.stringify(results), { status: 200 }));
      }
    });
  });
}






