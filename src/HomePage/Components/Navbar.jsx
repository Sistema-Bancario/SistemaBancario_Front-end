import React from "react";
import { Link } from 'react-router-dom';
import { Button } from "react-bootstrap";


export const Navbar = () => {
  const logOut = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };
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
                <button className="btnle">
                  <span>Iniciar sesion</span>
                  <i className="material-icons"></i>
                </button>
                <ul>
                  <li className="active"><Link to="/loginUser">User</Link></li>
                  <li className="active"><Link to="/LoginAdminUser">Admin</Link></li>
                </ul>
              </div>
            </li>
            <li>
              {localStorage.getItem("token") && (
                <form className="w-25">
                  <Link
                    aria-current="page"
                    to="/"
                    onClick={() => logOut()}
                  >
                    <Button
                      color="warning"
                      aria-current="page"
                      to="/"
                      onClick={() => logOut()}
                    >
                      Cerrar Sesion{" "}
                    </Button>
                  </Link>
                </form>
              )}
            </li>
          </ul>
          <Link to="/">
            <h1 className="logo">KinalBridge</h1>
          </Link>
        </div>
      </nav>

    </>
  );
};

