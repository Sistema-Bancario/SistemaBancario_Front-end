import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoginUser } from "./loginUser/components/LoginUser";
import { NavBar } from "./Navbar";
import { Footer } from "./Footer";
import { HomePage } from "./HomePage";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/loginUser" element={<LoginUser />} />
        {/* Agrega más rutas según tus necesidades */}
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};
