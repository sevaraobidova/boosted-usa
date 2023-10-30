import './Header.scss';
import logoImage from "../assets/img/Rectangle (63).png";
import React, { useState } from 'react';
function Header() {
    const [isHidden, setHidden] = useState(true);
    const toggleClass = () => {
        setHidden(!isHidden);
    }
   
    return(
        <>
        <header>
           <div className="container">
           <div className="header-top">
                <p>Financing option available at checkout.</p>
            </div>
            <nav className='navbar'>
                <div className="logo">
                    <img src={logoImage} alt="" />
                </div>
                <ul className='nav-link'>
                    <li><a href="">Electric Skateboard</a></li>
                    <li><a href="">Electric Scooter</a></li>
                    <li><a href="">Acsessiories</a></li>
                    <li><a href="">Gift card</a></li>
                    <li><a href="">More info</a></li>
                </ul>
                <ul className={`nav-responsive ${isHidden ? 'hidden' : ''}`}>
                    <li><i className="fa-solid fa-x res-bar {}" onClick={toggleClass}></i></li>
                <li><a href="">Electric Skateboard</a></li>
                    <li><a href="">Electric Scooter</a></li>
                    <li><a href="">Acsessiories</a></li>
                    <li><a href="">Gift card</a></li>
                    <li><a href="">More info</a></li>
                </ul>
                <div className="nav-icons">
                    <a href=""><i className="fa-regular fa-circle-user"></i></a>
                    <a href=""><i className="fa-solid fa-cart-shopping"></i></a>
                </div>
                <i className="fa-solid fa-bars res--bar" onClick={toggleClass}></i>
            </nav>
           </div>
        </header>
        </>
    )
}

export default Header;