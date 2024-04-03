import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainMenu from './components/MainMenu';
// import BalancePage from './components/BalancePage';
// import ChatListPage from './components/ChatListPage';
// import ModelSelectionPage from './components/ModelSelectionPage';
// import HelpPage from './components/HelpPage';
// import PaymentOptionsPage from './components/PaymentOptionsPage';
// import TopUpPage from './components/TopUpPage';
import UnauthorizedPage from './components/UnauthorizedPage';
import NavigateToMain from './components/NavigateToMain';


const App = () => {

    // Добавляем состояние для имитации запуска бота
    const [botStarted, setBotStarted] = useState(false);

    // Имитируем получение события запуска бота
    useEffect(() => {
        // Задержка перед тем, как считать, что бот запущен
        const timer = setTimeout(() => {
            setBotStarted(true);
        }, 3000); // 3000 мс - имитация задержки

        // Очищаем таймер, если компонент будет размонтирован до его срабатывания
        return () => clearTimeout(timer);
    }, []);

    return (
        <BrowserRouter>
            {/* <div className="bg-black h-screen flex items-center justify-center">
                <div className="text-white text-center">
                    <h1 className="text-1xl flex mb-6">Menu</h1>

                    <Link to="/main">
                        <button className="bg-white text-black p-2 px-6 rounded-lg mb-4">Home</button>
                    </Link>

                    <Link to="/unauthorized">
                        <button className="bg-white text-black p-2 px-6 rounded-lg mb-4">Unauthorized</button>
                    </Link>

                </div>
            </div> */}
            <Routes>
                <Route path="/main" element={<MainMenu />} />
            </Routes>
            {!botStarted ? <UnauthorizedPage /> : <NavigateToMain />}
        </BrowserRouter>

    );
};

export default App;