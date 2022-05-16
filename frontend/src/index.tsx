import React from 'react';
import ReactDOM from 'react-dom';
import { App } from 'views';
import { AppProviders } from './providers/AppProviders';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppProviders>
        <App />
      </AppProviders>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
