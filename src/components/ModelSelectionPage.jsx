import React from 'react';
import { useUser } from '../context/UserContext';
import { saveUserChatModel } from '../services/BackendService';
import { Link } from 'react-router-dom';

const ModelSelectionPage = () => {
    const { user, balance } = useUser();

    const handleModelSelection = (model) => {
        // Update user-chat model bundle in the backend
        saveUserChatModel(user, model)
            .then(() => {
                // Update user-chat model bundle successful
                // ...
            })
            .catch(error => {
                console.error('Failed to save user-chat model:', error);
            });
    };

    return (
        <div>
            <h1>Model Selection</h1>
            <button onClick={() => handleModelSelection('Model A')}>Model A</button>
            <button onClick={() => handleModelSelection('Model B')}>Model B</button>
            <button onClick={() => handleModelSelection('Model C')}>Model C</button>
            {/* Add more model buttons as needed */}
            <Link to="/" className="btn">Back</Link>
        </div>
        
    );
};

export default ModelSelectionPage;