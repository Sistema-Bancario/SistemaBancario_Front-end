import React, { useState } from "react";
import { Navbar } from './Navbar'
import { Slide } from './Slide'
import { Footer } from './Footer'
import { Info } from "./Info";
import { Relleno } from "./Relleno";
import { CaruselMedio } from "./Carrusel";
import { Cards } from "./Cards";
import ContactForm from "./Contacto";
export const App = () => {
  return (
    <>
        <Navbar></Navbar>
        <Slide></Slide>
        <Relleno></Relleno>
        <ContactForm></ContactForm>
        <Info></Info>
        <Cards></Cards>
        <CaruselMedio/>
        <Footer></Footer>
    </>
  );
}