import SearchBar from "../../components/SearchBar";
import FlightCard from "../../components/FlightCard";

const FlightsPage = () => (
  <div className="p-4">
    <SearchBar />
    <div className="grid grid-cols-3 gap-4 mt-4">
      <FlightCard />
      <FlightCard />
      <FlightCard />
    </div>
  </div>
);

export default FlightsPage;



