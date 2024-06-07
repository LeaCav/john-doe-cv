import '../style/style.css'
import React from "react";
import Header from "../Header";
import Footer from "../Footer";

const Blog=() =>{
    return(
        <div>
            <header>
                <Header/>
            </header>
            <main>
                <div>
                    <div className="TitleBlog text-center">
                        <img src="../../public/img/banner.jpg" className="img-fluid"></img>
                        <div className='m-5'>
                            <h1 className="uppercase">Blog</h1>
                            <p> Retrouvez ici quelues articles sur le développement web.</p>
                        </div>
                    </div>
                    <div className="Blog">
                        <div className="m-5 row text-start">
                            <div className="col card m-3 p-0" id="html" style={{width: "18rem"}}>
                                <img src="../../public/img/blog/coder.jpg" className="card-img-top" alt="Coder son site en HTML/CSS"></img>
                                <div class="card-body p-0">
                                    <div className="p-3">
                                        <h2 className="card-title">Coder son site en HTML/CSS</h2>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                    <a href="" className="btn btn-primary m-3">Lire la suite</a>
                                    <div className="card-footer">
                                        <p className="align-middle m-0">Publié le 22 août 2022</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col card m-3 p-0" id="sell" style={{width: "18rem"}}>
                                <img src="../../public\img\blog\croissance.jpg" className="card-img-top" alt="Vendre ses produits sur le web"></img>
                                <div className="card-body p-0">
                                    <div className="p-3">
                                        <h2 className="card-title">Vendre ses produits sur le web</h2>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                    <a href="" className="btn btn-primary m-3">Lire la suite</a>
                                    <div className="card-footer">
                                        <p claclassNamess="align-middle m-0">Publié le 20 août 2022</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col card m-3 p-0" id="google" style={{width: "18rem"}}>
                                <img src="../../public\img\blog\google.jpg" className="card-img-top" alt="Se positionner sur Google"></img>
                                <div className="card-body p-0">
                                    <div className="p-3">
                                        <h2 className="card-title">Se positionner sur Google</h2>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                    <a href="" className="btn btn-primary m-3">Lire la suite</a>
                                    <div className="card-footer">
                                        <p className="align-middle m-0">Publié le 1 août 2022</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="m-5 row text-start">
                            <div className="col card m-3 p-0" id="responsive" style={{width: "18rem"}}>
                                <img src="../../public\img\blog\screens.jpg" className="card-img-top" alt="Coder en responsive design"></img>
                                <div className="card-body p-0">
                                    <div className="p-3">
                                        <h2 className="card-title">Coder en responsive design</h2>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                    <a href="" className="btn btn-primary m-3">Lire la suite</a>
                                    <div className="card-footer">
                                        <p className="align-middle m-0">Publié le 31 juillet 2022</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col card m-3 p-0" id="referencement" style={{width: "18rem"}}>
                                <img src="../../public\img\blog\seo.jpg" className="card-img-top" alt="Techniques de référencement"></img>
                                <div className="card-body p-0">
                                    <div className="p-3">
                                        <h2 className="card-title">Techniques de référencement</h2>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                    <a href="" className="btn btn-primary m-3">Lire la suite</a>
                                    <div className="card-footer">
                                        <p className="align-middle m-0">Publié le 30 juillet 2022</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col card m-3 p-0" id="learn" style={{width: "18rem"}}>
                                <img src="../../public\img\blog\technos.png" className="card-img-top" alt="Apprendre à coder"></img>
                                <div className="card-body p-0">
                                    <div className="p-3">
                                        <h2 className="card-title">Apprendre à coder</h2>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                    <a href="" className="btn btn-primary m-3">Lire la suite</a>
                                    <div className="card-footer">
                                        <p className="align-middle m-0">Publié le 12 juillet 2022</p>
                                    </div>
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

export default Blog;