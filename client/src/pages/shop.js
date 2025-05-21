import React from "react";
import Navbar from "../components/Navbar/Navbar.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // required for toggler
import Footer from "../components/Footer/Footer.js";
function shop() {
  return (
    
    <div>
      <Navbar />
      <main className="container">
        <h1 className="text-center my-4">Welcome to the Shop</h1>
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <img src="https://via.placeholder.com/150" className="card-img-top" alt="Product 1" />
              <div className="card-body">
                <h5 className="card-title">Product 1</h5>
                <p className="card-text">$10.00</p>
                <a href="#" className="btn btn-primary">Add to Cart</a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
export default shop;