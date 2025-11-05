import React from 'react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import fans from '../assets/youngster.webp';
import { Link } from 'react-router-dom';

const LifeExperienceArticle: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col">
            <Header />
            <main className="container mx-auto p-4 flex-grow">
                <div className="max-w-3xl mx-auto bg-white rounded-lg shadow overflow-hidden">
                    <img src={fans} alt="Barça Academy Residency Arizona" className="w-full h-auto object-cover" />
                    <div className="p-6">
                        <h1 className="text-3xl font-bold text-barcelonaBlue mb-2">Life experience</h1>
                        <div className="text-sm text-gray-500 mb-4">Two young men from the Barça Academy Residency Arizona train in Barcelona — 07:10pm Monday 03 Nov</div>

                        <p className="text-gray-700 mb-4">
                            As is the norm during this time of the year, two players from the Barça Academy Residency Arizona have spent 10 days in Barcelona in order to assess their level and development. As such, Ezra Vancleave and Juda Casas have been training with the U16s and U18s respectively in the blaugrana youth development system. Both young men were chosen jointly by coaches in Arizona and Barcelona after assessing their performance and attitude throughout the season.
                        </p>

                        <p className="text-gray-700 mb-4">
                            This wasn't just a sporting experience though. As the Clásico was on while they were here, they both watched the game live at a blaugrana supporters' club, namely the Penya Barcelonista l'Avenç, where they got first-hand experience of the blaugrana passion while watching the game. They also were in attendance for the 2-2 draw between Barça Atlètic and Poblense at Estadi Johan Cruyff, and for the opening UEFA Youth League match between the U19s and Olympiacos, which the blaugranes won 3-0.
                        </p>

                        <p className="text-gray-700 mb-4">
                            Their time in Barcelona also included a visit to the Barça Museum, where they could wonder at the over 125 years of Club history and see how the blaugranes have fared over time. This initiative creates closer ties between the Barça Academy Residency Arizona and blaugrana youth football, as well as helping the players continue to develop both as a footballer and as an individual.
                        </p>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default LifeExperienceArticle;
