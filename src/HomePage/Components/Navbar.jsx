import React from "react";
import { Link } from 'react-router-dom';


export const Navbar = () => {
  
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container cont">
          <input type="checkbox" name="" id="" />
          <div className="hamburger-lines">
            <span className="line line1"></span>
            <span className="line line2"></span>
            <span className="line line3"></span>
          </div>
          <ul className="menu-items">
            <li><a href="#">Cuentas </a></li>
            <li><a href="#">Tarjetas</a></li>
            <li><a href="#">Prestamos</a></li>
            <li><a href="#">Promociones</a></li>
            <li><a href="#">Eventos</a></li>
            <li><a href="#">Transacciones</a></li>
      
            
            <li>
              <div className="dropdown">
                <button className="btn">
                  <span>Iniciar sesion</span>
                  <i className="material-icons"></i>
                </button>
                <ul>
                  <li className="active"><Link to="/loginUser">User</Link></li>
                  <li className="active"><Link to="/loginUser">Admin</Link></li>
                </ul>
              </div>
            </li>
          </ul>
          <h1 className="logo">KinalBridge</h1>
        </div>
      </nav>

    </>
  );
};
