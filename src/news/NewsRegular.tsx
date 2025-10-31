import React from 'react';
import NewsList from './NewsList';
import Header from '../layout/Header';
import Footer from '../layout/Footer';

const NewsRegular: React.FC = () => {
    const regularNews = [
        { id: 1, title: 'Regular News 1', description: 'This is the first regular news for all users.', image: 'https://via.placeholder.com/300/0000FF/FFFFFF?text=Regular+1' },
        { id: 2, title: 'Regular News 2', description: 'This is the second regular news for all users.', image: 'https://via.placeholder.com/300/FF0000/FFFFFF?text=Regular+2' },
        { id: 3, title: 'Regular News 3', description: 'This is the third regular news for all users.', image: 'https://via.placeholder.com/300/0000FF/FFFFFF?text=Regular+3' },
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