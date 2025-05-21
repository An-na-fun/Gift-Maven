import React from "react";
import './Footer.css'; // Import the CSS file for styling
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // required for toggler
function footer() {
  return (
    <footer className="footer-content">
      
      <div className="footer-container">
        <div className="footer-section about">
          <h5>About Gift Maven</h5>
          <div className="footer-links">
            <a href="../pages/">Shop</a>
            <a href="#">Customized Order</a>
            <a href="#">About Us</a>
            <a href="#">Blog</a>
          </div>

        </div>
        <div className="footer-section help">  
            <h5>Help</h5>
            <div className="footer-links">
              <a href="#">FAQ</a>
              <a href="#">Returns</a>
              <a href="#">Shipping</a>
              <a href="#">Corporate Gifts</a>
              <a href="#">Contact Us</a>
              <a href="#">Accessibility</a>
            </div>
        </div>
        
        <div className="social-media">
            <h5>Follow Us</h5>
            <div className="footer-links">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <img src="https://img.icons8.com/ios-filled/50/ffffff/facebook-new.png" alt="Facebook" width="35" height="35"/>
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <img src="https://img.icons8.com/ios-filled/50/ffffff/instagram-new.png" alt="Instagram" width="35" height="35"/>
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <img src="https://img.icons8.com/ios-filled/50/ffffff/twitter.png" alt="Twitter" width="35" height="35"/>
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <img src="https://img.icons8.com/ios-filled/50/ffffff/linkedin.png" alt="LinkedIn" width="35" height="35"/>
              </a>
              <a href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer">
              <img src="https://img.icons8.com/ios-filled/50/ffffff/pinterest.png" alt="Pinterest" width="35" height="35"/>
              </a>
            </div>
        </div>
      </div>

      <div className="footer-bottom">
        <span>Gift Maven is a registered trademark of My Company. All rights reserved.</span>
        <span className="footer-separator">|</span>
        <span>1234 Street Name, City, State, 12345</span>
        <span className="footer-separator">|</span>
        <span>Phone: (123) 456-7890</span>
        <span className="footer-separator">|</span>
        <span>Email: info@mycompany.com</span>
        <span className="footer-separator">|</span>
        <span>© 2023 My Company</span>
        <span className="footer-separator">|</span>
        <a href="#">Privacy Policy</a>
        <span className="footer-separator">|</span>
        <a href="#">Terms of Service</a>
      </div>
    </footer>
  );
}
export default footer;