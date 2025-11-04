import React from 'react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import squadImg from '../assets/squad.webp';

const squad = [
    { id: 1, name: 'Marc-André ter Stegen', position: 'Player' },
    { id: 3, name: 'Balde', position: 'Player' },
    { id: 4, name: 'R. Araujo', position: 'Player' },
        { id: 13, name: 'Joan García', position: 'Goalkeeper' },
        { id: 1, name: 'Marc-André ter Stegen', position: 'Goalkeeper' },
        { id: 25, name: 'Wojciech Szczęsny', position: 'Goalkeeper' },
        { id: 5, name: 'Pau Cubarsí', position: 'Centre-Back' },
        { id: 4, name: 'Ronald Araujo', position: 'Centre-Back' },
        { id: 24, name: 'Eric García', position: 'Centre-Back' },
        { id: 15, name: 'Andreas Christensen', position: 'Centre-Back' },
        { id: 3, name: 'Alejandro Balde', position: 'Left-Back' },
        { id: 18, name: 'Gerard Martín', position: 'Left-Back' },
        { id: 23, name: 'Jules Koundé', position: 'Right-Back' },
        { id: 17, name: 'Marc Casadó', position: 'Defensive Midfield' },
        { id: 22, name: 'Marc Bernal', position: 'Defensive Midfield' },
        { id: 8, name: 'Pedri', position: 'Central Midfield' },
        { id: 21, name: 'Frenkie de Jong', position: 'Central Midfield' },
        { id: 6, name: 'Gavi', position: 'Central Midfield' },
        { id: 16, name: 'Fermín López', position: 'Attacking Midfield' },
        { id: 20, name: 'Dani Olmo', position: 'Attacking Midfield' },
        { id: 11, name: 'Raphinha', position: 'Left Winger' },
        { id: 14, name: 'Marcus Rashford', position: 'Left Winger' },
        { id: 10, name: 'Lamine Yamal', position: 'Right Winger' },
        { id: 28, name: 'Roony Bardghji', position: 'Right Winger' },
        { id: 7, name: 'Ferran Torres', position: 'Centre-Forward' },
        { id: 9, name: 'Robert Lewandowski', position: 'Centre-Forward' },
];

const Squad: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col">
            <Header />

            {/* Hero: full-width squad photo with an overlaid title card (like Dashboard) */}
            <section className="relative">
                <div className="w-full">
                    <img src={squadImg} alt="squad" className="w-full h-auto block" />
                </div>
                <div className="absolute left-0 right-0 bottom-0 flex justify-center pointer-events-none" style={{ transform: 'translateY(calc(50% + 20px))' }}>
                    <div className="container mx-auto px-4">
                        <div className="bg-white bg-opacity-90 backdrop-blur rounded-2xl shadow-xl p-6 md:p-10 pointer-events-auto">
                            <h1 className="text-2xl md:text-4xl font-bold text-[#03204a]">Barcelona Squad</h1>
                            <p className="mt-2 text-gray-700">Meet the current first-team squad.</p>
                        </div>
                    </div>
                </div>
                <div className="pb-24 md:pb-32" />
            </section>

            <main className="container mx-auto p-4 flex-grow mt-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {squad.map(player => (
                            <div key={player.id} className="bg-white rounded-lg shadow p-4 flex items-center space-x-4">
                                <div className="h-12 w-12 rounded-full bg-barcelonaBlue text-white flex items-center justify-center font-semibold">{player.id}</div>
                                <div>
                                    <div className="font-semibold">{player.name}</div>
                                    <div className="text-sm text-gray-500">{player.position}</div>
                                </div>
                            </div>
                        ))}
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Squad;
