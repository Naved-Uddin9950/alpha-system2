// Stylesheets
import './index.css';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';

// React
import { Suspense, lazy } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import { Spin } from 'antd';

// components
import App from './App';
import ErrorPage from './utils/ErrorPage';
import Home from './components/Home/Home';
import ComingSoon from './utils/ComingSoon';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import VerifyAccount from './components/Auth/VerifyAccount';
import Status from './components/Status/Status';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<App />} errorElement={<ErrorPage />}>
        <Route path='' element={<Home />} />
        <Route path='status' element={<Status />} />
        <Route path='coming-soon' element={<ComingSoon />} />
      </Route>
      <Route path='register' element={<Register />} />
      <Route path='login' element={<Login />} />
      <Route path="/verify" element={<VerifyAccount />} />
    </>
  )
);

createRoot(document.getElementById('root')).render(
  <Suspense fallback={<Spin />}>
    <RouterProvider router={router} />
  </Suspense>
);