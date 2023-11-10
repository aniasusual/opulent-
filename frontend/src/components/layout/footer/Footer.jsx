import React from "react";
import SocialIcons from '../../../utility/SocialIcons'
import "./footer.scss"
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <a href="/" className='footer_logo'>Opulent Ornaments</a>

      <div className="subscription">
        <h3>SIGN UP, GET REWARDS.</h3>
        <span>Subscribe to recieve updates, find out about special launches, and more! EMAIL ADDRESS</span>
        <div className="subscribe">
          <input type="email" placeholder="Enter email" />
          <button>Subscribe</button>
        </div>
      </div>

      <div className="otherContent">
        <div className="shop">
          <h2>Shop</h2>
          <div className="Items">
            <Link><div>Rings</div></Link>
            <Link><div>Pets</div></Link>
            <Link><div>Women's Rings</div></Link>
            <Link><div>Accessories</div></Link>
            <Link><div>Men's Rings</div></Link>
            <Link><div>Sales</div></Link>
          </div>
        </div>

        <div className="about">
          <h2>About</h2>
          <div className="Items">
            <Link><div>Sizing</div></Link>
            <Link><div>Opulent Ambassdors</div></Link>
            <Link><div>Sustainability</div></Link>
            <Link><div>Store Locator</div></Link>
            <Link><div>Opulent Life</div></Link>
            <Link><div>Partners</div></Link>
          </div>
        </div>

        <div className="info">
          <h2>Info</h2>
          <div className="Items">
            <Link><div>Contact</div></Link>
            <Link><div>FAQ</div></Link>
            <Link><div>Policies</div></Link>
            <Link><div>Order Status</div></Link>
            <Link><div>Terms</div></Link >
            <div>Privacy</div>
          </div >


        </div >
      </div >
      <SocialIcons position='footer__socialicons' />
      <div className="footer__copyright">
        <small>&copy; {new Date().getFullYear()} Opulent. All rights reserved.</small>
      </div>
    </footer >
  );
};

export default Footer;