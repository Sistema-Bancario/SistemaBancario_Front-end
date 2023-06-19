import React from 'react'
import { Link } from 'react-router-dom';
import { Button } from "react-bootstrap";


const NavbarUser = () => {
   const logOut = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };
  return (
    <>
      <div className="contaaainer">
        <div id="sidebar">
          <div className="sidebar-header">
            {/* <Link to="/listaCuentas"> */}
              <h1 className="sidebar-title">BAC CREDOMATIC</h1>
            {/* </Link> */}
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
              <li className="">
                <Link className='botoagregarUsuarios' to="/misCuentas">
                  <i className="fa fa-user"></i>
                  <span className="tooltip">Ver cuentas</span>
                </Link>
              </li>
              <li>
                <Link className='botoagregarUsuarios' to="/createTransaction">
                  <i className="fa fa-exchange"></i>
                  <span className="tooltip">Transferencias</span>
                </Link>
              </li>
              <li>
                <Link className='botoagregarUsuarios' to="/ListaTransacciones">
                  <i className="fa fa-history"></i>
                  <span className="tooltip">Historial</span>
                </Link>
              </li>
              
            </ul>
          </nav>


        </div>
      </div>

    </>
  );
};

export default NavbarUser
