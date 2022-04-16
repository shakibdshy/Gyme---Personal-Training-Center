import React from "react";
import { Link } from "react-router-dom";
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className='footer-bottom bg-black-700'>
        <div className='container'>
          <div className='row'>
            <div className='col'>
              <p>
                Copyright {" "}
                <Link to='/' className='red'>
                  GYMEE
                </Link>{" "}
                @{new Date().getFullYear()} All Rights Reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
