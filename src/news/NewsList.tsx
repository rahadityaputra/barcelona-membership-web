import React from 'react';
import NewsCard from './NewsCard';

interface NewsItem {
    id: number;
    title: string;
    description: string;
    image: string;
}

interface NewsListProps {
    news: NewsItem[];
}

const NewsList: React.FC<NewsListProps> = ({ news }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {news.map((item) => (
                <NewsCard key={item.id} title={item.title} description={item.description} image={item.image} />
            ))}
        </div>
    );
};

export default NewsList;