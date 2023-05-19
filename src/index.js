import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { persistor, store } from 'redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import App from './components/App/App';

import './index.css';

const baseRoute = '/goit-react-hw-08-phonebook'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename={baseRoute}>
      <PersistGate loading={null} persistor={persistor}>
        <Provider store={store}>
          <App/>
        </Provider>
      </PersistGate>
    </BrowserRouter>
  </React.StrictMode>
);
