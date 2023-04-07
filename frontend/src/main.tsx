import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import { ErrorPage, LoginForm } from './pages';
import Modal from './layouts/Modal';
import RegistrationForm from './pages/RegistrationForm';
import Home from './pages/Home';
import AdForm from './pages/AdForm';


const root = document.getElementById('root')
if (!root){
  throw new Error("The root element is not available");
}

const router = createBrowserRouter(
  [
    {
      path: '/',
      errorElement: <ErrorPage />,
      element: <App />,
      children: [
        { path: '/', element: <Home/> },
        { path: '/form', element: <AdForm/> },
      ]
    },
    {
      path: '/',
      element: <Modal />,
      children: [
        { path: '/login', element: <LoginForm/> },
        { path: '/Register', element: <RegistrationForm/> },
      ]
    }
  ]
)

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <RouterProvider router={router} />  
  </React.StrictMode>,
)
