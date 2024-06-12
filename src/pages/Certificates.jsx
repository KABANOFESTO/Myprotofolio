import React, { useEffect } from 'react';
import c1 from '../assets/images/f.jpg';
import c2 from '../assets/images/solve.png';
import '../CSS/style.css';

const Certificates = () => {
    useEffect(() => {
        const imgBx = document.querySelectorAll('.imgBx');
        const contentBx = document.querySelectorAll('.contentBx');

        imgBx.forEach((img, index) => {
            img.addEventListener('mouseover', function () {
                contentBx.forEach(content => content.className = 'contentBx');
                document.getElementById(this.dataset.id).className = 'contentBx active';

                imgBx.forEach(img => img.className = 'imgBx');
                this.className = 'imgBx active';
            });
        });

        return () => {
            imgBx.forEach((img) => {
                img.removeEventListener('mouseover', function () {
                    contentBx.forEach(content => content.className = 'contentBx');
                    document.getElementById(this.dataset.id).className = 'contentBx active';

                    imgBx.forEach(img => img.className = 'imgBx');
                    this.className = 'imgBx active';
                });
            });
        };
    }, []);

    return (
        <section className="certificates">
            <div className='container text-center'>
                <h2 className=" mb-4 text-success">Accreditation and Certification Highlights</h2>
            </div>
            <br /><br />
            <div className="container c-body">
                <div className="icon">
                    <div className="imgBx active" style={{ '--i': 0 }} data-id='contentB'>
                        <img src={c1} alt="ooo" />
                    </div>
                    <div className="imgBx" style={{ '--i': 1 }} data-id='contentx'>
                        <img src={c2} alt="ooo" />
                    </div>
                    <div className="imgBx" style={{ '--i': 2 }} data-id='contenty'>
                        <img src={c1} alt="ooo" />
                    </div>
                    <div className="imgBx" style={{ '--i': 3 }} data-id='contentz'>
                        <img src={c1} alt="ooo" />
                    </div>
                </div>
                <div className="contentc">
                    <div className="contentBx active" id='contentB'>
                        <div className="card">
                            <div className="imgBx">
                                <img src={c1} alt="cont" />
                            </div>
                            <div className="textBx">
                                <h2>Javascript and args <br />
                                    <span>FreeCodeCamp😎</span>
                                </h2>
                                <ul className="sci">
                                    <li><a href=""><i className="fa-brands fa-facebook"></i></a></li>
                                    <li><a href=""></a></li>
                                    <li><a href=""></a></li>
                                    <li><a href=""></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="contentBx" id='contentx'>
                        <div className="card">
                            <div className="imgBx">
                                <img src={c2} alt="cont" />
                            </div>
                            <div className="textBx">
                                <h2>Javascript and args <br />
                                    <span>FreeCodeCamp😎</span>
                                </h2>
                                <ul className="sci">
                                    <li><a href=""><i className="fa-brands fa-facebook"></i></a></li>
                                    <li><a href=""></a></li>
                                    <li><a href=""></a></li>
                                    <li><a href=""></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="contentBx" id='contenty'>
                        <div className="card">
                            <div className="imgBx">
                                <img src={c1} alt="cont" />
                            </div>
                            <div className="textBx">
                                <h2>Javascript and args <br />
                                    <span>FreeCodeCamp😎</span>
                                </h2>
                                <ul className="sci">
                                    <li><a href=""><i className="fa-brands fa-facebook"></i></a></li>
                                    <li><a href=""></a></li>
                                    <li><a href=""></a></li>
                                    <li><a href=""></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="contentBx" id='contentz'>
                        <div className="card">
                            <div className="imgBx">
                                <img src={c1} alt="cont" />
                            </div>
                            <div className="textBx">
                                <h2>Javascript and args <br />
                                    <span>FreeCodeCamp😎</span>
                                </h2>
                                <ul className="sci">
                                    <li><a href=""><i className="fa-brands fa-facebook"></i></a></li>
                                    <li><a href=""></a></li>
                                    <li><a href=""></a></li>
                                    <li><a href=""></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Certificates;
