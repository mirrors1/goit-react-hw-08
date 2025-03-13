import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// Імпорт стилів нормалізації
import 'modern-normalize';
import './index.css';
import App from './components/App.jsx';
//Імпортуємо провайдер
import { Provider } from 'react-redux';
//Імпортуємо створений раніше стор
import { store, persistor } from './redux/store';
import { Toaster } from 'react-hot-toast';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';

// import { persistor, store } from './redux/store';
//Імпортуємо PersistGate для роботи с локальним сховищем
// import { PersistGate } from 'redux-persist/integration/react';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
    <Toaster position="top-right" toastOptions={{ duration: 900 }} />
  </StrictMode>
);
