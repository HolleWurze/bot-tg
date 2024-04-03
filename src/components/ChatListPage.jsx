import React, { useEffect, useState } from 'react';
import { useUser } from '../context/UserContext';
import { fetchChatList, fetchUserChatModel } from '../services/BackendService';
import { Link } from 'react-router-dom';

const ChatListPage = () => {
    const { user, balance } = useUser();
    const [chats, setChats] = useState([]);

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
                <div>
                    <p>It looks like you don't have any chats yet. Do you want to ask something?</p>
                    <Link to="/main" className="btn">Yes</Link>
                    <Link to="/main" className="btn">No, I'm just looking</Link>
                </div>
            );
        }

        return (
            <div>
                {chats.map(chat => (
                    <button key={chat.id} onClick={() => handleSelectChat(chat.id)}>
                        Чат номер {chat.id}
                    </button>
                ))}
            </div>
        );
    };

    return (
        <div>
            <h1>Открытые чаты</h1>
            {renderChatButtons()}
        </div>
    );
};

export default ChatListPage;