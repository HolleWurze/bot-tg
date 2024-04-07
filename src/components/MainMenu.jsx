import React from 'react';
import { Link } from 'react-router-dom';
import { useUser } from '../context/UserContext';

const MainMenu = () => {
  const { balance } = useUser();

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col justify-center">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="py-4 px-6 bg-gradient-to-r from-blue-500 to-blue-700">
          <h1 className="text-3xl font-semibold text-white text-center">Main Menu</h1>
          {/* Опционально, если нужно показать баланс: */}
          {/* {balance && (
            <div className="flex justify-between items-center mt-4">
              <span className="text-gray-200 text-sm">Your balance:</span>
              <span className="text-gray-200 text-lg font-semibold">{balance} tokens</span>
            </div>
          )} */}

          <nav className="flex flex-col p-6 space-y-4">
            <Link
              to="/chats"
              className="btn transition duration-300 ease-in-out bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
            >
              Chats
            </Link>
            <Link
              to="/models"
              className="btn transition duration-300 ease-in-out bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
            >
              Available Models
            </Link>
            <Link
              to="/balance"
              className="btn transition duration-300 ease-in-out bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
            >
              Balance
            </Link>
            <Link
              to="/help"
              className="btn transition duration-300 ease-in-out bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
            >
              Help
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default MainMenu;
