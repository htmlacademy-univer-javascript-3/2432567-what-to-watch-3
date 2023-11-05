import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './components/app/App';
import { films } from './mocks/films';
import { store } from './store';
import genres from './mocks/genres';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App films={films} genres={genres} />
    </Provider>
  </React.StrictMode>
);
