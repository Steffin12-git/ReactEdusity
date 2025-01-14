import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import menuu_icon from '../../assets/menu-icon.png'

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);
  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  }

  return (
    <nav className={`container ${sticky ? "dark-nav" : ""}`}>
       <Link to="hero" smooth={true} offset={-260} duration={500}><img src={logo} alt="" className="logo" /></Link>
      <ul className= {mobileMenu ? '' : 'hide-mobile-menu'} >
        <li>
          {" "}
          <Link to="hero" smooth={true} offset={-260} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="programs" smooth={true} offset={-230} duration={500}>
            Program
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} offset={-110} duration={500}>
            About us
          </Link>
        </li>
        <li>
          <Link to="campus" smooth={true} offset={-220} duration={500}>
            Campus
          </Link>
        </li>
        <li>
          <Link to="testimonials" smooth={true} offset={-220} duration={500}>
            Testimonials
          </Link>
        </li>
        <li>
          <Link className="btn" to="contact" smooth={true} offset={-220} duration={500}>Contact us</Link>
        </li>
      </ul>
      <img src={menuu_icon} alt="" className="menu-icon" onClick={toggleMenu}/>
    </nav>
  );
};

export default Navbar;
