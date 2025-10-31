import React from 'react';
import NewsList from './NewsList';
import Header from '../layout/Header';
import Footer from '../layout/Footer';

const NewsExclusive: React.FC = () => {
    const exclusiveNews = [
        { id: 1, title: 'Exclusive News 1', description: 'This is the first exclusive news for premium members.', image: 'https://via.placeholder.com/300/FF0000/FFFFFF?text=Exclusive+1' },
        { id: 2, title: 'Exclusive News 2', description: 'This is the second exclusive news for premium members.', image: 'https://via.placeholder.com/300/0000FF/FFFFFF?text=Exclusive+2' },
        { id: 3, title: 'Exclusive News 3', description: 'This is the third exclusive news for premium members.', image: 'https://via.placeholder.com/300/FF0000/FFFFFF?text=Exclusive+3' },
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