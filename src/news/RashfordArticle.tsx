import React from 'react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import rashford from '../assets/rashford.webp';
import { Link } from 'react-router-dom';

const RashfordArticle: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col">
            <Header />
            <main className="container mx-auto p-4 flex-grow">
                <div className="max-w-3xl mx-auto bg-white rounded-lg shadow overflow-hidden">
                    <img src={rashford} alt="Marcus Rashford" className="w-full h-auto object-cover" />
                    <div className="p-6">
                        <h1 className="text-3xl font-bold text-barcelonaBlue mb-2">Marcus Rashford means goals</h1>
                        <div className="text-sm text-gray-500 mb-4">fcbarcelona.com — 05:55pm Monday 03 Nov</div>

                        <p className="text-gray-700 mb-4">
                            It is time to say that Marcus Rashford is settling in nicely at FC Barcelona. Since his arrival the English forward
                            has put in some impressive performances that are backed up by the statistics: six goals and five assists in all competitions.
                            His latest effort came on Sunday in the 3-1 win against Elche in La Liga, the England international scoring the third in the
                            victory to make it 11 goal involvements this season so far, more than anyone else in the squad.
                        </p>

                        <h2 className="text-xl font-semibold text-gray-800 mt-4 mb-2">Newcastle, starting point</h2>
                        <p className="text-gray-700 mb-4">
                            The Barça number 14 has figured in 14 games so far this season for the blaugranes. After finding his feet in his first few
                            appearances in a Barça shirt, he opened his account in the Champions League against Newcastle United, scoring twice against
                            the Premier League club at St. James' Park.
                        </p>

                        <p className="text-gray-700 mb-4">
                            Since his brace in England, Rashford has become a vital part of the Barça goalscoring machine with eight goal involvements
                            in his last 11 appearances. The man from Manchester provided assists in the games against Valencia, Oviedo, Real Sociedad,
                            PSG and Real Madrid as well as scoring against Sevilla and adding two more against Olympiacos to add to his goals against
                            Newcastle and Elche.
                        </p>

                        <h2 className="text-xl font-semibold text-gray-800 mt-4 mb-2">Top contributor</h2>
                        <p className="text-gray-700 mb-4">
                            Rashford is joint top scorer for Barça this season alongside Fermín López and Ferran Torres and also leads the team for assists
                            alongside Lamine Yamal on five. Looking at Europe's top five leagues he is one of just six players who have scored five goals or
                            more and provided five assists or more alongside Michael Olise (Bayern Munich), Julián Álvarez (Atlético Madrid), Luis Díaz (Bayern Munich),
                            Vinícius Júnior (Real Madrid) and Kenan Yildiz (Juventus).
                        </p>

                        
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default RashfordArticle;
