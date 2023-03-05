import React from 'react';
import ReactDOM from 'react-dom/client';
// import { configureStore } from '@reduxjs/toolkit';

import App from './components/app/app';
// import { getAxiosInstance } from './services/api';


// const api = getAxiosInstance();

// const store = configureStore({
//   reducer: rootReducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       thunk: {
//         extraArgument: api,
//       },
//     }).concat(redirect),
// });

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
