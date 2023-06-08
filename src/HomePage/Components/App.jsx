import React, { useState } from "react";
import { Navbar } from './Navbar'
import { Slide } from './Slide'

import { Footer } from './Footer'
import { Info } from "./Info";
import { Relleno } from "./Relleno";

export const App = () => {
  return (
    <>
        <Navbar></Navbar>
        <Slide></Slide>
        <Relleno></Relleno>
        
        <Info></Info>
        <Footer></Footer>
    </>
  );
}