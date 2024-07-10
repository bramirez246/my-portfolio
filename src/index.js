import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import NotFound from './pages/NotFound';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/", element: <App/>,
    errorElement: <NotFound status={404}/>
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router = {router}/>
  </React.StrictMode>
);
