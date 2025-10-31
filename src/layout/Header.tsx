import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="bg-barcelonaBlue text-white p-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-bold">FC Barcelona Fan Club</h1>
                <nav>
                    <ul className="flex space-x-4">
                        <li><a href="/dashboard" className="hover:text-barcelonaGold">Dashboard</a></li>
                        <li><a href="/profile" className="hover:text-barcelonaGold">Profile</a></li>
                        <li><a href="/membership-card" className="hover:text-barcelonaGold">Membership Card</a></li>
                        <li><a href="/exclusive-news" className="hover:text-barcelonaGold">Exclusive News</a></li>
                        <li><a href="/regular-news" className="hover:text-barcelonaGold">Regular News</a></li>
                        <li><a href="/logout" className="hover:text-barcelonaGold">Logout</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;