import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-barcelonaBlue text-white p-4 text-center shadow-inner mt-8">
            <div className="container mx-auto">
                <p>&copy; {new Date().getFullYear()} FC Barcelona Fan Club. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;