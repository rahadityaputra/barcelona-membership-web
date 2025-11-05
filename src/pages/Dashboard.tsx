import React from 'react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import NewsCard from '../news/NewsCard';
import { Link } from 'react-router-dom';
import squad from '../assets/squad.webp';
import atas from '../assets/atas.webp';
import yamal from '../assets/yamal.webp';
import profile from '../assets/profile.webp';
import meet from '../assets/meet.webp';
const sampleNews = [
    { title: 'Squad', description: 'Meet the squad of our army', image: squad },
    { title: 'Exclusive Interview', description: 'An interview with the starboy.', image: yamal },
    { title: 'Members Meet-up', description: 'Join the next fan meetup in your city.', image: meet },
];

const Dashboard: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <Header />

            {/* Hero: use an <img> that fills the page width and position an absolute overlay so the image isn't shifted or cropped */}
            <section className="relative">
                <div className="w-full">
                    <img src={atas} alt="hero" className="w-full h-auto block" />
                </div>
                {/* absolute overlay centered at bottom of image to avoid moving the image itself */}
                <div className="absolute left-0 right-0 bottom-0 flex justify-center pointer-events-none" style={{ transform: 'translateY(calc(50% + 8px))' }}>
                    <div className="container mx-auto px-4">
                        <div className="bg-white bg-opacity-90 backdrop-blur rounded-2xl shadow-xl p-6 md:p-10 flex flex-col md:flex-row items-center pointer-events-auto">
                            <img src={profile} alt="logo" className="h-20 w-20 md:h-28 md:w-28 rounded-full border-4 border-white shadow-md object-cover" />
                            <div className="ml-6 flex-1">
                                <h1 className="text-2xl md:text-4xl font-bold text-[#03204a]">Welcome back, Blaugrana!</h1>
                                <p className="mt-2 text-gray-700">This is your fan hub, latest news, membership perks, and upcoming events all in one place.</p>
                                <div className="mt-4 flex space-x-3">
                                    <a href="/exclusive-news" className="px-4 py-2 bg-barcelonaRed text-white rounded-md shadow">Exclusive News</a>
                                    <a href="/membership-card" className="px-4 py-2 bg-barcelonaBlue text-white rounded-md shadow">View Membership Card</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* add extra bottom padding so following content doesn't overlap the overlay */}
                <div className="pb-24 md:pb-32" />
            </section>

            <main className="container mx-auto px-4 py-8 flex-grow">
                {/* Quick stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-white rounded-lg shadow p-4 flex items-center">
                        <div className="bg-barcelonaBlue text-white rounded-full h-12 w-12 flex items-center justify-center">M</div>
                        <div className="ml-4">
                            <p className="text-sm text-gray-500">Members</p>
                            <p className="text-xl font-bold">12,345</p>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg shadow p-4 flex items-center">
                        <div className="bg-barcelonaRed text-white rounded-full h-12 w-12 flex items-center justify-center">N</div>
                        <div className="ml-4">
                            <p className="text-sm text-gray-500">News Read</p>
                            <p className="text-xl font-bold">1,234</p>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg shadow p-4 flex items-center">
                        <div className="bg-yellow-400 text-white rounded-full h-12 w-12 flex items-center justify-center">E</div>
                        <div className="ml-4">
                            <p className="text-sm text-gray-500">Upcoming Events</p>
                            <p className="text-xl font-bold">3</p>
                        </div>
                    </div>
                </div>

                {/* Latest news */}
                <h3 className="text-xl font-semibold text-[#03204a] mb-4">Latest for fans</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {sampleNews.map((n, i) => {
                        if (i === 0) {
                            return (
                                <Link to="/squad" key={i} className="block">
                                    <NewsCard title={n.title} description={n.description} image={n.image} />
                                </Link>
                            );
                        }
                        if (i === 1) {
                            return (
                                <Link to="/exclusive-interview" key={i} className="block">
                                    <NewsCard title={n.title} description={n.description} image={n.image} />
                                </Link>
                            );
                        }
                        if (i === 2) {
                            return (
                                <Link to="/members-meetup" key={i} className="block">
                                    <NewsCard title={n.title} description={n.description} image={n.image} />
                                </Link>
                            );
                        }
                        return <NewsCard key={i} title={n.title} description={n.description} image={n.image} />;
                    })}
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Dashboard;