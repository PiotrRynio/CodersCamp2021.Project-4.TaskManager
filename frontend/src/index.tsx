import React from 'react';
import ReactDOM from 'react-dom';
import { App } from 'views';
import { AppProviders } from './providers/AppProviders';
import { BrowserRouter } from 'react-router-dom';
import { PageTitleProvider } from './providers/PageTitleProvider';
import { store } from './redux/store';
import { Provider } from 'react-redux';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <AppProviders>
          <PageTitleProvider>
            <App />
          </PageTitleProvider>
        </AppProviders>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
