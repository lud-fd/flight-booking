import React from 'react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <ul className="flex space-x-4">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/flights">Flights</Link></li>
        <li><Link href="/checkout">Checkout</Link></li>
      </ul>
    </nav>
  );
}
