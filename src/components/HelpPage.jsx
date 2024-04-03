import React from 'react';
import { Link } from 'react-router-dom';

const HelpPage = () => {
    return (
        <div>
            <h1>Help</h1>
            <p>Frequently Asked Questions:</p>
            <ul>
                <li>How does pricing work?</li>
                <li>Can I use multiple models simultaneously?</li>
                {/* Add more FAQs as needed */}
            </ul>
            <Link to="/main" className="btn">Back</Link>
        </div>
    );
};

export default HelpPage;