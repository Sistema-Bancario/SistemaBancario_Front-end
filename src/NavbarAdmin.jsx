import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "react-bootstrap";


const NavbarAdmin = () => {
  const logOut = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };
  return (
    <>
      <div className="contaaainer">
        <div id="sidebar">
          <div className="sidebar-header">
            <h1 className="sidebar-title">BAC</h1>
            <div className="circle-image">
              <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="fotoperfil" />
            </div>
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
          </div>

          <nav className="sidebar-navigation">
            <ul>
              <li className="active">
                <Link className='botoagregarUsuarios' to="/createUser">
                  <i className="fa fa-user-plus"></i>
                  <span className="tooltip">Agregar Usuarios</span>
                </Link>
              </li>
              <li>
                <i className="fa fa-plus-circle"></i>
                <span className="tooltip">Crear Cuenta</span>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default NavbarAdmin;
