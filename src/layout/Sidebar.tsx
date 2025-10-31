import React from 'react';

const Sidebar: React.FC = () => {
    return (
        <aside className="w-64 bg-gray-800 text-white p-4 space-y-4">
            <h2 className="text-xl font-bold">Menu</h2>
            <nav>
                <ul className="space-y-2">
                    <li><a href="/dashboard" className="block hover:bg-gray-700 p-2 rounded">Dashboard</a></li>
                    <li><a href="/profile" className="block hover:bg-gray-700 p-2 rounded">Profile</a></li>
                    <li><a href="/membership-card" className="block hover:bg-gray-700 p-2 rounded">Membership Card</a></li>
                    <li><a href="/exclusive-news" className="block hover:bg-gray-700 p-2 rounded">Exclusive News</a></li>
                    <li><a href="/regular-news" className="block hover:bg-gray-700 p-2 rounded">Regular News</a></li>
                    <li><a href="/logout" className="block hover:bg-gray-700 p-2 rounded">Logout</a></li>
                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;