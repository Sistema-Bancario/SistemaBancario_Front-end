import React from 'react'
import ReactDOM from 'react-dom/client'
import { AppRouter } from './AppRouter'
import './index.css'
import { LoginUser } from './loginUser/components/LoginUser'
import { ListaAdmins } from './CRUD-UserAdmin/components/ListaAdmin'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppRouter /> 
  
  </React.StrictMode>,
)
