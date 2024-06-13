import '../style/style.css';
import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { TbWorld } from "react-icons/tb";

const LegalNotice=() =>{
    return(
        <div>
            <header>
                <Header />
            </header>
            <main>
                <div className=''>
                    <div className="TitleContact">
                        <div className='text-center m-5'>
                            <h1 className="text-uppercase">Mentions légales</h1>
                            <hr className='border border-primary border-3 opacity-100 d-flex mx-auto' style={{width: "200px"}}/>
                        </div>
                    </div>
                    <div className="accordion m-5" id="accordionPanelsStayOpenExample">
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                Editeur du site
                            </button>
                            </h2>
                            <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                                <div class="accordion-body">
                                    <h3>John Doe</h3>
                                    <address>
                                        <FaMapMarkerAlt /> 40 Rue Laure Diebold<br></br>
                                        69009 Lyon, France<br></br>
                                        <MdOutlinePhoneAndroid /> <a href="tel:0620304050" className="text-decoration-none text-dark">06 20 30 40 50</a><br></br>
                                        <IoIosMail /> <a href='mailto:john.doe@gmail.com'>john.doe@gmail.com</a>
                                    </address>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                                Hébergeur
                            </button>
                            </h2>
                            <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                                <div class="accordion-body">
                                    <h3>Always Data</h3>
                                    <address>
                                        91 rue du Faubourg Saint Honoré <br></br>
                                        75008 Paris
                                    </address>
                                    <TbWorld /> <a href='www.alwaysdata.com' target='_blank'>www.alwaysdata.com</a>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="panelsStayOpen-headingThree">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                                Crédits
                            </button>
                            </h2>
                            <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                                <div class="accordion-body">
                                    <h3>Crédits</h3>
                                    <p>Site développé par John Doe, étudiant du CEF.</p>
                                    <p>Les images libres de droit sont issues du site 
                                        <a href='https://pixabay.com/fr/' className='text-decoration-none' target='_blank'> Pixabay</a>.</p>
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
};

export default LegalNotice;