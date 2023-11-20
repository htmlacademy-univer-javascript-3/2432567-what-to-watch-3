import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './components/app/App';
import store from './store';
import { fetchAuthorizationStatus, fetchFilmPromo, fetchFilms } from './store/api-action';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

store.dispatch(fetchFilmPromo());
store.dispatch(fetchFilms());
store.dispatch(fetchAuthorizationStatus());


root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
