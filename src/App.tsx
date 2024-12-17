import React from 'react';
import { Navbar } from './components/Navbar';
import { GameCard } from './components/GameCard';
import { games } from './data/games';

function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-white mb-8">Featured Games</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {games.map((game) => (
            <GameCard
              key={game.id}
              title={game.title}
              price={game.price}
              imageUrl={game.imageUrl}
              description={game.description}
            />
          ))}
        </div>
      </main>
      <footer className="bg-gray-800 text-gray-400 py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 GameStore. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;