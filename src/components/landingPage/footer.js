
import "../../styles/footer.css";

import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-column">
        <h3>About Us</h3>
       <p>We specialize in providing top-notch software and hardware solutions for all your laptop needs. From diagnostics to repairs, we ensure fast, reliable, and professional support.</p>
      </div>
      <div className="footer-column">
        <h3> Services</h3>
        <ul>
          <li><a href="#">Laptop Repairs

</a></li>
          <li><a href="#">Software Installation</a></li>
          <li><a href="#">Data Recovery</a></li>
        </ul>
      </div>
      <div className="footer-column">
        <h3>Contact Us</h3>
        <ul>
          <li><a href="#">Email: support@laptopsupport.com</a></li>
          <li><a href="#">Phone: +1-800-555-1234       </a></li>
          <li><a href="#"> Address :    123 Laptop Avenue, Tech City, TX 75001      </a></li>
        </ul>
      </div>
      <div className="footer-column">
        <h3> Follow Us</h3>
        <ul>
          <li><a href="#">Twitter</a></li>
          <li><a href="#">Linkdeln</a></li>
          <li><a href="#">Facebook</a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
