import React, { useEffect, useState } from 'react';
import { useUser } from '../context/UserContext';
import { fetchChatList, fetchUserChatModel } from '../services/BackendService';
import { useNavigate, Link } from 'react-router-dom';

const ChatListPage = () => {
    const { user, balance } = useUser();
    const [chats, setChats] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        // Fetch chat list from backend
        fetchChatList(user)
            .then(data => {
                setChats(data);
            })
            .catch(error => {
                console.error('Failed to fetch chat list:', error);
            });
    }, [user]);

    const handleSelectChat = (chatId) => {
        fetchUserChatModel(user, chatId)
            .then(model => {
                // Update user-chat model bundle in the backend
                // ...
            })
            .catch(error => {
                console.error('Failed to fetch user-chat model:', error);
            });
    };

    const renderChatButtons = () => {
        if (chats.length === 0) {
            return (
                <div className="text-center">
                    <p className="mb-4">It looks like you don't have any chats yet. Do you want to ask something?</p>
                    <Link to="/main" className="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-2">Yes</Link>
                    <Link to="/main" className="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">No, I'm just looking</Link>
                </div>
            );
        }

        return (
            <div className="grid grid-cols-1 gap-4">
                {chats.map(chat => (
                    <button key={chat.id} onClick={() => handleSelectChat(chat.id)} className="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Чат номер {chat.id}
                    </button>
                ))}
            </div>
        );
    };

    return (
        <div className="p-4 max-w-xl mx-auto">
            <h1 className="text-xl font-semibold text-center mb-4">Открытые чаты</h1>
            {renderChatButtons()}
            <button onClick={() => navigate(-1)}
                className="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Back</button>
        </div>
    );
};

export default ChatListPage;
