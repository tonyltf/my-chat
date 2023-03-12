import React from 'react';
import ReactDOM from 'react-dom/client';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import firebase from './utils/firebase';

import App from './App';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Chat from './Chat';


localStorage.theme = 'dark';
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark');
} else {
  document.documentElement.classList.remove('dark');
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/chat',
    element: <Chat />,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
