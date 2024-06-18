import React, { useState } from 'react';
import logo from '../assets/images/ninja.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light fixed-top affix-top" data-spy="affix" data-offset-top="0">
            <div className="container">
                <a className="navbar-brand" href="#">
                    <img className="logoNav" src={logo} alt="Logo" />
                </a>
                <button
                    className={`navbar-toggler ${isOpen ? '' : 'collapsed'}`}
                    type="button"
                    onClick={toggleNavbar}
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
                    <ul className="navbar-nav ml-auto align-items-center">
                        <li className="nav-item">
                            <a className="nav-link" href="#about">Who am I?</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#service">Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#portfolio">Achievements</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#testmonial">Experience</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#blog">Certificates</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contact">Contact</a>
                        </li>
                        <li className="nav-item">
                            <a href="assets/cvPDF.pdf" download="CV FESTO FESTO.pdf" className="btn btn-primary d-flex rounded ml-4">
                                <i>Resume</i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;