import React, { createContext, useState, useContext } from 'react';

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [balance, setBalance] = useState(1500);
  const [chats, setChats] = useState(['Key Achivements','React test']);
  
  // Add other relevant user data states and update functions as needed

  const value = {
    balance,
    setBalance,
    chats,
    setChats,
    // Add other user-related data and functions here
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};