import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainMenu from './components/MainMenu';
import BalancePage from './components/BalancePage';
import ChatListPage from './components/ChatListPage';
import ModelSelectionPage from './components/ModelSelectionPage';
import HelpPage from './components/HelpPage';
import PaymentOptionsPage from './components/PaymentOptionsPage';
import TopUpPage from './components/TopUpPage';
import UnauthorizedPage from './components/UnauthorizedPage';
import PaymentPage from './components/PaymentPage';

const App = () => {

    // Добавляем состояние для имитации запуска бота
    const [botStarted, setBotStarted] = useState(false);


    // Имитируем получение события запуска бота
    useEffect(() => {
        // Задержка перед тем, как считать, что бот запущен
        setTimeout(() => {
            setBotStarted(true);
        }, 3000); // 3000 мс - имитация задержки

        // Очищаем таймер, если компонент будет размонтирован до его срабатывания
        // return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        // Проверяем, доступен ли объект Telegram.WebApp
        if (window.Telegram?.WebApp) {
          // Применяем начальные стили темы
          applyTheme(window.Telegram.WebApp.themeParams);
    
          // Обработчик события изменения темы
          window.Telegram.WebApp.onEvent('themeChanged', (theme) => {
            applyTheme(theme);
          });
        }
      }, []);
    
      // Функция для применения стилей темы
      const applyTheme = (themeParams) => {
        if (themeParams) {
          const { bg_color, text_color } = themeParams;
          document.body.style.backgroundColor = `#${bg_color}`;
          document.body.style.color = `#${text_color}`;
        }
      };

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/main" element={<MainMenu />} />
                <Route path="/balance" element={<BalancePage />} />
                <Route path="/chats" element={<ChatListPage />} />
                <Route path="/models" element={<ModelSelectionPage />} />
                <Route path="/help" element={<HelpPage />} />
                <Route path="/payment-options" element={<PaymentOptionsPage />} />
                <Route path="/payment" element={<PaymentPage />} />
                <Route path="/topup" element={<TopUpPage />} />
                <Route path="/unauthorized" element={<UnauthorizedPage />} />
            </Routes>
            {botStarted ? <MainMenu /> : <UnauthorizedPage />} {/* Демонстрация неавторизованной страницы перед входом в меню*/}
        </BrowserRouter>
    );
};

export default App;