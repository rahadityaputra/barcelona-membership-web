import React, { useEffect, useState } from 'react';
import NewsList from './NewsList';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import useExclusiveNews from '../hooks/useExclusiveNews';
import useMember from '../hooks/useMember';
import NonMemberModal from '../components/NonMemberModal';
import away from '../assets/away.webp';
import youngster from '../assets/youngster.webp';


const NewsExclusive: React.FC = () => {
    const [showModal, setShowModal] = useState(false);
    const { checkMember } = useMember();

    const exclusiveNews = [
        { id: 4, title: 'Life experience', description: 'Two young men from the Barça Academy Residency Arizona train in Barcelona.', image: youngster, link: '/news/life-experience' },
        { id: 5, title: 'Squad for the trip to Bruges', description: 'Hansi Flick names his players for the Champions League clash in Belgium against Club Brugge.', image: away, link: '/news/squad-bruges' },
    ];

    const { fetchExclusiveNews, loading } = useExclusiveNews();

    useEffect(() => {
        const verifyMembership = async () => {
            const result = await checkMember();
            if (!result.success) {
                setShowModal(true);
            }
        };
        verifyMembership();
        fetchExclusiveNews();
    }, [checkMember, fetchExclusiveNews]);

    if (loading) {
        return (
            <div className="min-h-screen bg-gray-100 flex flex-col">
                <Header />
                <main className="container mx-auto p-4 flex-grow">
                    <p>Loading exclusive news...</p>
                </main>
                <Footer />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col">
            <Header />
            <main className="container mx-auto p-4 flex-grow">
                <h1 className="text-3xl font-bold text-barcelonaBlue mb-6">Exclusive News</h1>
                <NewsList news={exclusiveNews} />
            </main>
            <Footer />
            <NonMemberModal isOpen={showModal} onClose={() => setShowModal(false)} />
        </div>
    );
};

export default NewsExclusive;