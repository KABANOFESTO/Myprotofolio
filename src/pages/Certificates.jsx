import React from 'react';
import c1 from '../assets/images/f.jpg';
import '../CSS/style.css';

const Certificates = () => {
    return (
        <section className="certificates">
            <div className="container c-body">
                <div className="icon">
                    <div className="imgBx active" style={{ '--i': 0 }}>
                        <img src={c1} alt="ooo" />
                    </div>
                    <div className="imgBx" style={{ '--i': 1 }}>
                        <img src={c1} alt="ooo" />
                    </div>
                    <div className="imgBx" style={{ '--i': 2 }}>
                        <img src={c1} alt="ooo" />
                    </div>
                    <div className="imgBx" style={{ '--i': 3 }}>
                        <img src={c1} alt="ooo" />
                    </div>
                </div>
                <div className="contentc">
                </div>
            </div>
        </section>
    );
}

export default Certificates;
