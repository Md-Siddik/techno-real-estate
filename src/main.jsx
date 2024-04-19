import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AuthProvider from './providers/AuthProvider'
import Root from './layouts/Root';
import Error from './pages/Shared/Error/Error'
import Home from './pages/Home/Home';
import PrivetRoute from "./routes/PrivetRoute";
import Details from './pages/Details/Details';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import UserProfile from './pages/UserProfile/UserProfile';
import UpdateProfile from './pages/UpdateProfile/UpdateProfile';
import Best from './pages/Best/Best';

const router = createBrowserRouter([
  {
      path: '/',
      element: <Root></Root>,
      errorElement: <Error></Error>,
      children: [
          {
              path: '/',
              element: <Home></Home>,
              loader: () => fetch('./residential.json')
          },
          {
              path: '/details/:id',
              element: <PrivetRoute><Details></Details></PrivetRoute>,
              loader: () => fetch('./residential.json')
          },
          {
              path: '/login',
              element: <Login></Login>
          },
          {
              path: '/register',
              element: <Register></Register>
          },
          {
              path: '/UserProfile',
              element: <PrivetRoute><UserProfile></UserProfile></PrivetRoute>
          },
          {
              path: '/UpdateProfile',
              element: <PrivetRoute><UpdateProfile></UpdateProfile></PrivetRoute>
          },
          {
            path: '/best',
            element: <PrivetRoute><Best></Best></PrivetRoute>,
            loader: () => fetch('./residential.json')
          }
          
      ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
