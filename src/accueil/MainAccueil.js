import React from "react";
import '../accueil/accueil.css';

function MainAccueil() {
    return (
        <div className="MainAccueil">
            <div className="BgImage">
                <div className="Opacity">
                    <div class="container text-center text-light ">
                        <h1 class="p-3">Bonjour, je suis John Doe</h1>
                        <h2 class="p-3">Développeur web full stack</h2>
                        <button type="button" class="btn btn-primary">En savoir plus</button>
                    </div>
                </div>
            </div>
            <div className="About">
                <div className="AboutShadow">
                    <div>
                        <h3>A propos</h3>
                        <p>Passionné par l'informatique et les nouvelles technologies, j'ai suivi une formation d'
                            <i>intégrateur-développeur web </i>
                            au CEF. Au cours de cette formation j'ai pu acquérir des bases solides pour travailler dans le domaine du 
                            <i> developpement web</i>.
                        </p>
                        <p>Basé à Lyon, je suis en recherche d'une alternance au sein d'une agence digitale pour consolider ma formation de 
                            <i> développeur web full stack</i>.
                        </p>
                        <p>J'accorde une attention particulière à la qualité du code que j'écris et je respecte les bonnes pratiques du web</p>
                    </div>
                </div>
                <div className="Competences">
                    <img src="./public/img/about.jpg" class="img-fluid" alt="About"></img>
                    <div className="progress">
                        <p>HTML5 90%</p>
                        <div class="progress-bar bg-danger" role="progressbar" aria-label="html5" style={{width: "90%"}} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <div className="progress">
                        <p>CSS3 80%</p>
                        <div class="progress-bar bg-info" role="progressbar" aria-label="css3" style={{width: "80%"}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <div className="progress">
                        <p>JAVASCRIPT 70%</p>
                        <div class="progress-bar bg-warning" role="progressbar" aria-label="javascript" style={{width: "70%"}} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <div className="progress">
                        <p>PHP 60%</p>
                        <div class="progress-bar bg-success" role="progressbar" aria-label="php" style={{width: "60%"}} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <div className="progress">
                        <p>REACT 50%</p>
                        <div class="progress-bar" role="progressbar" aria-label="react" style={{width: "50%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainAccueil;