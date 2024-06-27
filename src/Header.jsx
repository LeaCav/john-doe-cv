import React from "react";
import { Link, useLocation } from "react-router-dom";
import '../src/style/style.css';

const Header=() =>{
    const location = useLocation();

    const isActive = (path) => {
        return location.pathname === path ? "nav-link active" : "nav-link";
    };

    return (
        <div className="NavBar">
             <nav className="navbar navbar-expand-lg navbar-dark p-3 text-uppercase" id="navbar">
                <div className="container-fluid d-flex">
                    <div className="row row-cols-2">
                        <div className="col">
                            <Link className="navbar-brand" to="/">John Doe</Link>
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
                                    <Link className={isActive("/")} to="/">Accueil</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={isActive("/Service")} to="/Service">Services</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={isActive("/Portfolio")} to="/Portfolio">Réalisations</Link>
                                </li>
                                <li className="nav-item"> 
                                    <Link className={isActive("/Blog")} to="/Blog">Blog</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={isActive("/Contact")} to="/Contact">Me contacter</Link>
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