import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      class="navbar navbar-expand-lg shadow-sm"
      style={{ backgroundColor: "#fff" }}
    >
      <div class="container-fluid p-1" style={{ marginLeft: "10%" }}>
        <div>
          <Link to="/">
            <img
              src="media/images/logo.svg"
              alt="zerodhaLogo"
              style={{ width: "22%" }}
            />
          </Link>
        </div>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <Link class="nav-link active text-muted" to="/signup">
                Signup
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active text-muted" to="/about">
                About
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active text-muted" to="products">
                Products
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active text-muted" to="pricing">
                Pricing
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active text-muted" to="support">
                Support
              </Link>
            </li>
            <li class="nav-item">
              <a class="nav-link active text-muted" href="#">
                <i class="fa fa-bars" aria-hidden="true"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
