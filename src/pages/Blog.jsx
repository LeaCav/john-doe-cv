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
                        <img src="/public/img/banner.jpg" class="img-fluid"></img>
                        <h1 className="uppercase">Blog</h1>
                        <p>Retrouvez ici quelues articles sur le développement web.</p>
                    </div>
                    <div className="Blog">
                        <div className="Portfolio m-5 row text-start">
                            <div className="col card m-3 p-0" id="html" style={{width: "18rem"}}>
                                <img src="/public\img\blog\coder.jpg" class="card-img-top" alt="Coder son site en HTML/CSS"></img>
                                <div class="card-body p-0">
                                    <div className="p-3">
                                        <h2 class="card-title">Coder son site en HTML/CSS</h2>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                    <a href="" class="btn btn-primary m-3">Lire la suite</a>
                                    <div class="card-footer">
                                        <p class="align-middle m-0">Publié le 22 août 2022</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col card m-3 p-0" id="sell" style={{width: "18rem"}}>
                                <img src="/public\img\blog\croissance.jpg" class="card-img-top" alt="Vendre ses produits sur le web"></img>
                                <div class="card-body p-0">
                                    <div className="p-3">
                                        <h2 class="card-title">Vendre ses produits sur le web</h2>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                    <a href="" class="btn btn-primary m-3">Lire la suite</a>
                                    <div class="card-footer">
                                        <p class="align-middle m-0">Publié le 20 août 2022</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col card m-3 p-0" id="google" style={{width: "18rem"}}>
                                <img src="/public\img\blog\google.jpg" class="card-img-top" alt="Se positionner sur Google"></img>
                                <div class="card-body p-0">
                                    <div className="p-3">
                                        <h2 class="card-title">Se positionner sur Google</h2>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                    <a href="" class="btn btn-primary m-3">Lire la suite</a>
                                    <div class="card-footer">
                                        <p class="align-middle m-0">Publié le 1 août 2022</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="Portfolio m-5 row text-start">
                            <div className="col card m-3 p-0" id="responsive" style={{width: "18rem"}}>
                                <img src="/public\img\blog\screens.jpg" class="card-img-top" alt="Coder en responsive design"></img>
                                <div class="card-body p-0">
                                    <div className="p-3">
                                        <h2 class="card-title">Coder en responsive design</h2>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                    <a href="" class="btn btn-primary m-3">Lire la suite</a>
                                    <div class="card-footer">
                                        <p class="align-middle m-0">Publié le 31 juillet 2022</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col card m-3 p-0" id="referencement" style={{width: "18rem"}}>
                                <img src="/public\img\blog\seo.jpg" class="card-img-top" alt="Techniques de référencement"></img>
                                <div class="card-body p-0">
                                    <div className="p-3">
                                        <h2 class="card-title">Techniques de référencement</h2>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                    <a href="" class="btn btn-primary m-3">Lire la suite</a>
                                    <div class="card-footer">
                                        <p class="align-middle m-0">Publié le 30 juillet 2022</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col card m-3 p-0" id="learn" style={{width: "18rem"}}>
                                <img src="/public\img\blog\technos.png" class="card-img-top" alt="Apprendre à coder"></img>
                                <div class="card-body p-0">
                                    <div className="p-3">
                                        <h2 class="card-title">Apprendre à coder</h2>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                    <a href="" class="btn btn-primary m-3">Lire la suite</a>
                                    <div class="card-footer">
                                        <p class="align-middle m-0">Publié le 12 juillet 2022</p>
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