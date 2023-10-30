import React from 'react';
import './Footer.scss';
import logo from "../assets/img/Rectangle (61).png"

import img1 from "../assets/img/Frame (47).png";
import img2 from "../assets/img/Frame (46).png";
import img3 from "../assets/img/Frame (45).png";
import img4 from "../assets/img/Frame (44).png";
import img5 from "../assets/img/Frame (43).png";
import img6 from "../assets/img/Frame (42).png";
import img7 from "../assets/img/Frame (41).png";
import img8 from "../assets/img/Frame (40).png";

const Footer = () => {
    const items = [img1, img2, img3, img4, img5, img6, img7, img8]
  return (
    <div>
      <footer>
        <div className="container footer-rows">
            <div className="footer-logo">
                <img src={logo} alt="" />
            </div>
            <div className="footer-links">
                <ul>
                    <li><h3 className='head'>Explore</h3></li>
                <li><a href="">Electric Skateboard</a></li>
                    <li><a href="">Electric Scooter</a></li>
                    <li><a href="">Acsessiories</a></li>
                    <li><a href="">Gift card</a></li>
                    <li><a href="">Warranty</a></li>
                    <li><a href="">Electric Skateboard</a></li>
                    <li><a href="">Quick Start Guide</a></li>
                    <li><a href="">Contact</a></li>
                    <li><a href="">Accessibility Statement</a></li>
                </ul>
            </div>
            <div className="footer-desc">
                <ul>
                    <li><h3 className='head'>About Boosted USA</h3></li>
                    <li>Boosted empowers people everywhere to commute across their cities, campuses, and communities in ways that were never before possible. Boosted is solving one of the biggest problems people face each day: transportation.</li>
                    <li>CaliRides LLC - DBA Boosted USA</li>
                    <li>1281 Andersen Drive Ste. K</li>
                    <li>San Rafael, CA 94901</li>
                </ul>
            </div>
        </div>
      </footer>
      <div className="pay">
        <div className="container-small bottom">
            <p>© 2021 <span>Boosted USA</span>. All Rights Reserved. <span>Terms of Service</span> . Built by <span>Senorita</span></p>
            <div className="payment">
                {items.map((item , i) => (
                    <img src={item} alt=""  key={i}/>
                ))}
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
