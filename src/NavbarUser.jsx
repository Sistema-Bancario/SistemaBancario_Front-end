import React from 'react'
import { Link } from 'react-router-dom';
import { Button } from "react-bootstrap";
import { Profile } from "./perfil/components/Profile";

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

            
              <div className="dropdown1">
                <button className="btnle1">
                  <div className="circle-image">
                    <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="fotoperfil" />
                  </div>

                 
                </button>
                <ul className='lista'>
                  <a className="active"><Link to="/miPerfil">Mi Perfil</Link></a>
                  <br />
                  <a className="active"><Link
                  aria-current="page"
                  to="/"
                  onClick={() => logOut()}
                >
                  <Link
                    
                    aria-current="page"
                    to="/"
                    onClick={() => logOut()}
                  >
                    Cerrar Sesion{" "}
                  </Link>
                </Link></a>
                </ul>
              </div>
            
            
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
