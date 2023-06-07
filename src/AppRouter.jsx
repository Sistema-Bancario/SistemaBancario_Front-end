import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { LoginUser } from "./loginUser/components/LoginUser";
import { App } from "./HomePage/Components/App";
import { Navbar } from "./HomePage/Components/Navbar";
import { Footer } from "./HomePage/Components/Footer";
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
 </Routes>
     
     

    </BrowserRouter>
  );
};
