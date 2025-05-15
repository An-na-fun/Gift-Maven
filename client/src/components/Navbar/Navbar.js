import './Navbar.css';
import logo from '../../assets/logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // required for toggler
export default function Navbar() {
  return (  
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="navbar-brand">
        <img src={logo} alt="logo" width="30" height="30" className="d-inline-block align-top" />
        <a className="navbar-brand" href="#">Gift-Maven</a>
      </div>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Products</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Contact Us</a>
          </li>
        </ul>
      </div>
      <div>
        <button className="btn btn-outline-light" type="button">Custom order</button>
        <a className="shop-cart" href="#"><img src="https://img.icons8.com/ios-filled/50/ffffff/shopping-cart.png" alt="shopping-cart" width="40" height="40"/></a> 
      </div>
    </nav>
  );
}