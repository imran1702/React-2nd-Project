import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ContextApi } from './components/pages/ContextApi.jsx';
import { Provider } from 'react-redux';
import store from './store.js';

createRoot(document.getElementById('root')).render(
  
  <ContextApi>
    <Provider store={store}>
    <App />
    </Provider>
  </ContextApi>,
)
