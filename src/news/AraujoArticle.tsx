import React from 'react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import araujo from '../assets/araujo.webp';
import { Link } from 'react-router-dom';

const AraujoArticle: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col">
            <Header />
            <main className="container mx-auto p-4 flex-grow">
                <div className="max-w-3xl mx-auto bg-white rounded-lg shadow overflow-hidden">
                    <img src={araujo} alt="Ronald Araujo" className="w-full h-auto object-cover" />
                    <div className="p-6">
                        <h1 className="text-3xl font-bold text-barcelonaBlue mb-2">Araujo makes the top 10 list</h1>
                        <div className="text-sm text-gray-500 mb-4">By FC Barcelona — 1 November 2025</div>

                        <p className="text-gray-700 mb-4">
                            Ronald Araujo is writing himself into the Barça history books. On Sunday against Elche the centre back
                            equalled 186 appearances made by Brazilian forward Neymar to enter the top ten of a list of players from the
                            Americas led by Leo Messi and also containing names such as Ronaldinho, Rivaldo and Luis Suárez.
                        </p>

                        <h2 className="text-xl font-semibold text-gray-800 mt-4 mb-2">Leo Messi, runaway leader</h2>
                        <p className="text-gray-700 mb-4">
                            For players from the Americas, the list is led by Leo Messi on 778 appearances, way ahead of second placed
                            Dani Alves on 408 and third placed Javier Mascherano on 334 appearances. With his appearance against Elche,
                            Araujo now moves into the top 10 level with Brazilian Neymar.
                        </p>

                        <p className="text-gray-700 mb-4">
                            Ronald Araujo made his Barça debut on 6 October 2019 against Sevilla in a game that ended with a red card
                            three minutes from time for the Uruguayan. Since that day the defender has made 186 official appearances in
                            seven seasons, moving into an illustrious top 10 of players from North, Central and South America at Barça.
                        </p>

                        <h2 className="text-xl font-semibold text-gray-800 mt-4 mb-2">Third on list of Uruguayans</h2>
                        <p className="text-gray-700 mb-4">
                            In terms of Uruguayans, Araujo finds himself in third place on the list of all-time appearances with only
                            legends Luis Suárez (283 matches) and Ramon Alberto Villaverde (224 matches) ahead of him.
                        </p>

                        
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default AraujoArticle;
