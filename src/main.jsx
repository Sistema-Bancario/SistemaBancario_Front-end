import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { AppRouter } from './AppRouter'
import ListarAccount from './Account/components/ListarAccount'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <AppRouter></AppRouter>
  </React.StrictMode>,
)
