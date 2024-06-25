import React from "react";
import '../src/style/style.css';

const Header=() =>{
    return (
        <div className="NavBar">
             <nav className="navbar navbar-expand-lg navbar-dark p-3 text-uppercase" id="navbar">
                <div className="container-fluid d-flex">
                    <div className="row row-cols-2">
                        <div className="col">
                            <a className="navbar-brand" href="#">John Doe</a>
                        </div>
                        <div className="col ms-auto d-flex justify-content-end">
                            <button className="navbar-toggler"  data-mdb-right="true" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                        </div>      
                    </div>
                    <div className="NavLink">
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link" href="/">Accueil</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/Service">Services</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/Portfolio">Réalisations</a>
                                </li>
                                <li className="nav-item"> 
                                    <a className="nav-link" href="/Blog">Blog</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/Contact">Me contacter</a>
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