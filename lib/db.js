import mysql from 'mysql2';

// تنظیمات اتصال به پایگاه داده
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root', // نام کاربری MySQL خود را وارد کنید
  password: '', // رمز عبور خود را وارد کنید
  database: 'flight_booking', // نام پایگاه داده
});

// اتصال به پایگاه داده
connection.connect((err) => {
  if (err) {
    console.error('خطا در اتصال به پایگاه داده: ', err);
  } else {
    console.log('اتصال به پایگاه داده موفقیت‌آمیز بود');
  }
});

export default connection;


