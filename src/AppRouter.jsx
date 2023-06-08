import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { LoginUser } from "./loginUser/components/LoginUser";

import { NavBar } from "./Navbar";
import { Footer } from "./Footer";
import { HomePage } from "./HomePage";
import { isAdminAuthenticated } from "./LoginAdminUser/helpers/loginAdminHelper";
import { PaginaPrincipal } from "./paginaPrincipal/components/PaginaPrincipal";
import { LoginAdminUser } from "./LoginAdminUser/components/LoginAdminUser";
import { ListaUsers}  from "./CRUD-users/components/ListaUsers";
import { CreateUser } from "./CRUD-users/components/agregarUser";
import { ListaAdmins } from "./CRUD-UserAdmin/components/ListaAdmin";
import { CreateAdmin } from "./CRUD-UserAdmin/components/AgregarAdmin";

import { App } from "./HomePage/Components/App";
import { Navbar } from "./HomePage/Components/Navbar";
import { Footer } from "./HomePage/Components/Footer";

export const AppRouter = () => {
  return (
    <BrowserRouter>
     
      <Routes>

        <Route path="/" element={<HomePage />} />
        <Route path="/loginUser" element={<LoginUser />} />
        <Route path="/PaginaPrincipal" element={<PaginaPrincipal></PaginaPrincipal>} />
        <Route
          path="/LoginAdminUser"
          element={
            !isAdminAuthenticated() ? (
              <LoginAdminUser></LoginAdminUser>
              ) : (
                <Navigate to="/PaginaPrincipal" replace={true}></Navigate>
            )
          }
        />
         <Route
        path = "/ListaUsuarios"
        element= {
          isAdminAuthenticated() ? (
            <ListaUsers></ListaUsers>
          ) :(
            <Navigate to="/LoginAdminUser"></Navigate>
          )
        }
        
      />
      <Route
        path = "/createUser"
        element= {
          isAdminAuthenticated() ? (
            <CreateUser></CreateUser>
          ) :(
            <Navigate to="/LoginAdminUser"></Navigate>
          )
        }
        
      />
      <Route
        path = "/ListaUsuariosAdmin"
        element= {
          isAdminAuthenticated() ? (
            <ListaAdmins></ListaAdmins>
          ) :(
            <Navigate to="/LoginAdminUser"></Navigate>
          )
        }
        
      />
      <Route
        path = "/createUserAdmin"
        element= {
          isAdminAuthenticated() ? (
            <CreateAdmin></CreateAdmin>
          ) :(
            <Navigate to="/LoginAdminUser"></Navigate>
          )
        }
        
      />

      
      </Routes>

     

      <Footer />

   
   <Route path="/loginUser" element={<LoginUser />} />
   {/* Agrega más rutas según tus necesidades */}
   <Route
     path="/app"
     element={
        <App></App> 
     }
   ></Route>
      <Route
     path="/"
     element={<App></App> }
   ></Route>
 </Routes>
     
     


    </BrowserRouter>
  );
};
