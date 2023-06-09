  import React from 'react'

  const NavbarUser = () => {
    return (
      <>
        <div class="contaaainer">
          <div id="sidebar">
            <div class="sidebar-header">
              <h1 class="sidebar-title">Título del Sidebar</h1>
              <div class="circle-image">
                <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="fotoperfil" />
              </div>
            </div>

            <nav class="sidebar-navigation">
              <ul>
                <li class="active">
                  <i class="fa fa-share-alt"></i>
                  <span class="tooltip">Connections</span>
                </li>
                <li>
                  <i class="fa fa-hdd-o"></i>
                  <span class="tooltip">Devices</span>
                </li>
                <li>
                  <i class="fa fa-newspaper-o"></i>
                  <span class="tooltip">Contacts</span>
                </li>
                <li>
                  <i class="fa fa-print"></i>
                  <span class="tooltip">Fax</span>
                </li>
                <li>
                  <i class="fa fa-sliders"></i>
                  <span class="tooltip">Settings</span>
                </li>
              </ul>
            </nav>
          </div>
        </div>

      </>
    );
  };

  export default NavbarUser
