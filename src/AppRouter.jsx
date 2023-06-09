import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { isAuthenticated } from "./LoginAdminUser/helpers/loginAdminHelper";

import { Navbar } from "./HomePage/Components/Navbar";
import { HomePage } from "./HomePage";
import { AdminPage } from "./AdminPage/AdminPage";
import { LoginUser } from "./loginUser/components/LoginUser";
import { ListaUsers } from "./CRUD-users/components/ListaUsers";
import { CreateUser } from "./CRUD-users/components/agregarUser";
import { ListaAdmins } from "./CRUD-UserAdmin/components/ListaAdmin";
import { CreateAdmin } from "./CRUD-UserAdmin/components/AgregarAdmin";
import { Footer } from "./HomePage/Components/Footer";
import { LoginAdmin } from "./LoginAdminUser/components/LoginAdmin";
import NavbarAdmin from "./NavbarAdmin";
import NavbarUser from "./NavbarUser";
import UserPage from "./UserPage/UserPage";
import { isUserAuthenticated } from "./loginUser/helpers/loginUserHelper";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
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
            !isAuthenticated() && !isUserAuthenticated() ? (
              <LoginUser />
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
              <Navigate to="/AdminPage" />
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
                <ListaAdmins />
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
