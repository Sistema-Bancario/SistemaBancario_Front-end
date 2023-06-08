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
export const AppRouter = () => {
  return (
    <BrowserRouter>
      <NavBar />

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
    </BrowserRouter>
  );
};
