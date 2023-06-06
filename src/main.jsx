import React from 'react'
import ReactDOM from 'react-dom/client'
import { AppRouter } from './AppRouter'
import './index.css'
import { LoginUser } from './loginUser/components/LoginUser'
import { isAdminAuthenticated } from './LoginAdminUser/helpers/loginAdminHelper'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className={isAdminAuthenticated() ? 'LoginAdminUser' : null}></div>
    <AppRouter />
  </React.StrictMode>,
)
