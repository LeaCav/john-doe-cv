import '../style/style.css';
import React, {useState} from "react";
import emailjs from "@emailjs/browser";
import Header from "../Header";
import Footer from "../Footer";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";

const Contact=() =>{
    const [formData, setFormData] = useState({
        name: '',
        mail: '',
        phone: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        const {id, value} = e.target;
        setFormData({...formData, [id]: value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.send('service_s94ulyo', 'template_8sxobrs', e.target, {
            publicKey: 'ohq-y7mx_9_PriA1O',
        })
        .then((response) => {
            console.log('SUCCESS !', response.status, response.text);
        }, (err) => {
            console.log('FAILED...', err);
        });
    };

    return(
        <div>
            <header>
                <Header/>
            </header>
            <main className='MainContact p-5'>
                <div className='card p-5'>
                    <div className="TitleContact">
                        <div className='text-center m-5'>
                            <h1 className="text-uppercase">Me contacter</h1>
                            <p>Pour me contacter en vue d'un entretien ou d'une future collaboration, merci de remplir le formulaire de contact.</p>
                            <hr className='border border-primary border-3 opacity-100 d-flex mx-auto' style={{width: "200px"}}/>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col'>
                            <h2>Formulaire de contact</h2>
                            <hr className='border border-primary opacity-100'/>
                            <div className='Form p-3' onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <input type="email" className="form-control" id="name" placeholder="Votre nom" value={formData.name} onChange={handleChange} required></input>
                                </div>
                                <div className="mb-3">
                                    <input type="email" className="form-control" id="mail" placeholder="Votre adresse email" value={formData.mail} onChange={handleChange} required></input>
                                </div>
                                <div className="mb-3">
                                    <input type="email" className="form-control" id="phone" placeholder="Votre numéro de téléphone" value={formData.phone} onChange={handleChange} required></input>
                                </div>
                                <div className="mb-3">
                                    <input type="email" className="form-control" id="subject" placeholder="Sujet" value={formData.subject} onChange={handleChange} required></input>
                                </div>
                                <div className="mb-3">
                                    <textarea className="form-control" id="message" rows="6" placeholder='Votre message' value={formData.message} onChange={handleChange} required></textarea>
                                </div>
                                <div className="text-center">
                                    <button class="btn btn-primary" type="submit">Envoyer</button>
                                </div>
                            </div>
                        </div>
                        <div className='col'>
                            <h2>Mes coordonnées</h2>
                            <hr className='border border-primary opacity-100'/>
                            <div className='p-3'>
                                <address>
                                    <FaMapMarkerAlt /> 40 Rue Laure Diebold, 69009 Lyon, France <br></br>
                                    <MdOutlinePhoneAndroid /> <a href="tel:0620304050" className="text-decoration-none text-dark">06 20 30 40 50</a>
                                </address>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2782.6405110671153!2d4.799131049352103!3d45.77839428613809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb65edac5b3f%3A0xe01c47049cb2e2b9!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon!5e0!3m2!1sfr!2sfr!4v1717752323864!5m2!1sfr!2sfr" width="600" height="450" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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

export default Contact;