import React, { useState } from 'react';
import { useUser } from '../context/UserContext';
import { topUpBalance } from '../services/BackendService';
import { useNavigate, Link } from 'react-router-dom';

const TopUpPage = () => {
    const { user, balance, setBalance } = useUser();
    const [topUpAmount, setTopUpAmount] = useState('');
    const navigate = useNavigate();

    const handleTopUp = (amount) => () => {
        // Передаем amount в функцию, если он задан, иначе используем topUpAmount из состояния
        const finalAmount = amount || topUpAmount;
        // Call backend to top up balance
        topUpBalance(user, finalAmount)
            .then(updatedBalance => {
                setBalance(updatedBalance);
                setTopUpAmount(''); // Очистка поля ввода после успешного пополнения
            })
            .catch(error => {
                console.error('Failed to top up balance:', error);
            });
    };

    return (
        <div className="bg-gray-100 min-h-screen flex flex-col justify-center">
            <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden p-6">
                <h1 className="text-2xl font-semibold text-gray-800 text-center mb-4">Top Up</h1>
                <p className="text-gray-800 text-lg">Your balance: {balance} tokens</p>
                <div className="flex flex-col space-y-4 mt-4">
                    <button onClick={handleTopUp(500)} className="btn">
                        500 tokens
                    </button>
                    <button onClick={handleTopUp(1000)} className="btn">
                        1000 tokens
                    </button>
                    <div className="flex space-x-2">
                        <input type="text" value={topUpAmount} onChange={e => setTopUpAmount(e.target.value)} className="flex-1 px-4 py-2 rounded border border-gray-300" />
                        <button onClick={handleTopUp()} className="btn">
                            Enter custom amount
                        </button>
                    </div>
                    <button onClick={() => navigate(-1)}
                        className="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Back</button>
                </div>
            </div>
        </div>
    );
};

export default TopUpPage;
