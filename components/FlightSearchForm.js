import { useState } from 'react';
import axios from 'axios';

export default function FlightSearchForm() {
  const [formData, setFormData] = useState({
    from: '',
    to: '',
    date: '',
    priceMin: '',
    priceMax: '',
    airline: ''
  });
  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(false);
	
  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.get('/api/flights/search', {
        params: formData
      });
      setFlights(response.data); // ذخیره داده‌ها در state
      setLoading(false); // به حالت بارگذاری خاتمه می‌دهیم
    } catch (error) {
      console.error('خطا در جستجو:', error);
      setLoading(false);
    }
  };

  return (
    <div className="bg-gradient-to-r from-blue-500 to-blue-800 text-white py-20 px-4">
      <h1 className="text-4xl font-semibold text-center mb-8">Book Flights with Best Airlines</h1>
      <form onSubmit={handleSearch} className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-xl">
        {/* فیلدهای فرم */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* فیلدهای ورودی فرم */}
          {/* از مقادیر فرم برای جستجو استفاده می‌شود */}
        </div>

        {/* دکمه جستجو */}
        <button type="submit" className="w-full p-4 bg-red-600 text-white rounded-lg hover:bg-red-700">
          Search Flights
        </button>
      </form>

      {/* نمایش نتایج جستجو */}
      {loading ? (
        <div className="text-center mt-8">در حال بارگذاری...</div>
      ) : (
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {flights.length > 0 ? (
            flights.map((flight) => (
              <FlightCard key={flight.id} flight={flight} />
            ))
          ) : (
            <div>پروازهایی برای نمایش یافت نشد.</div>
          )}
        </div>
      )}
    </div>
  );
}







