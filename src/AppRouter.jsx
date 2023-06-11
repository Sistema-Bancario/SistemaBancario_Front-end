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
     
     

    </BrowserRouter>
  );
};
