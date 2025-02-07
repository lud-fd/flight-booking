const Navbar = () => (
  <nav className="flex justify-between p-4 bg-gray-800 text-white">
    <a href="/" className="font-bold">Home</a>
    <div>
      <a href="/about" className="mr-4">About</a>
      <a href="/flights">Flights</a>
    </div>
  </nav>
);

export default Navbar;


