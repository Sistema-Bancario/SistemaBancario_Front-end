import React from "react";
import { NavBar } from "./Navbar";
import { Footer } from "./Footer";
import { HomePage } from "./HomePage";



export const AppRouter = () => {
  const acepta = true;
  return (
    <>
      <NavBar></NavBar>

      <HomePage></HomePage>


      <Footer></Footer>
    </>
  );
};
