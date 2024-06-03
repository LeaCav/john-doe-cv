import React from "react";
import '../src/style/style.css';

const Header=() =>{
    return (
        <div className="NavBar">
             <nav class="navbar navbar-expand-lg navbar-dark p-3 text-uppercase" id="navbar">
                <div class="container-fluid d-flex">
                    <div class="text-center">
                        <a class="navbar-brand " href="#">John Doe</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                    </div>
                    <div className="NavLink">
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="/">Accueil</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/Service">Services</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/Realization">Réalisations</a>
                                </li>
                                <li class="nav-item"> 
                                    <a class="nav-link" href="/Blog">Blog</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/Contact">Me contacter</a>
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