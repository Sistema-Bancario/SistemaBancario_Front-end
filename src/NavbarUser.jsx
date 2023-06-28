import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "react-bootstrap";
import { apiUsuarioById } from './perfil/api/apiUser';

const NavbarUser = () => {
  const [usuario, setUsuario] = useState([]);

  const viewCliente = async () => {
    const getCliente = await apiUsuarioById();
    setUsuario(getCliente);
  };

  useEffect(() => {
    viewCliente();
  }, []);

  const logOut = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <>
      <div className="contaaainer">
        <div id="sidebar">
          <div className="sidebar-header">
            <h1 className="sidebar-title">BAC CREDOMATIC</h1>

            <div className="dropdown1">
              <button className="btnle1">
                <div className="circle-image">
                  <img src={usuario.img} alt="fotoperfil" />
                </div>
              </button>
              <ul className='lista'>
                <li>
                  <Link to="/miPerfil">Mi Perfil</Link>
                </li>
                <li>
                  <Link
                    aria-current="page"
                    to="/"
                    onClick={() => logOut()}
                  >
                    Cerrar Sesion
                  </Link>
                </li>
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
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default NavbarUser;
