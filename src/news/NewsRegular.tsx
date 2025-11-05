import React from 'react';
import NewsList from './NewsList';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import araujo from '../assets/araujo.webp';
import profile from '../assets/rashford.webp';
import hasil from '../assets/hasil.webp';

const NewsRegular: React.FC = () => {
    const regularNews = [
    { id: 101, title: 'Araujo makes the top 10 list', description: 'Araujo reaches 186 appearances for the club.', image: araujo, link: '/news/araujo' },
    { id: 102, title: 'Marcus Rashford means goals', description: 'With his goal against Elche, the English forward now has six goals and five assists for Barça this season.', image: profile, link: '/news/rashford' },
    { id: 103, title: 'Matchday Highlights', description: 'Barça 3-1 Elche: Back on track', image: hasil, link: '/news/match-elche' },

    ];

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col">
            <Header />
            <main className="container mx-auto p-4 flex-grow">
                <h1 className="text-3xl font-bold text-barcelonaBlue mb-6">Regular News</h1>
                <NewsList news={regularNews} />
            </main>
            <Footer />
        </div>
    );
};

export default NewsRegular;