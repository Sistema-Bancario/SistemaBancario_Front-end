import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoginUser } from "./loginUser/components/LoginUser";
import { NavBar } from "./Navbar";
import { Footer } from "./Footer";
import { HomePage } from "./HomePage";
import { isAdminAuthenticated } from "./LoginAdminUser/helpers/loginAdminHelper";
import { LoginAdminUser } from "./LoginAdminUser/components/LoginAdminUser";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/loginUser" element={<LoginUser />} />
        <Route path="/loginAdmin" element={
            isAdminAuthenticated() ? (
              <LoginAdminUser></LoginAdminUser>
            ) : (
              <Navigate to="/HomePage"></Navigate>
            )
          } />

        {/* Agrega más rutas según tus necesidades */}
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};
