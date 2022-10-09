import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from 'react-router-dom';

const Header = () => {
    return (
        <nav className=" navbar navbar-expand-lg navbar-light bg-light">
            <div className="container d-flex">
                <a className="navbar-brand mt-0 " href="/">
                    <img src="https://img.icons8.com/color/2x/bootstrap.png" alt="logo" /> 
                    <span className='logo_text'> Media Library</span>
                </a>

                <button className="navbar-toggler d-lg-none float-end" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <img src="img/Hamburger_icon.svg.png" />
                </button>

                <div className="collapse navbar-collapse justify-content-end" id="navbarTogglerDemo01">
                    <ul className="navbar-nav d-flex">
                        <li className="nav-item">
                            <Link className="nav-link fw-semibold px-4" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link fw-semibold px-4" href="#About">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link fw-semibold px-4" href="#Contact">Contact</a>
                        </li>

                    </ul>

                </div>
            </div>
        </nav>
    );
};
export default Header;
