import React from "react";
import { Link, Navigate } from 'react-router-dom';
import { Button } from "react-bootstrap";
import { MDBBtn } from "mdb-react-ui-kit";


export const NavBar = () => {
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
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/ListaUsuarios">Usuarios</Link>
            </li>
            <li>
            <Link to="/ListaUsuariosAdmin">Administradores</Link>
            </li>
            <li>
              <div className="dropdown">
                <button className="btn">
                  <span>Sing in</span>
                  <i className="material-icons"></i>
                </button>
                <ul>
                  <li className="active">
                    <Link to="/loginUser">User</Link>
                  </li>
                  <li>
                    <Link to="/loginAdminUser">Admin</Link>
                  </li>
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
            <h1 className="logo">Bank</h1>
          </Link>
        </div>
      </nav>
    </>
  );
};
