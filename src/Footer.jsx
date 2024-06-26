import React from "react";
import '../src/style/style.css';
import { BiLogoGithub} from "react-icons/bi";
import { FaTwitterSquare, FaLinkedin } from "react-icons/fa";

const Footer=() =>{
    return(
        <div className="Footer">
            <div className="container text-start p-5">
                <div className="row align-items-start">
                    <div className="col">
                        <strong>John Doe</strong>
                        <address>40 Rue Laure Diebold <br></br>
                        69009 Lyon, France <br></br>
                        <a href="tel:0620304050" className="text-decoration-none text-dark">Téléphone : 06 20 30 40 50</a></address>
                        <div className="Logo">
                            <a href="https://github.com/" target="_blank" className="p-2">
                                <BiLogoGithub className="LinkIcon"/>
                            </a>
                            <a href="https://x.com/" target="_blank" className="p-2">
                                <FaTwitterSquare className="LinkIcon"/>
                            </a>
                            <a href="https://www.linkedin.com/" target="_blank" className="p-2">
                                <FaLinkedin className="LinkIcon"/>
                            </a>
                        </div>
                    </div>
                    <div className="col">
                        <strong className="p-2">Liens utiles</strong>
                        <ul>
                            <li><a className="nav-link active" aria-current="page" href="/">Accueil</a></li>
                            <li><a className="nav-link active" aria-current="page" href="/#about">A propos</a></li>
                            <li><a className="nav-link active" aria-current="page" href="/Service">Services</a></li>
                            <li><a className="nav-link active" aria-current="page" href="/Contact">Me contacter</a></li>
                            <li><a className="nav-link active" aria-current="page" href="/LegalNotice">Mentions légales</a></li>
                        </ul>
                    </div>
                    <div className="col">
                        <strong className="p-2">Mes dernières réalisations</strong>
                        <ul>
                            <li><a className="nav-link active" aria-current="page" href="/realization/#freshfood">Fresh food</a></li>
                            <li><a className="nav-link active" aria-current="page" href="/realization/#akira">Restaurant Akira</a></li>
                            <li><a className="nav-link active" aria-current="page" href="/realization/#bienetre">Espace bien-être</a></li>
                        </ul>
                    </div>
                    <div className="col">
                        <strong className="p-2">Mes derniers articles</strong>
                        <ul>
                            <li><a className="nav-link active" aria-current="page" href="/blog/#html">Coder son site en HTML/CSS</a></li>
                            <li><a className="nav-link active" aria-current="page" href="/blog/#sell">Vendre ses produits sur le web</a></li>
                            <li><a className="nav-link active" aria-current="page" href="/blog/#google">Se positionner sur Google</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="text-center text-light bg-dark m-0">
                <p className="p-2">© Designed by John Doe</p>
            </div>
        </div>
    )
};

export default Footer;