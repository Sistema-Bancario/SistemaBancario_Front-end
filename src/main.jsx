import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { AppRouter } from './AppRouter'
import { ListaAdmins } from './CRUD-UserAdmin/components/ListaAdmin'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <AppRouter></AppRouter>
  </React.StrictMode>,
)
