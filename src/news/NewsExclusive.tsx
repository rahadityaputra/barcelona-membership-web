import React from 'react';
import NewsList from './NewsList';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import away from '../assets/away.webp';
import youngster from '../assets/youngster.webp';
import squad from '../assets/squad.webp';
const NewsExclusive: React.FC = () => {
    const exclusiveNews = [
    { id: 4, title: 'Life experience', description: 'Two young men from the Barça Academy Residency Arizona train in Barcelona.', image: youngster, link: '/news/life-experience' },
    { id: 5, title: 'Squad for the trip to Bruges', description: 'Hansi Flick names his players for the Champions League clash in Belgium against Club Brugge.', image: away, link: '/news/squad-bruges' },
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