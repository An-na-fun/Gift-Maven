import React from "react";
import './Hero.css';
export default function Hero() {
  return (
    <div className="hero container-fluid text-center">
      
      <div className="hero-content">
        <div className="hero-logo">
          <h1 className="display-4">Gift-Maven</h1>
          <p className="lead">Your one-stop shop for all your gifting needs!</p>
          <button className="btn btn-primary btn-sm" type="button">Shop Now</button>
        </div>
        
        <div className ="hero-featured-products">
          <div className="row">
            <div className="col-md-4">
              <img src="https://via.placeholder.com/150" alt="product1" className="img-fluid"/>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}


