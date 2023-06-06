import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { LoginUser } from "./loginUser/components/LoginUser";
import { NavBar } from "./NavBar";
import { Footer } from "./Footer";
import { HomePage } from "./HomePage";
import { isAdminAuthenticated } from "./LoginAdminUser/helpers/loginAdminHelper";
import { PaginaPrincipal } from "./paginaPrincipal/components/PaginaPrincipal";
import { LoginAdminUser } from "./LoginAdminUser/components/LoginAdminUser";

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
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};
