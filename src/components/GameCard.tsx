import React from 'react';
import { ShoppingCart } from 'lucide-react';

interface GameCardProps {
  title: string;
  price: number;
  imageUrl: string;
  description: string;
}

export function GameCard({ title, price, imageUrl, description }: GameCardProps) {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-400 mb-4 h-20">{description}</p>
        <div className="flex justify-between items-center">
          <span className="text-green-500 font-bold">{price} Kč</span>
          <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center gap-2">
            <ShoppingCart size={20} />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}