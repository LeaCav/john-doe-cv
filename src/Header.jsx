import React from "react";
import '../src/style/style.css';

const Header=() =>{
    return (
        <div className="NavBar">
             <nav className="navbar navbar-expand-lg navbar-dark p-3 text-uppercase" id="navbar">
                <div className="container-fluid d-flex">
                    <div className="text-center">
                        <a className="navbar-brand" href="#">John Doe</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                    <div className="NavLink">
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link" aria-current="true" href="/">Accueil</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link"  aria-current="true" href="/Service">Services</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link"  aria-current="true" href="/Realization">Réalisations</a>
                                </li>
                                <li className="nav-item"> 
                                    <a className="nav-link"  aria-current="true" href="/Blog">Blog</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link"  aria-current="true" href="/Contact">Me contacter</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;