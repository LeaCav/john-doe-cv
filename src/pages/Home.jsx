import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import '../style/accueil.css';

const Home =() =>{
    return(
        <div>
            <header>
                <Header/>
            </header>
            <main>
                <div className="BgImage">
                    <div className="Opacity">
                        <div class="container text-center text-light">
                            <h1 class="p-3">Bonjour, je suis John Doe</h1>
                            <h2 class="p-3">Développeur web full stack</h2>
                            <a href="#about">
                                <button type="button" class="btn btn-primary">En savoir plus</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="About container p-5" id="about">
                    <div className="AboutShadow row p-3">
                        <div class=" col align-items m-2 p-4">
                            <h3>A propos</h3>
                            <div className="AboutTitle">
                                <p>
                                    <br></br>
                                    Passionné par l'informatique et les nouvelles technologies, j'ai suivi une formation d'
                                    <strong>intégrateur-développeur web </strong>
                                    au CEF. Au cours de cette formation j'ai pu acquérir des bases solides pour travailler dans le domaine du 
                                    <strong> developpement web</strong>.
                                </p>
                                <p>Basé à Lyon, je suis en recherche d'une alternance au sein d'une agence digitale pour consolider ma formation de 
                                    <strong> développeur web full stack</strong>.
                                </p>
                                <p>J'accorde une attention particulière à la qualité du code que j'écris et je respecte les bonnes pratiques du web.</p>
                            </div>
                        </div>
                        <div className="Competences col align-items m-2 p-4">
                                <img src="/public\img\john-doe-about.jpg" class="img-fluid" alt="About"></img>
                            <h3>Mes compétences</h3>
                            <div class="m-2">
                                <p>HTML5 90%</p>
                                <div className="progress">
                                    <div class="progress-bar bg-danger" role="progressbar" aria-label="html5" style={{width: "90%"}} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                            <div class="m-2">
                                <p class="">CSS3 80%</p>
                                <div className="progress">
                                    <div class="progress-bar bg-info" role="progressbar" aria-label="css3" style={{width: "80%"}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                            <div class="m-2">
                                <p>JAVASCRIPT 70%</p>
                                <div className="progress">
                                    <div class="progress-bar bg-warning" role="progressbar" aria-label="javascript" style={{width: "70%"}} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                            <div class="m-2">
                                <p>PHP 60%</p>
                                <div className="progress">
                                    <div class="progress-bar bg-success" role="progressbar" aria-label="php" style={{width: "60%"}} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                            <div class="m-2">
                                <p>REACT 50%</p>
                                <div className="progress">
                                    <div class="progress-bar" role="progressbar" aria-label="react" style={{width: "50%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default Home;