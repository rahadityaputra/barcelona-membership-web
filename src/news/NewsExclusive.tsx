import React from 'react';
import NewsList from './NewsList';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import hasil from '../assets/hasil.webp';
import yamal from '../assets/yamal.webp';
import meet from '../assets/meet.webp';

const NewsExclusive: React.FC = () => {
    const exclusiveNews = [
        { id: 1, title: 'Matchday Highlights', description: 'Relive the best moments from last night.', image: hasil },
        { id: 2, title: 'Exclusive Interview', description: 'An interview with the captain.', image: yamal },
        { id: 3, title: 'Members Meet-up', description: 'Join the next fan meetup in your city.', image: meet },
    ];

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col">
            <Header />
            <main className="container mx-auto p-4 flex-grow">
                <h1 className="text-3xl font-bold text-barcelonaBlue mb-6">Exclusive News</h1>
                <NewsList news={exclusiveNews} />
            </main>
            <Footer />
        </div>
    );
};

export default NewsExclusive;