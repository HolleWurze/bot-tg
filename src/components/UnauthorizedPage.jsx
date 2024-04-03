import React from 'react';
import { Link } from 'react-router-dom';

const UnauthorizedPage = () => {
  const handleRegistration = () => {
    // Handle registration logic, e.g., redirect to registration page
    // ...
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md text-center">
        <h1 className="text-2xl font-bold text-gray-700 mb-4">Unauthorized Access</h1>
        <p className="text-gray-500 mb-6">Please register or enter payment details to continue.</p>
        <button
          onClick={handleRegistration}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4 transition duration-300 ease-in-out"
        >
          Register
        </button>
        <Link
          to="/payment-options"
          className="text-blue-500 hover:text-blue-700 transition duration-300 ease-in-out"
        >
          Enter Payment Details
        </Link>
      </div>
    </div>
  );
};

export default UnauthorizedPage;