import React, { useState } from 'react';
import { useUser } from '../context/UserContext';
import { saveUserChatModel } from '../services/BackendService';
import { useNavigate, Link } from 'react-router-dom';

const ModelSelectionPage = () => {
    const navigate = useNavigate();
    const { user, balance } = useUser();
    // Изначально выбранная модель
    const [selectedModel, setSelectedModel] = useState('Chat GPT 4');

    const handleModelSelection = (model) => {
        if (model === selectedModel) {
            // Если модель уже выбрана, ничего не делаем
            return;
        }
        // Обновляем модель чата в бэкенде
        saveUserChatModel(user, model)
            .then(() => {
                // При успешном сохранении обновляем состояние выбранной модели
                setSelectedModel(model);
            })
            .catch(error => {
                console.error('Failed to save user-chat model:', error);
            });
    };

    // Вспомогательная функция для стилизации кнопок модели
    const getModelButtonClass = (model) => {
        return `btn ${model === selectedModel ? 'bg-orange-500 text-white cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-700 text-white'}`;
    };

    return (
        <div className="p-4 max-w-xl mx-auto">
            <h1 className="text-xl font-semibold text-center mb-4">Model Selection</h1>
            <div className="grid grid-cols-1 gap-4">
                <button
                    className={getModelButtonClass('Chat GPT 3.5 Turbo')}
                    onClick={() => handleModelSelection('Chat GPT 3.5 Turbo')}
                    disabled={selectedModel === 'Chat GPT 3.5 Turbo'}
                >
                    Chat GPT 3.5 Turbo
                </button>
                {/* <button
                    className={getModelButtonClass('Chat GPT 4')}
                    onClick={() => handleModelSelection('Chat GPT 4')}
                    disabled={selectedModel === 'Chat GPT 4'}
                >
                    Chat GPT 4
                </button> */}
                <button
                    className={`btn ${selectedModel === 'Chat GPT 4' ? 'bg-orange-500' : 'bg-blue-500 hover:bg-blue-700'} text-white font-bold py-2 px-4 rounded`}
                    onClick={() => handleModelSelection('Chat GPT 4')}
                    disabled={selectedModel === 'Chat GPT 4'}
                >
                    Chat GPT 4
                </button>
                <button
                    className={getModelButtonClass('DALLe')}
                    onClick={() => handleModelSelection('DALLe')}
                    disabled={selectedModel === 'DALLe'}
                >
                    DALLe
                </button>
                {/* Добавим кнопки при необходимости */}
            </div>
            <button onClick={() => navigate(-1)}
                className="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Back</button>
        </div>
    );
};

export default ModelSelectionPage;