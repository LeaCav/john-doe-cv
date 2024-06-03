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
                    <img src="/public/img/banner.jpg" class="img-fluid"></img>
                    <h1 className="text-uppercase">Portfolio</h1>
                    <p>Voici quelques-unes de mes réalisations.</p>
                </div>
            </main>
            <footer>
                <Footer/>
            </footer>
        </div>
    )
};

export default Realization;