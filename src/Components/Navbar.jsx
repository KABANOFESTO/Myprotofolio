import React, { useState } from 'react';
import logo from '../assets/images/ninja.png';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light fixed-top affix-top" data-spy="affix" data-offset-top="0">
            <div className="container">
                <Link className="navbar-brand" to="/">
                    <img className="logoNav" src={logo} alt="Logo" />
                </Link>
                <button
                    className={`navbar-toggler ${isOpen ? '' : 'collapsed'}`}
                    type="button"
                    onClick={toggleNavbar}
                    aria-label="Toggle navigation"
                    style={{background: 'white'}}
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
                    <ul className="navbar-nav ml-auto align-items-center">
                        <li className="nav-item">
                            <ScrollLink
                                to="about"
                                smooth={true}
                                duration={500}
                                className="nav-link"
                                style={{ cursor: 'pointer' }}  // Ensure pointer cursor
                                onClick={toggleNavbar}
                            >
                                Who am I?
                            </ScrollLink>
                        </li>
                        <li className="nav-item">
                            <ScrollLink
                                to="service"
                                smooth={true}
                                duration={500}
                                className="nav-link"
                                style={{ cursor: 'pointer' }}  // Ensure pointer cursor
                                onClick={toggleNavbar}
                            >
                                Services
                            </ScrollLink>
                        </li>
                        <li className="nav-item">
                            <ScrollLink
                                to="achievement"
                                smooth={true}
                                duration={500}
                                className="nav-link"
                                style={{ cursor: 'pointer' }}  // Ensure pointer cursor
                                onClick={toggleNavbar}
                            >
                                Achievements
                            </ScrollLink>
                        </li>
                        <li className="nav-item">
                            <ScrollLink
                                to="experience"
                                smooth={true}
                                duration={500}
                                className="nav-link"
                                style={{ cursor: 'pointer' }}  // Ensure pointer cursor
                                onClick={toggleNavbar}
                            >
                                Experience
                            </ScrollLink>
                        </li>
                        <li className="nav-item">
                            <ScrollLink
                                to="certificates"
                                smooth={true}
                                duration={500}
                                className="nav-link"
                                style={{ cursor: 'pointer' }}  // Ensure pointer cursor
                                onClick={toggleNavbar}
                            >
                                Certificates
                            </ScrollLink>
                        </li>
                        <li className="nav-item">
                            {/* <a className="nav-link" href="#contact">Contact</a> */}
                            <ScrollLink
                                to="contact"
                                smooth={true}
                                duration={500}
                                className="nav-link"
                                style={{ cursor: 'pointer' }}  // Ensure pointer cursor
                                onClick={toggleNavbar}
                            >
                                Contact
                            </ScrollLink>
                        </li>
                        <li className="nav-item">
                            <a href="/festo.pdf" download="KABANO-Festo" className="btn btn-primary d-flex rounded ml-4">
                                <span>Resume</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
