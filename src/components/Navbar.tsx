import React from 'react';
import { ShoppingCart, Library, UserCircle2 } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="bg-gray-900 text-white p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-2xl font-bold">GameStore</a>
        <div className="flex gap-6">
          <a href="/library" className="flex items-center gap-2 hover:text-gray-300">
            <Library size={24} />
            <span>Library</span>
          </a>
          <a href="/cart" className="flex items-center gap-2 hover:text-gray-300">
            <ShoppingCart size={24} />
            <span>Cart</span>
          </a>
          <a href="/login" className="flex items-center gap-2 hover:text-gray-300">
            <UserCircle2 size={24} />
            <span>Login</span>
          </a>
        </div>
      </div>
    </nav>
  );
}