import React from 'react';
import { Link } from 'react-router-dom';
import { useUser } from '../context/UserContext';

const MainMenu = () => {
  const { balance } = useUser();

  return (
    <div className="bg-gray-100 h-screen p-4">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <div className="py-4 px-6">
          <h1 className="text-2xl font-semibold text-gray-800 text-center">Main Menu</h1>
          {/* Опционально, если нужно показать баланс:
          <div className="flex justify-between items-center mt-4">
            <span className="text-gray-700 text-sm">Your balance:</span>
            <span className="text-gray-800 text-lg font-semibold">{balance} tokens</span>
          </div>
          */}
        </div>
        <nav className="flex flex-col p-6">
          <Link
            to="/chats"
            className="btn bg-blue-500 text-white py-2 px-4 rounded my-2 transition duration-300 ease-in-out hover:bg-blue-600"
          >
            Chats
          </Link>
          <Link
            to="/models"
            className="btn bg-blue-500 text-white py-2 px-4 rounded my-2 transition duration-300 ease-in-out hover:bg-blue-600"
          >
            Available Models
          </Link>
          <Link
            to="/balance"
            className="btn bg-blue-500 text-white py-2 px-4 rounded my-2 transition duration-300 ease-in-out hover:bg-blue-600"
          >
            Balance
          </Link>
          <Link
            to="/help"
            className="btn bg-blue-500 text-white py-2 px-4 rounded my-2 transition duration-300 ease-in-out hover:bg-blue-600"
          >
            Help
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default MainMenu;