import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { LoginUser } from "./loginUser/components/LoginUser";
import { App } from "./HomePage/Components/App";
import { Navbar } from "./HomePage/Components/Navbar";
import { Footer } from "./HomePage/Components/Footer";
import { Profile } from "./perfil/components/Profile";
import { Favoritos } from "./favorito/MisFavoritos";
import { CuentasVista } from "./Cuenta/CuentasVista";
export const AppRouter = () => {
import { ListaUsers } from "./CRUD-users/components/ListaUsers";
import { CreateUser } from "./CRUD-users/components/AgregarUser";
import { CreateAdmin } from "./CRUD-UserAdmin/components/AgregarAdmin";
import { Footer } from "./HomePage/Components/Footer";
import { LoginAdmin } from "./LoginAdminUser/components/LoginAdmin";
import NavbarAdmin from "./NavbarAdmin";
import NavbarUser from "./NavbarUser";
import { isUserAuthenticated } from "./loginUser/helpers/loginUserHelper";
import UserPage from "./UserPage/UserPage";
import ListarAccount from "./Account/components/ListarAccount";
import { ListaTransactions } from "./CRUD-transactions/components/ListTransactions";
import { CreateTransaction } from "./CRUD-transactions/components/AgregarTransaction";
import { ListaAdmins } from "./CRUD-UserAdmin/components/ListaAdmin";

export const AppRouter = () => {

  return (
    <BrowserRouter>
     
      <Routes>
   
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
    <Route
     path="/miPerfil"
     element={<Profile></Profile> }
   ></Route>
   <Route
     path="/misCuentas"
     element={<CuentasVista></CuentasVista> }
   ></Route>
   <Route
     path="/favoritos/:id"
     element={<Favoritos></Favoritos> }
   ></Route>
 </Routes>
     
     

        {/* HOME PAGE --- PRINCIPAL */}
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <HomePage />
              <Footer />
            </>
          }
        />

        {/* USER PAGE */}
        <Route
          path="/UserPage"
          element={
            <>
              <NavbarUser />
              <UserPage />
            </>
          }
        />

        <Route
          path="/LoginUser"
          element={
            !isUserAuthenticated() ? (
              <LoginUser />
            ) : (
              <Navigate to="/ListaAccount" />
            )
          }
        />


        {/* <Route
          path="/ListaAccount"
          element={
            !isUserAuthenticated() ? (
              <>
                <NavbarUser />
                <ListarAccount />
              </>
            ) : (
              <Navigate to="/LoginUser" />
            )
          }
        /> */}

        <Route
          path="/ListaAccount"
          element={
            <>
              <NavbarUser></NavbarUser>
              <ListarAccount></ListarAccount>

            </>
          }
        />
        {/* TRANSACCIONES  */}
        <Route
          path="/ListaTransacciones"
          element={
            isAuthenticated() ? (
              <>
                <NavbarUser />
                <ListaTransactions />
              </>
            ) : (
              <Navigate to="/UserPage" />
            )
          }
        />

        <Route
          path="/createTransaction"
          element={
            isAuthenticated() ? (
              <>
                <NavbarUser />
                <CreateTransaction />
              </>
            ) : (
              <Navigate to="/UserPage" />
            )
          }
        />


        {/* ADMIN PAGE */}
        <Route
          path="/AdminPage"
          element={
            <>
              <NavbarAdmin />
              <AdminPage />
            </>
          }
        />

        <Route
          path="/LoginAdminUser"
          element={
            !isAuthenticated() && !isUserAuthenticated() ? (
              <LoginAdmin />
            ) : (
              <Navigate to="/ListaUsuarios" />
            )
          }
        />

        <Route
          path="/ListaUsuarios"
          element={
            isAuthenticated() ? (
              <>
                <NavbarAdmin />
                <ListaUsers />
              </>
            ) : (
              <Navigate to="/LoginAdminUser" />
            )
          }
        />

        <Route
          path="/createUser"
          element={
            isAuthenticated() ? (
              <>
                <NavbarAdmin />
                <CreateUser />
              </>
            ) : (
              <Navigate to="/LoginAdminUser" />
            )
          }
        />

        <Route
          path="/ListaUsuariosAdmin"
          element={
            isAuthenticated() ? (
              <>
                <NavbarAdmin />
                <ListaAdmins></ListaAdmins>

              </>
            ) : (
              <Navigate to="/LoginAdminUser" />
            )
          }
        />

        <Route
          path="/createUserAdmin"
          element={
            isAuthenticated() ? (
              <>
                <NavbarAdmin />
                <CreateAdmin />
              </>
            ) : (
              <Navigate to="/LoginAdminUser" />
            )
          }
        />


      </Routes>
    </BrowserRouter>
  );
};
