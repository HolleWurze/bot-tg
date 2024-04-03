export const fetchChatList = (userId) => {
  // Simulate fetching chat list from the backend based on the user ID
  return new Promise((resolve) => {
    const chats = [
      { id: 1, name: 'Chat 1' },
      { id: 2, name: 'Chat 2' },
      { id: 3, name: 'Chat 3' },
    ];
    resolve(chats);
  });
};

export const updateBalance = (userId, amount) => {
  // Simulate updating the user's balance in the backend
  return new Promise((resolve) => {
    const updatedBalance = 1500 + amount;
    resolve(updatedBalance);
  });
};

// Added based on your requirements
export const fetchUserChatModel = (userId, chatId) => {
  // Simulate fetching a user-chat model from the backend
  return new Promise((resolve) => {
    // Simulated response for the user-chat model
    const model = { userId, chatId, modelName: 'Model A' }; // Dummy model, adjust as necessary
    resolve(model);
  });
};

export const saveUserChatModel = (userId, model) => {
  // Simulate saving a user-chat model in the backend
  return new Promise((resolve) => {
    // Simulated save operation
    resolve(true); // Indicates success
  });
};

export const topUpBalance = (userId, amount) => {
  // Simulated top-up functionality, could be the same as updateBalance or different logic
  return updateBalance(userId, amount); // Reuse updateBalance for simplicity
};