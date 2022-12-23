import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import jwt from "jwt-decode";

const AdminNavbar = () => {
  const setData2 = () => {
    const token = localStorage.getItem("token");
    if (token) {
      const tokenData = jwt(token);
      return tokenData.Username;
    } else {
      return "Login";
    }
  };

  setData2();

  return (
    <>
      <div className="App">
        <header class="header-section">
          <div class="header-top">
            <div class="container">
              <div class="ht-left">
                <div class="mail-service">
                  <i class=" fa fa-envelope"></i>
                  hotelmanage@gmail.com
                </div>
                <div class="phone-service">
                  <i class=" fa fa-phone"></i>
                  +76 111 1111
                </div>
              </div>
              <div class="ht-right">
                <a href="#" class="login-panel">
                  <i class="fa fa-user"></i> {setData2()}
                </a>
                <div class="lan-selector">
                  <select
                    class="language_drop"
                    name="countries"
                    id="countries"
                    style={{ width: "300px" }}
                  >
                    <option
                      value="yt"
                      data-image="assets/img/flag-1.jpg"
                      data-imagecss="flag yt"
                      data-title="English"
                    >
                      English
                    </option>
                  </select>
                </div>
                <div class="top-social">
                  <a href="#">
                    <i class="ti-facebook"></i>
                  </a>
                  <a href="#">
                    <i class="ti-twitter-alt"></i>
                  </a>
                  <a href="#">
                    <i class="ti-linkedin"></i>
                  </a>
                  <a href="#">
                    <i class="ti-pinterest"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="container"></div>
          <div class="nav-item">
            <div class="container">
              <div class="nav-depart">
                <div class="depart-btn">
                  <i class="ti-menu"></i>
                  <span>All departments</span>
                  <ul class="depart-hover">
                    <li class="active">
                      <a href="#">Room Division</a>
                    </li>
                    <li>
                      <a href="#">Sales & Marketing</a>
                    </li>
                    <li>
                      <a href="#">Food & Beverage</a>
                    </li>
                    <li>
                      <a href="#">Human Resources</a>
                    </li>
                    <li>
                      <a href="#">Kitchen</a>
                    </li>
                    <li>
                      <a href="#">Gym</a>
                    </li>
                    <li>
                      <a href="#">Housekeeping</a>
                    </li>
                    <li>
                      <a href="#">Accounting</a>
                    </li>
                  </ul>
                </div>
              </div>
              <nav class="nav-menu mobile-menu">
                <ul>
                  <li>
                    <a href="/admin-dashboard">Dashboard</a>
                  </li>
                  <li>
                    <a href="/rooms">Rooms</a>
                  </li>
                  <li>
                    <a href="/listedRooms">Bookings</a>
                  </li>
                  <li>
                    <a href="/manage-menu">Food</a>
                  </li>
                  <li>
                    <a href="/orders">Orders</a>
                  </li>
                  <li>
                    <a href="/employees">Employees</a>
                  </li>
                  {/* <li>
                    <a href="#">Contact</a>
                  </li> */}
                  <li>
                    <a href="#">Pages</a>
                    <ul class="dropdown">
                      <li>
                        <a href="#">Cart</a>
                      </li>
                      <li>
                        <a href="#">Checkout</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </nav>
              <div id="mobile-menu-wrap"></div>
            </div>
          </div>
        </header>
      </div>
    </>
  );
};

export default AdminNavbar;
