import React from "react";

export const NavBar = () => {
  
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
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Category</a></li>
            <li>
              <div className="dropdown">
                <button className="btn">
                  <span>Sing in</span>
                  <i className="material-icons"></i>
                </button>
                <ul>
                  <li className="active"><a href="#">User</a></li>
                  <li><a href="#">Admin</a></li>
                </ul>
              </div>
            </li>
          </ul>
          <h1 className="logo">Bank</h1>
        </div>
      </nav>

    </>
  );
};
