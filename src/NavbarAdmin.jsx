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
            <Link to="/ListaUsuarios" style={{ textDecoration: 'none' }}>
              <h1 className="sidebar-title">BAC CREDOMATIC</h1>
            </Link>
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
              <li >
                <Link className='botoagregarUsuarios' to="/createUser">
                  <i className="fa fa-user-plus"></i>
                  <span className="tooltip">Agregar Usuarios</span>
                </Link>
              </li>
              <li>
                <Link className='botoagregarUsuarios' to="/ListaUsuarios">
                  <i className="fa fa fa-eye"></i>
                  <span className="tooltip">Ver Usuarios</span>
                </Link>
              </li>
              <li>
                <Link className='botoagregarUsuarios' to="/createAccount  ">
                  <i className="fa fa-plus-circle"></i>
                  <span className="tooltip">Crear Cuenta</span>
                </Link>
              </li>

              <li>
                <Link className='botoagregarUsuarios' to="/createUserAdmin">
                  <i className="fa fa-user-plus"></i>
                  <span className="tooltip">Agregar Administradores</span>
                </Link>
              </li>
              <li>
                <Link className='botoagregarUsuarios' to="/ListaUsuariosAdmin">
                  <i className="fa fa fa-eye"></i>
                  <span className="tooltip">Ver Administradores</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default NavbarAdmin;
