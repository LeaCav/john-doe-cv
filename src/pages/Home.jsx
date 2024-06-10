import '../style/style.css';
import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

const Home =() =>{
    return(
        <div>
            <header>
                <Header/>
            </header>
            <main>
                <div className="BgImage">
                    <div className="Opacity">
                        <div className="container text-center text-light">
                            <h1 className="p-3">Bonjour, je suis John Doe</h1>
                            <h2 className="p-3">Développeur web full stack</h2>
                            <a href="#about">
                                <button type="button" className="btn btn-primary">En savoir plus</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="About container p-5" id="about">
                    <div className="AboutShadow row p-3">
                        <div className=" col align-items m-2 p-4">
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
                                <img src="../img/about.jpg" className="img-fluid" alt="About"></img>
                            <h3>Mes compétences</h3>
                            <div className="m-2">
                                <p>HTML5 90%</p>
                                <div className="progress">
                                    <div className="progress-bar bg-danger" role="progressbar" aria-label="html5" style={{width: "90%"}} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                            <div className="m-2">
                                <p className="">CSS3 80%</p>
                                <div className="progress">
                                    <div className="progress-bar bg-info" role="progressbar" aria-label="css3" style={{width: "80%"}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                            <div className="m-2">
                                <p>JAVASCRIPT 70%</p>
                                <div className="progress">
                                    <div className="progress-bar bg-warning" role="progressbar" aria-label="javascript" style={{width: "70%"}} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                            <div className="m-2">
                                <p>PHP 60%</p>
                                <div className="progress">
                                    <div className="progress-bar bg-success" role="progressbar" aria-label="php" style={{width: "60%"}} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                            <div className="m-2">
                                <p>REACT 50%</p>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" aria-label="react" style={{width: "50%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
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