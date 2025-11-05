import React from 'react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import squad from '../assets/away.webp';
import { Link } from 'react-router-dom';

const SquadBrugesArticle: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col">
            <Header />
            <main className="container mx-auto p-4 flex-grow">
                <div className="max-w-3xl mx-auto bg-white rounded-lg shadow overflow-hidden">
                    <img src={squad} alt="Squad for Bruges" className="w-full h-auto object-cover" />
                    <div className="p-6">
                        <h1 className="text-3xl font-bold text-barcelonaBlue mb-2">Squad for the trip to Bruges</h1>
                        <div className="text-sm text-gray-500 mb-4">fcbarcelona.com — 09:00pm Tuesday 04 Nov</div>

                        <p className="text-gray-700 mb-4">
                            Hansi Flick names his players for the Champions League clash in Belgium against Club Brugge.
                        </p>

                        <p className="text-gray-700 mb-4">
                            The Champions League returns on Wednesday with a game for Barça away at Club Brugge on Match day four of the league phase of the competition. In Belgium the blaugranes will be looking for their third win in four matches in Europe so far this season.
                        </p>

                        <p className="text-gray-700 mb-4">
                            The game will take place in the Jan Breydal stadium and the squad leaves for Bruges following their final training session ahead of the game which took place on Tuesday morning local time at the Ciutat Esportiva Joan Gamper.
                        </p>

                        <h2 className="text-xl font-semibold text-gray-800 mt-4 mb-2">Squad named</h2>
                        <p className="text-gray-700 mb-4">
                            Coach Hansi Flick has named the following players in his squad for the Champions League game: Szczesny, Kochen, Eder Aller, Balde, R. Araujo, Cubarsí, Gerard Martín, Kounde, Eric, Xavi Espart, Fermín, M. Casadó, Olmo, F. De Jong, Bernal, Dro, Ferran, Lewandowski, Lamine Yamal, Rashford and Roony.
                        </p>

                        <h2 className="text-xl font-semibold text-gray-800 mt-4 mb-2">Final session in Barcelona</h2>
                        <p className="text-gray-700 mb-4">
                            The first 15 minutes of Tuesday's training session were open to the media with all the players in the squad involved as well as Andreas Christensen who completed part of the workout with his teammates.
                        </p>

                       
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default SquadBrugesArticle;
