import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const NavigateToMain = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/main');
  }, [navigate]);

  return null; // Компонент ничего не рендерит
};

export default NavigateToMain;
