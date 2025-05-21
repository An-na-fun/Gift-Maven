import React from "react";
import './Navbar.css';
import logo from '../../assets/logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // required for toggler
import { Link } from "react-router-dom";
export default function Navbar() {
  return (  
    <nav className=" nav navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="navbar-brand">
        <Link to="/" className="d-flex align-items-center text-decoration-none">
          <img src={logo} alt="logo" width="30" height="30" className="d-inline-block align-top" />
          <span className="navbar-brand ms-2">GIFT MAVEN</span>
        </Link>
      </div>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="../pages/shop.js">Shop</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Customized Order</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">About Us</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Blog</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Contact Us</a>
          </li>
        </ul>
      </div>
      <div>
        <a className="user" href="#"><img src="https://img.icons8.com/ios-filled/50/ffffff/user.png" alt="user" width="35" height="35"/></a>
        <a className="search" href="#"><img src="https://img.icons8.com/ios-filled/50/ffffff/search--v1.png" alt="search" width="35" height="35"/></a>
        <a className="shop-cart" href="#"><img src="https://img.icons8.com/ios-filled/50/ffffff/shopping-cart.png" alt="shopping-cart" width="35" height="35"/></a> 
      </div>
    </nav>
  );
}