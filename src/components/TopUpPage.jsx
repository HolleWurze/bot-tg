import React, { useState } from 'react';
import { useUser } from '../context/UserContext';
import { topUpBalance } from '../services/BackendService';
import { Link } from 'react-router-dom';

const TopUpPage = () => {
    const { user, balance, setBalance } = useUser();
    const [topUpAmount, setTopUpAmount] = useState('');

    const handleTopUp = () => {
        // Call backend to top up balance
        topUpBalance(user, topUpAmount)
            .then(updatedBalance => {
                setBalance(updatedBalance);
            })
            .catch(error => {
                console.error('Failed to top up balance:', error);
            });
    };

    return (
        <div>
            <h1>Top Up</h1>
            <p>Your balance: {balance} tokens</p>
            <button onClick={() => handleTopUp(500)}>500 tokens</button>
            <button onClick={() => handleTopUp(1000)}>1000 tokens</button>
            <input type="text" value={topUpAmount} onChange={e => setTopUpAmount(e.target.value)} />
            <button onClick={handleTopUp}>Enter custom amount</button>
            <Link to="/payment-options" className="btn">Back</Link>
        </div>
    );
};

export default TopUpPage;