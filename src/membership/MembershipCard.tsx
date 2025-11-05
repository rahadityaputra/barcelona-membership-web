import React, { useRef } from 'react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import logo from '../assets/profile.webp';

const MembershipCard: React.FC = () => {
    // In real app the data would come from props or API
    const member = {
        name: 'John Doe',
        id: '123456789',
        status: 'Member',
        validUntil: '2026-12-31',
    };

    const cardRef = useRef<HTMLDivElement | null>(null);

    const handleDownload = async () => {
        if (!cardRef.current) return;
        try {
            // dynamically import html2canvas so the project doesn't fail if it's not installed yet
            const html2canvasModule = await import('html2canvas');
            const html2canvas = html2canvasModule.default || html2canvasModule;
            const canvas = await html2canvas(cardRef.current, { scale: 2, useCORS: true });
            const dataUrl = canvas.toDataURL('image/png');
            const link = document.createElement('a');
            link.href = dataUrl;
            link.download = `${member.name.replace(/\s+/g, '_')}_membership.png`;
            document.body.appendChild(link);
            link.click();
            link.remove();
        } catch (err) {
            console.error(err);
            alert('Download failed. Please install html2canvas (npm install html2canvas) or use Print.');
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col">
            <Header />
            <main className="container mx-auto px-4 py-8 flex-grow flex items-center justify-center">
                <div className="w-full max-w-3xl flex flex-col items-center">
                    {/* Card (front) */}
                    <div ref={cardRef} className="relative bg-gradient-to-r from-[#03122a] to-[#0b4568] text-white rounded-2xl shadow-2xl overflow-hidden p-6 md:p-8 w-[320px] md:w-[640px] h-[200px] md:h-[380px]">
                        {/* decorative stripe */}
                        <div className="absolute left-0 top-0 h-full w-12 bg-white/10" />

                        <div className="flex h-full items-center px-4 md:px-8">
                            {/* Left: logo + chip */}
                            <div className="flex-shrink-0 flex flex-col items-center">
                                <img src={logo} alt="logo" className="h-16 w-16 md:h-24 md:w-24 rounded-full border-2 border-white shadow-md object-cover" />
                                <div className="mt-3 bg-white/20 rounded-md p-1">
                                    {/* chip icon */}
                                    <svg width="36" height="24" viewBox="0 0 36 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="1" y="1" width="34" height="22" rx="2" stroke="#fff" strokeOpacity="0.9" fill="#ffd" />
                                        <rect x="6" y="5" width="8" height="14" rx="1" fill="#fff" />
                                        <rect x="16" y="5" width="14" height="14" rx="1" fill="#fff" />
                                    </svg>
                                </div>
                            </div>

                            {/* Middle: details */}
                            <div className="ml-4 md:ml-8 flex-1">
                                <h2 className="text-lg md:text-3xl font-extrabold tracking-wide">{member.name}</h2>
                                <p className="mt-1 text-xs md:text-sm opacity-90">Membership ID: <span className="font-mono">{member.id}</span></p>
                                <p className="mt-3 text-sm md:text-base uppercase font-semibold">{member.status}</p>
                                <p className="mt-2 text-xs md:text-sm opacity-80">Valid until: {member.validUntil}</p>
                            </div>

                            {/* Right: barcode */}
                            <div className="ml-4 md:ml-8 flex-shrink-0 flex flex-col items-end">
                                <div className="bg-white text-black rounded-sm p-1 shadow-inner">
                                    <div className="w-[64px] md:w-[120px] h-[48px] md:h-[96px] bg-gray-200 flex items-center justify-center">
                                        {/* barcode placeholder */}
                                        <svg width="80" height="64" viewBox="0 0 80 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect x="2" y="8" width="6" height="48" fill="#333" />
                                            <rect x="12" y="8" width="3" height="48" fill="#333" />
                                            <rect x="18" y="8" width="8" height="48" fill="#333" />
                                            <rect x="30" y="8" width="2" height="48" fill="#333" />
                                            <rect x="36" y="8" width="10" height="48" fill="#333" />
                                        </svg>
                                    </div>
                                </div>
                                <p className="mt-2 text-xs opacity-80">Scan for details</p>
                            </div>
                        </div>
                    </div>

                    {/* Card actions */}
                    <div className="mt-6 flex space-x-3">
                        <button
                            onClick={() => window.print()}
                            className="px-4 py-2 bg-barcelonaBlue text-white rounded-lg shadow hover:opacity-90"
                        >
                            Print Card
                        </button>
                        <button
                            onClick={handleDownload}
                            className="px-4 py-2 bg-white text-[#03204a] rounded-lg shadow"
                        >
                            Download PNG
                        </button>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default MembershipCard;