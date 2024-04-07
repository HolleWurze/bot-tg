import React from 'react';
import { Link } from 'react-router-dom';

const HelpPage = () => {
    return (
        <div className="bg-gray-100 min-h-screen flex flex-col justify-center">
            <div className="max-w-xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden p-6">
                <h1 className="text-2xl font-semibold text-gray-800 text-center mb-4">Help</h1>
                <p className="text-lg text-gray-800 mb-4">Frequently Asked Questions:</p>
                <ul className="list-disc list-inside mb-4">
                    <li className="text-gray-700">How does pricing work?</li>
                    <li className="text-gray-700">Can I use multiple models simultaneously?</li>
                    {/* Add more FAQs as needed */}
                </ul>
                <div className="text-center">
                    <Link to="/main" className="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Back
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default HelpPage;
