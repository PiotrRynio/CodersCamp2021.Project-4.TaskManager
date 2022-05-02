import React from 'react';
import ReactDOM from 'react-dom';
import { App } from 'views';
import { AppProviders } from './providers/AppProviders';
import { BrowserRouter } from 'react-router-dom';
import { PageTitleProvider } from './providers/PageTitleProvider';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppProviders>
        <PageTitleProvider>
          <App />
        </PageTitleProvider>
      </AppProviders>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
