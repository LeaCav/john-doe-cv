import '../style/style.css'
import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import { BsFileEarmarkCodeFill } from "react-icons/bs";
import { FaSearchDollar, FaDesktop } from "react-icons/fa";


const Service=() =>{
    return(
        <div>
            <header>
                <Header/>
            </header>
            <main>
                <div className="TitleService text-center">
                    <img src="/public/img/banner.jpg" className="img-fluid"></img>
                    <h1 className="text-uppercase">Mon offre de services</h1>
                    <p>Voici les prestations sur lesquelles je peux intervenir.</p>
                </div>
                <div className="m-5 row text-center">
                    <div className="CardService col card m-3 p-5" id="" style={{width: "18rem"}}>
                        <FaDesktop className="Icon mx-auto m-3"/>
                        <div class="card-body p-0">
                            <h2 class="card-title text-uppercase">UX design</h2>
                            <p class="card-text">L'<strong>UX Design</strong> est une méthode dec onception centrée sur l'utilisateur.
                            Son but est d'offrir une expérience de navigation optimale à l'internaute.</p>
                        </div>
                    </div>
                    <div className="CardService col card m-3 p-5" id="" style={{width: "18rem"}}>
                        <BsFileEarmarkCodeFill className="Icon mx-auto m-3"/>
                        <div class="card-body p-0">
                            <h2 class="card-title text-uppercase">Développement web</h2>
                            <p class="card-text">Le <strong>développement de sites web</strong> repose sur l'utilisation des langages 
                            HTML, CSS, JavaScript et PHP.</p>
                        </div>
                    </div>
                    <div className="CardService col card m-3 p-5" id="bienetre" style={{width: "18rem"}}>
                        <FaSearchDollar className="Icon mx-auto m-3"/>
                        <div class="card-body p-0">
                            <h2 class="card-title text-uppercase">Référencement</h2>
                            <p class="card-text">Le <strong>référencement naturel d'un site,</strong> aussi appelé  SEO, consiste à mettre
                                des techniques en oeuvre pour <i>améliorer sa position</i> dans les résultats des moteurs de recherche.</p>
                        </div>
                    </div>
                </div>
            </main>
            <footer>
                <Footer/>
            </footer>
        </div>
    )
};

export default Service;