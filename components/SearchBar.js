const SearchBar = () => (
  <div className="flex items-center space-x-2">
    <input
      type="text"
      className="p-2 border"
      placeholder="Enter destination or flight details..."
    />
    <button className="p-2 bg-blue-500 text-white">Search</button>
  </div>
);

export default SearchBar;



