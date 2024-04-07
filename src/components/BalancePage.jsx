import React from 'react';
import { Link } from 'react-router-dom';
import { useUser } from '../context/UserContext';

const BalancePage = () => {
  const { balance } = useUser();

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden p-6">
        <h1 className="text-2xl font-semibold text-gray-800 text-center mb-4">Balance</h1>
        <p className="text-gray-800 text-lg mb-4">Your balance: <span className="font-semibold">{balance} tokens</span></p>
        <div className="flex flex-col space-y-4">
          <Link to="/payment-options" className="btn">
            Top Up
          </Link>
          <Link to="/main" className="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Back
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BalancePage;
