import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import DefaultLayout from '../layouts/default';
import AuthLayout from '../layouts/auth';
import Homepage from '../pages/homepage';
import SearchResult from '../pages/searchResult';
import Login from '../pages/login'
import Register from '../pages/register'

const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      {
        path: '/',
        element: <Homepage />
      },
      {
        path: '/result',
        element: <SearchResult />
      }
    ]
  },
  {
    path: '/auth',
    element: <AuthLayout />,
    children: [
      {
        path: '/auth/login',
        element: <Login />
      },
      {
        path: '/auth/register',
        element: <Register />
      }
    ]
  },
  
]);

export default router;
