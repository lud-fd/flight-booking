import Navbar from "../components/Navbar";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <div className="p-4">
        <h1 className="text-3xl font-bold">Welcome to the Flight Booking Website</h1>
        <p>Search and book your flights from here.</p>
      </div>
    </div>
  );
};

export default HomePage;

