import React from 'react';
import { Link } from 'react-router-dom';

const PaymentOptionsPage = () => {
    // Handle payment method selection
    const handlePaymentMethod = (method) => {
        // Perform payment method logic / redirect to the payment gateway, etc.
        // ...
    };

    return (
        <div>
            <h1>Payment Options</h1>
            <button onClick={() => handlePaymentMethod('Payment by Card of the Russian Federation')}>
                Payment by Card of the Russian Federation
            </button>
            <button onClick={() => handlePaymentMethod('Payment by Legal Entity Account')}>
                Payment by Legal Entity Account
            </button>
            <Link to="/help" className="btn">Help</Link>
        </div>
    );
};

export default PaymentOptionsPage;