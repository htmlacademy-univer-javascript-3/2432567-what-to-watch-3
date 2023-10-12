// import React from 'react';
import ReactDOM from 'react-dom/client';
import React from 'react';
import App from './components/app/App';
import { films } from './mocks';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App data={films} />
  </React.StrictMode>
);
