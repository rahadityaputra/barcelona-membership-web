import React from 'react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import hasil from '../assets/elche.webp';
import { Link } from 'react-router-dom';

const MatchElcheArticle: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col">
            <Header />
            <main className="container mx-auto p-4 flex-grow">
                <div className="max-w-4xl mx-auto bg-white rounded-lg shadow overflow-hidden">
                    <img src={hasil} alt="Barça 3-1 Elche" className="w-full h-auto object-cover" />
                    <div className="p-6">
                        <h1 className="text-3xl font-bold text-barcelonaBlue mb-2">Barca 3-1 Elche: Back on track</h1>
                        <div className="text-sm text-gray-500 mb-4">fcbarcelona.com — 02:30am Monday 03 Nov</div>

                        <p className="text-gray-700 mb-4">
                            Lamine Yamal, Ferran and Rashford score the goals as the blaugranes return to winning ways in LaLiga. Back to winning ways for Barça with this 3-1 victory against Elche at the Estadi Olímpic Lluís Companys.
                        </p>

                        <p className="text-gray-700 mb-4">
                            Lamine Yamal, Ferran and Rashford scored the goals against a courageous Elche side who had their own chances, with only Rafa Mir managing to beat Szczesny.
                        </p>

                        <p className="text-gray-700 mb-4">
                            The victory makes it now eight wins in the domestic competition and the blaugranes move back to within five points of leaders Real Madrid. Next up in LaLiga, the team will head to Vigo (9 November 9.00pm CET) in the hunt for another three points after the midweek Champions League game against Club Brugge.
                        </p>

                        <h2 className="text-xl font-semibold text-gray-800 mt-4 mb-2">Effective start</h2>
                        <p className="text-gray-700 mb-4">
                            It wasn't made easy for Barça during an open first half with chances at both ends, but Hansi Flick's side went in ahead at the break, albeit knowing they couldn't rest on their laurels.
                        </p>

                        <p className="text-gray-700 mb-4">
                            Elche began the game on the attack and came to play without fear. However, the blaugranes were wanting to get the Clásico loss out of the system early and made the most of their opponents' approach to do their own damage early on in the game. Soon after, Balde strode forward with the ball from the left and his pass across the top of the box was met by Lamine Yamal, who took one touch inside and shot past Iñaki Peña (1-0, min 9).
                        </p>

                        <p className="text-gray-700 mb-4">
                            There was another goal to come and it came soon, as Fermín carried the ball close to the byeline before crossing from the left for Ferran Torres to guide the ball in to score his 50th goal for Barça (2-0, min 11).
                        </p>

                        <p className="text-gray-700 mb-4">
                            Somewhat shellshocked, Elche continued to plug away, but it was Barça who created the best chances, with Rashford, Fermín, Lamine Yamal, Casadó and Ferran all going close. However, the visitors would get a goal for their efforts, after a quick pass released Rafa Mir from his own half and the forward curled in a right footed effort inside the right post from the left to halve the lead by halftime (2-1, min 41).
                        </p>

                        <h2 className="text-xl font-semibold text-gray-800 mt-4 mb-2">Rashford extends lead</h2>
                        <p className="text-gray-700 mb-4">
                            The difficult period continued for the blaugranes after the restart as Elche kept up the pressure on Szczesny's goal, with another curler from the left by Rafa Mir hitting the bar (min 50).
                        </p>

                        <p className="text-gray-700 mb-4">
                            Luckily, Hansi Flick's side managed to weather the storm and after a tremendous cross field pass from the right to left by Fermín, Rashford held off his marker to finish past Iñaki Peña high into the net with a left footed shot to restore the two goal cushion (3-1, min 61).
                        </p>

                        <p className="text-gray-700 mb-4">
                            Elche kept going though, and Rafa Mir once again hit the woodwork, this time the post, while Barça were looking to score another at will.
                        </p>

                        <h2 className="text-xl font-semibold text-gray-800 mt-4 mb-2">Olmo and Lewandowski return</h2>
                        <p className="text-gray-700 mb-4">
                            Hansi Flick made the most of the two goal lead to bring on Dani Olmo (min 66) and Robert Lewandowski (min 74) to get some valuable minutes in the legs as the match wound down after being played at such a frenetic pace throughout, it really was the proverbial end-to-end match at times.
                        </p>

                        <p className="text-gray-700 mb-4">
                            Final score 3-1 and a victory that sees Barça back on track in LaLiga. Next up, a trip to play Club Brugge in the Champions League (5 November 9.00pm CEST).
                        </p>

                        
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default MatchElcheArticle;
