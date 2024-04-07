import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

const PaymentOptionsPage = () => {
    const navigate = useNavigate();
    // Handle payment method selection
    const handlePaymentMethod = (method) => {
        // Perform payment method logic / redirect to the payment gateway, etc.
        // ...
    };

    return (
        <div className="bg-gray-100 min-h-screen flex flex-col justify-center">
            <div className="max-w-xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden p-6">
                <h1 className="text-2xl font-semibold text-gray-800 text-center mb-4">Payment Options</h1>
                <div className="flex flex-col space-y-4 mb-4">
                    <button
                        onClick={() => handlePaymentMethod('Payment by Card of the Russian Federation')}
                        className="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                        Payment by Card of the Russian Federation
                    </button>
                    <button
                        onClick={() => handlePaymentMethod('Payment by Legal Entity Account')}
                        className="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                        Payment by Legal Entity Account
                    </button>
                </div>
                <div className="text-center flex flex-col space-y-4 mb-4">
                    <Link to="/help" className="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Help
                    </Link>
                    <button onClick={() => navigate(-1)}
                        className="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Back</button>
                </div>
            </div>
        </div>
    );
};

export default PaymentOptionsPage;
