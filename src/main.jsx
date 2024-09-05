import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import {
 
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import router from './component/router/Router';
import AuthProvider from './AuthProvider';






createRoot(document.getElementById('root')).render(
  <StrictMode>
  <AuthProvider>
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
  </AuthProvider>
  </StrictMode>,
)
