import React from "react";
import Header from "../Header";
import Footer from "../Footer";

const Realization=() =>{
    return(
        <div>
            <header>
                <Header/>
            </header>
            <main>
                <div>
                    <div className="TitleRea text-center">
                        <img src="/public/img/banner.jpg" class="img-fluid"></img>
                        <h1 className="text-uppercase">Portfolio</h1>
                        <p>Voici quelques-unes de mes réalisations.</p>
                        <div className="Border"></div>
                    </div>
                    <div className="Portfolio m-5 row text-center">
                        <div className="col card m-3 p-0" id="freshfood" style={{width: "18rem"}}>
                            <img src="/public\img\portfolio\fresh-food.jpg" class="card-img-top" alt="Fresh food"></img>
                            <div class="card-body p-0">
                                <h2 class="card-title">Fresh food</h2>
                                <p class="card-text">Réalisation d'un site avec commande en ligne.</p>
                                <a href="" class="btn btn-outline-primary m-3">Voir</a>
                                <div class="card-footer">
                                    <p class="align-middle m-0">Site réalisé avec PHP et MySQL</p>
                                </div>
                            </div>
                        </div>
                        <div className="col card m-3 p-0" id="akira" style={{width: "18rem"}}>
                            <img src="/public\img\portfolio\restaurant-japonais.jpg" class="card-img-top" alt="Restaurant Akira"></img>
                            <div class="card-body p-0">
                                <h2 class="card-title">Restaurant Akira</h2>
                                <p class="card-text">Réalisation d'un site vitrine.</p>
                                <a href="" class="btn btn-outline-primary m-3">Voir</a>
                                <div class="card-footer">
                                    <p class="align-middle m-0">Site réalisé avec WordPress</p>
                                </div>
                            </div>
                        </div>
                        <div className="col card m-3 p-0" id="bienetre" style={{width: "18rem"}}>
                            <img src="/public\img\portfolio\espace-bien-etre.jpg" class="card-img-top" alt="Espace bien-être"></img>
                            <div class="card-body p-0">
                                <h2 class="card-title">Espace bien-être</h2>
                                <p class="card-text">Réalisation d'un site vitrine pour un praticien de bien-être.</p>
                                <a href="" class="btn btn-outline-primary m-3">Voir</a>
                                <div class="card-footer">
                                    <p class="align-middle m-0">Site réalisé en HTML/CSS</p>
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

export default Realization;