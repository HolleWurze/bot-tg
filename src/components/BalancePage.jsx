import React from 'react';
import { Link } from 'react-router-dom';
import { useUser } from '../context/UserContext';

const BalancePage = () => {
  const { balance } = useUser();

  return (
    <div>
      <h1>Balance</h1>
      <p>Your balance: {balance} tokens</p>
      <Link to="/payment-options" className="btn">Top Up</Link>
      <Link to="/main" className="btn">Back</Link>
    </div>
  );
};

export default BalancePage;