import React from 'react'
import { Link } from 'react-router-dom';

const NavbarUser = () => {
  return (
    <>
      <div class="contaaainer">
        <div id="sidebar">
          <div class="sidebar-header">
            <h1 class="sidebar-title">BAC</h1>
            <div class="circle-image">
              <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="fotoperfil" />
            </div>
          </div>

          <nav class="sidebar-navigation">
            <ul>
              <li class="active">
                <Link className='botoagregarUsuarios' to="/createUser">
                  <i class="fa fa-user"></i>
                  <span class="tooltip">Ver cuentas</span>
                </Link>
              </li>
              <li>
                <Link className='botoagregarUsuarios' to="/createUser">
                  <i class="fa fa-exchange"></i>
                  <span class="tooltip">Transferencias</span>
                </Link>
              </li>
              <li>
                <Link className='botoagregarUsuarios' to="/createUser">
                  <i class="fa fa-history"></i>
                  <span class="tooltip">Historial</span>
                </Link>
              </li>
              <li>
                <Link className='botoagregarUsuarios' to="/createUser">
                  <i class="fa fa-star"></i>
                  <span class="tooltip">Favoritos</span>
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
