import React from "react";

function Navbar() {
  return (
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
              <a href="/sign-in" class="login-panel">
                <i class="fa fa-user"></i>Login
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
                <li class="active">
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/booking">ROOMS</a>
                </li>
                <li>
                  <a href="#">Tap to Order</a>
                  <ul class="dropdown">
                    <li>
                      <a href="/menu">Dishes</a>
                    </li>
                    <li>
                      <a href="/menu">Beverage</a>
                    </li>
                    <li>
                      <a href="/menu">Desserts</a>
                    </li>
                    <li>
                      <a href="/menu">Appertizer</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
                <li>
                  <a href="#">Pages</a>
                  <ul class="dropdown">
                    <li>
                      <a href="/about">About</a>
                    </li>
                    <li>
                      <a href="/services">Services</a>
                    </li>
                    <li>
                      <a href="#">Cart</a>
                    </li>
                    <li>
                      <a href="#">Checkout</a>
                    </li>
                    <li>
                      <a href="/sign-up">Register</a>
                    </li>
                    <li>
                      <a href="/sign-in">Login</a>
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
  );
}

export default Navbar;
