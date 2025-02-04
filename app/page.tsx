import SearchBar from '@/components/SearchBar';
import FlightCard from '@/components/FlightCard';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <h1 className="text-4xl text-center py-8">Welcome to Our Flight Booking Website</h1>
      <SearchBar />
      <div className="flex flex-wrap justify-center">
        <FlightCard />
        <FlightCard />
        <FlightCard />
      </div>
    </div>
  );
}
