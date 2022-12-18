import React from "react";
import Navbar from "./Navbar";

function LandingPage() {
  return (
    <div className="App">
      <Navbar />
      <section class="hero-section">
        <div class="hero-items owl-carousel">
          <div
            class="single-hero-items set-bg"
            data-setbg="assets/img/hero-1.jpg"
          >
            <div class="container">
              <div class="row">
                <div class="col-lg-5">
                  <span>Hotel</span>
                  <h1>Special offer</h1>
                  <p></p>
                  <a href="#" class="primary-btn">
                    Book Now
                  </a>
                </div>
              </div>
              <div class="off-card">
                <h2>
                  30% <span>OFF</span>
                </h2>
              </div>
            </div>
          </div>
          <div
            class="single-hero-items set-bg"
            data-setbg="assets/img/hero-2.jpg"
          >
            <div class="container">
              <div class="row">
                <div class="col-lg-5">
                  <span>Hotel</span>
                  <h1>Special offer</h1>
                  <p></p>
                  <a href="#" class="primary-btn">
                    Book Now
                  </a>
                </div>
              </div>
              <div class="off-card">
                <h2>
                  30% <span>OFF</span>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div class="banner-section spad">
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-4">
              <div class="single-banner">
                <img src="assets/img/banner-1.jpg" alt="" />
                <div class="inner-text">
                  <h4>Single</h4>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="single-banner">
                <img src="assets/img/banner-2.jpg" alt="" />
                <div class="inner-text">
                  <h4>Double</h4>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="single-banner">
                <img src="assets/img/banner-3.jpg" alt="" />
                <div class="inner-text">
                  <h4>Family</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section class="women-banner spad">
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-3">
              <div
                class="product-large set-bg"
                data-setbg="assets/img/food-large.jpg"
              >
                <h2>Foods</h2>
              </div>
            </div>
            <div class="col-lg-8 offset-lg-1">
              <div class="filter-control">
                <ul>
                  <li class="active">Dishes</li>
                  <li id="toggle">Beverages</li>
                  <li>Desserts</li>
                  <li>Appetizer</li>
                </ul>
              </div>

              <div class="product-slider owl-carousel">
                <div class="product-item">
                  <div class="pi-pic">
                    <img src="assets/img/food-1.jpg" alt="" />
                    <div class="sale">Sale</div>
                    <div class="icon">
                      <i class="icon_heart_alt"></i>
                    </div>
                    <ul>
                      <li class="w-icon active">
                        <a href="/menu">
                          <i class="icon_bag_alt"></i>
                        </a>
                      </li>
                      <li class="quick-view">
                        <a href="#">+ Quick View</a>
                      </li>
                      <li class="w-icon">
                        <a href="#">
                          <i class="fa fa-random"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div class="pi-text">
                    <div class="catagory-name">Foods</div>
                    <a href="/menu">
                      <h5>Burger</h5>
                    </a>
                    <div class="product-price">$10.00</div>
                  </div>
                </div>
                <div class="product-item">
                  <div class="pi-pic">
                    <img src="assets/img/food-2.jpg" alt="" />
                    <div class="icon">
                      <i class="icon_heart_alt"></i>
                    </div>
                    <ul>
                      <li class="w-icon active">
                        <a href="/menu">
                          <i class="icon_bag_alt"></i>
                        </a>
                      </li>
                      <li class="quick-view">
                        <a href="#">+ Quick View</a>
                      </li>
                      <li class="w-icon">
                        <a href="/menu">
                          <i class="fa fa-random"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div class="pi-text">
                    <div class="catagory-name">Foods</div>
                    <a href="#">
                      <h5>BBQ Prawns</h5>
                    </a>
                    <div class="product-price">$10.00</div>
                  </div>
                </div>
                <div class="product-item">
                  <div class="pi-pic">
                    <img src="assets/img/food-3.jpg" alt="" />
                    <div class="icon">
                      <i class="icon_heart_alt"></i>
                    </div>
                    <ul>
                      <li class="w-icon active">
                        <a href="/menu">
                          <i class="icon_bag_alt"></i>
                        </a>
                      </li>
                      <li class="quick-view">
                        <a href="/menu">+ Quick View</a>
                      </li>
                      <li class="w-icon">
                        <a href="/menu">
                          <i class="fa fa-random"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div class="pi-text">
                    <div class="catagory-name">Foods</div>
                    <a href="/menu">
                      <h5>Pineapple</h5>
                    </a>
                    <div class="product-price">$9.00</div>
                  </div>
                </div>
                <div class="product-item">
                  <div class="pi-pic">
                    <img src="assets/img/food-4.jpg" alt="" />
                    <div class="icon">
                      <i class="icon_heart_alt"></i>
                    </div>
                    <ul>
                      <li class="w-icon active">
                        <a href="/menu">
                          <i class="icon_bag_alt"></i>
                        </a>
                      </li>
                      <li class="quick-view">
                        <a href="/menu">+ Quick View</a>
                      </li>
                      <li class="w-icon">
                        <a href="/menu">
                          <i class="fa fa-random"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div class="pi-text">
                    <div class="catagory-name">Foods</div>
                    <a href="/menu">
                      <h5>BBQ</h5>
                    </a>
                    <div class="product-price">$12.00</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        class="deal-of-week set-bg spad"
        data-setbg="assets/img/time-bg.jpg"
      >
        <div class="container">
          <div class="col-lg-6 text-center">
            <div class="section-title">
              <h2>Deal Of The Week</h2>
              <p>
                <br />
              </p>
              <div class="product-price">
                $20.00
                <span>/ Room</span>
              </div>
            </div>
            <div class="countdown-timer" id="countdown">
              <div class="cd-item">
                <span>56</span>
                <p>Days</p>
              </div>
              <div class="cd-item">
                <span>12</span>
                <p>Hrs</p>
              </div>
              <div class="cd-item">
                <span>40</span>
                <p>Mins</p>
              </div>
              <div class="cd-item">
                <span>52</span>
                <p>Secs</p>
              </div>
            </div>
            <a href="#" class="primary-btn">
              Book Now
            </a>
          </div>
        </div>
      </section>

      <section class="man-banner spad">
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-8">
              <div class="filter-control">
                <ul>
                  <li class="active">Single</li>
                  <li>Double</li>
                  <li>Family</li>
                </ul>
              </div>
              <div class="product-slider owl-carousel">
                <div class="product-item">
                  <div class="pi-pic">
                    <img src="assets/img/room-1.jpg" alt="" />
                    <div class="sale">Sale</div>
                    <div class="icon">
                      <i class="icon_heart_alt"></i>
                    </div>
                    <ul>
                      <li class="w-icon active">
                        <a href="#">
                          <i class="icon_bag_alt"></i>
                        </a>
                      </li>
                      <li class="quick-view">
                        <a href="#">+ Quick View</a>
                      </li>
                      <li class="w-icon">
                        <a href="#">
                          <i class="fa fa-random"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div class="pi-text">
                    <div class="catagory-name">Rooms</div>
                    <a href="#">
                      <h5>Single</h5>
                    </a>
                    <div class="product-price">$30.00</div>
                  </div>
                </div>
                <div class="product-item">
                  <div class="pi-pic">
                    <img src="assets/img/room-2.jpg" alt="" />
                    <div class="icon">
                      <i class="icon_heart_alt"></i>
                    </div>
                    <ul>
                      <li class="w-icon active">
                        <a href="#">
                          <i class="icon_bag_alt"></i>
                        </a>
                      </li>
                      <li class="quick-view">
                        <a href="#">+ Quick View</a>
                      </li>
                      <li class="w-icon">
                        <a href="#">
                          <i class="fa fa-random"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div class="pi-text">
                    <div class="catagory-name">Rooms</div>
                    <a href="#">
                      <h5>Double</h5>
                    </a>
                    <div class="product-price">$40.00</div>
                  </div>
                </div>
                <div class="product-item">
                  <div class="pi-pic">
                    <img src="assets/img/room-3.jpg" alt="" />
                    <div class="icon">
                      <i class="icon_heart_alt"></i>
                    </div>
                    <ul>
                      <li class="w-icon active">
                        <a href="#">
                          <i class="icon_bag_alt"></i>
                        </a>
                      </li>
                      <li class="quick-view">
                        <a href="#">+ Quick View</a>
                      </li>
                      <li class="w-icon">
                        <a href="#">
                          <i class="fa fa-random"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div class="pi-text">
                    <div class="catagory-name">Rooms</div>
                    <a href="#">
                      <h5>Family</h5>
                    </a>
                    <div class="product-price">$45.00</div>
                  </div>
                </div>
                <div class="product-item">
                  <div class="pi-pic">
                    <img src="assets/img/room-4.jpg" alt="" />
                    <div class="icon">
                      <i class="icon_heart_alt"></i>
                    </div>
                    <ul>
                      <li class="w-icon active">
                        <a href="#">
                          <i class="icon_bag_alt"></i>
                        </a>
                      </li>
                      <li class="quick-view">
                        <a href="#">+ Quick View</a>
                      </li>
                      <li class="w-icon">
                        <a href="#">
                          <i class="fa fa-random"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div class="pi-text">
                    <div class="catagory-name">Rooms</div>
                    <a href="#">
                      <h5>Double</h5>
                    </a>
                    <div class="product-price">$35.00</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-3 offset-lg-1">
              <div
                class="product-large set-bg m-large"
                data-setbg="assets/img/room-large.jpg"
              >
                <h2>Book A Room</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div class="instagram-photo">
        <div
          class="insta-item set-bg"
          data-setbg="assets/img/insta-1.jpg"
        ></div>
        <div
          class="insta-item set-bg"
          data-setbg="assets/img/insta-2.jpg"
        ></div>
        <div
          class="insta-item set-bg"
          data-setbg="assets/img/insta-3.jpg"
        ></div>
        <div
          class="insta-item set-bg"
          data-setbg="assets/img/insta-4.jpg"
        ></div>
        <div
          class="insta-item set-bg"
          data-setbg="assets/img/insta-5.jpg"
        ></div>
        <div
          class="insta-item set-bg"
          data-setbg="assets/img/insta-6.jpg"
        ></div>
      </div>

      <section class="latest-blog spad">
        <div class="container"></div>
      </section>

      <div class="partner-logo"></div>

      <footer class="footer-section">
        <div class="container">
          <div class="row">
            <div class="col-lg-3">
              <div class="footer-left">
                <div class="footer-logo">
                  <a href="#">Hotel</a>
                </div>
                <ul>
                  <li>Address: No:11 Galle Road Colombo</li>
                  <li>Phone: +76 111 1111</li>
                  <li>Email: hotelmanage@gmail.com</li>
                </ul>
                <div class="footer-social">
                  <a href="#">
                    <i class="fa fa-facebook"></i>
                  </a>
                  <a href="#">
                    <i class="fa fa-instagram"></i>
                  </a>
                  <a href="#">
                    <i class="fa fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i class="fa fa-pinterest"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-lg-2 offset-lg-1">
              <div class="footer-widget">
                <h5>Information</h5>
                <ul>
                  <li>
                    <a href="#">About Us</a>
                  </li>
                  <li>
                    <a href="#">Checkout</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                  <li>
                    <a href="#">Serivius</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-2">
              <div class="footer-widget">
                <h5>My Account</h5>
                <ul>
                  <li>
                    <a href="#">My Account</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                  <li>
                    <a href="#">Cart</a>
                  </li>
                  <li>
                    <a href="#">Shop</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="newslatter-item">
                <h5>Join Our Newsletter Now</h5>
                <p>
                  Get E-mail updates about our latest hotels and special offers.
                </p>
                <form action="#" class="subscribe-form">
                  <input type="text" placeholder="Enter Your Mail" />
                  <button type="button">Subscribe</button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div class="copyright-reserved">
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <div class="payment-pic">
                  <img src="assets/img/payment-method.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;
