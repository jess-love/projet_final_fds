/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React from "react";

export const Navigation = () => {
  return (
    <div className="principal">
      <div className="header-1">
        <a href="#" className="logo">
          <i className="fas fa-shopping-bag"></i> shopping
        </a>

        <div className="form-container">
          <form action="">
            <input type="search" placeholder="search products" id="search" />
            <label for="search" className="fas fa-search"></label>
          </form>
        </div>
      </div>

      <div className="header-2">
        <div id="menu" className="fas fa-bars"></div>

        <nav className="navbar">
          <ul>
            <li>
              <a className="active" href="#home">
                home
              </a>
            </li>
            <li>
              <a href="#arrival">arrival</a>
            </li>
            <li>
              <a href="#featured">featured</a>
            </li>
            <li>
              <a href="#gallery">gallery</a>
            </li>
            <li>
              <a href="#deal">deal</a>
            </li>
          </ul>
        </nav>

        <div className="icons">
          <a href="#" className="fas fa-heart"></a>
          <a href="#" className="fas fa-shopping-cart"></a>
          <a href="#" className="fas fa-user"></a>
        </div>
      </div>
    </div>
  );
};
export default Navigation;
