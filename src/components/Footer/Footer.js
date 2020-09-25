import React from 'react';
import paypalSrc from '../../assets/paypal2.png';
import './Footer.css';

const Footer = (props) => {
  return (
    <div className='footer'>
      <div className='footer_sub'>
        <div>
          <h4>About Us</h4>
          <h5>item one</h5>
          <h5>item two</h5>
          <h5>item three</h5>
          <h5>Item  four</h5>
        </div>
        <div>
          <h4>Customer Care</h4>
          <h5>item one</h5>
          <h5>item two</h5>
          <h5>item three</h5>
          <h5>Item  four</h5>
        </div>
        <div>
          <h4>Contact Us</h4>
          <h5>item one</h5>
          <h5>item two</h5>
          <h5>item three</h5>
          <h5>Item  four</h5>
        </div>
        <div style={{width:'320px'}}>
          <img src={paypalSrc} alt='paypal'/><br></br>
          <h5>We promise safe transactions!</h5>
        </div>
      </div>
      <div className='fontIcon'>
        <i className="fab fa-github"></i>
        <i className="fab fa-twitter"></i>
        <i className="fab fa-google-plus-g"></i>
      </div>
      <div>
        <h6>Terms and conditions | Privacy Policy | Sitemap</h6>
      </div>
    </div>
  );
}

export default Footer;