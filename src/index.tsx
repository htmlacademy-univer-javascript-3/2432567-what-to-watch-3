import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store';
import { fetchAuthorizationStatus, fetchFilms } from './store/api-action/api-action';
import HistoryRouter from './components/history-route/history-route';
import browserHistory from './utils/browser-history';
import App from './components/app/App';
import { ToastContainer } from 'react-toastify';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

store.dispatch(fetchFilms());
store.dispatch(fetchAuthorizationStatus());

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <HistoryRouter history={browserHistory}>
        <ToastContainer />
        <App />
      </HistoryRouter>
    </Provider>
  </React.StrictMode>
);
