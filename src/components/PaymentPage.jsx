import React from 'react';
import { Link } from 'react-router-dom';

const PaymentPage = () => {
  const handlePayment = () => {
    // Implement payment logic, e.g., redirect to the payment gateway
    // ...
  };

  return (
    <div>
      <h1>Payment</h1>
      <p>Payment details and options here.</p>
      <button onClick={handlePayment}>Proceed to Payment</button>
      <Link to="/help" className="btn">Help</Link>
    </div>
  );
};

export default PaymentPage;