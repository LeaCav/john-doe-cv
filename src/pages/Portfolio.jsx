import '../style/style.css';
import React from "react";
import Header from "../Header";
import Footer from "../Footer";

const Portfolio=() =>{
    return(
        <div>
            <header>
                <Header/>
            </header>
            <main>
                <div>
                    <div className="TitleRea text-center">
                        <img src="../img/banner.jpg" className="img-fluid"></img>
                        <div className='m-5'>
                            <h1 className="text-uppercase">Portfolio</h1>
                            <p>Voici quelques-unes de mes réalisations.</p>
                            <hr className='border border-primary border-3 opacity-100 d-flex mx-auto' style={{width: "200px"}}/>
                        </div>

                    </div>
                    <div className="Portfolio m-5 row text-center align-items-start justify-content-md-center">
                        <div className="col-sm-6 card m-3 p-0" id="freshfood" style={{width: "25rem"}}>
                            <img src="../img/portfolio/fresh-food.jpg" className="card-img-top" alt="Fresh food"></img>
                            <div className="card-body p-0">
                                <h2 className="card-title">Fresh food</h2>
                                <p className="card-text">Réalisation d'un site avec commande en ligne.</p>
                                <a href="" className="btn btn-outline-primary m-3">Voir</a>
                                <div className="card-footer">
                                    <p className="align-middle m-0">Site réalisé avec PHP et MySQL</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 card m-3 p-0" id="akira" style={{width: "25rem"}}>
                            <img src="../img/portfolio/restaurant-japonais.jpg" className="card-img-top" alt="Restaurant Akira"></img>
                            <div className="card-body p-0">
                                <h2 className="card-title">Restaurant Akira</h2>
                                <p className="card-text">Réalisation d'un site vitrine.</p>
                                <a href="" className="btn btn-outline-primary m-3">Voir</a>
                                <div className="card-footer">
                                    <p className="align-middle m-0">Site réalisé avec WordPress</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 card m-3 p-0" id="bienetre" style={{width: "25rem"}}>
                            <img src="../img/portfolio/espace-bien-etre.jpg" className="card-img-top" alt="Espace bien-être"></img>
                            <div className="card-body p-0">
                                <h2 className="card-title">Espace bien-être</h2>
                                <p className="card-text">Réalisation d'un site vitrine pour un praticien de bien-être.</p>
                                <a href="" className="btn btn-outline-primary m-3">Voir</a>
                                <div className="card-footer">
                                    <p className="align-middle m-0">Site réalisé en HTML/CSS</p>
                                </div>
                            </div>
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

export default Portfolio;