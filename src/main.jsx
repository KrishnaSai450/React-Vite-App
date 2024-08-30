import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
// import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { CIcon } from '@coreui/icons-react';
import { cilList, cilShieldAlt } from '@coreui/icons';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

