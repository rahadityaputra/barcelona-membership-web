import React from 'react';

interface NewsCardProps {
    title: string;
    description: string;
    image: string;
}

const NewsCard: React.FC<NewsCardProps> = ({ title, description, image }) => {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
            {/* Larger, responsive image height: mobile -> 16rem (256px), md -> 20rem (320px) */}
            <img src={image} alt={title} className="w-full h-64 md:h-80 lg:h-96 object-cover" />
            <div className="p-4">
                <h3 className="text-xl font-semibold text-barcelonaBlue mb-2">{title}</h3>
                <p className="text-gray-700">{description}</p>
            </div>
        </div>
    );
};

export default NewsCard;