import React from 'react';
import './FooterSection.css';

const FooterSection = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-social">
          <h3>Follow Us</h3>
          <ul>
            <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            <li><a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a></li>
            <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          </ul>
        </div>
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>Email: hello@isitadeepfake.com</p>
          <p>Phone: +97798xxxxxxxx</p>
        </div>
      </div>
      <div className="footer-copyright">
        <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
      </div>
    </footer>
  );
};

export default FooterSection;
