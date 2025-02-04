import React, { useEffect } from 'react';
import commerce from '../assets/images/e.jpg';
import hotel from '../assets/images/hotel.jpeg';
import '../CSS/style.css';

const Achievement = () => {
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        const achievementTitle = document.getElementById('achievement-title');
        if (achievementTitle) {
            observer.observe(achievementTitle);
        }

        return () => {
            if (achievementTitle) {
                observer.unobserve(achievementTitle);
            }
        };
    }, []);

    return (
        <>
            <section className="commerce justify-content-center align-items-center" id='achievement'>
                <div className='container text-center achieve'>
                    <h2 id="achievement-title" className="section-title mb-4 text-success">Remarkable Achievements Showcase</h2>
                </div>

                <br />
                <div className="container d-flex justify-content-center align-items-center comm">
                    <div className="row about-row d-flex">

                        <div className="d-flex justify-content-center align-items-center col-md-5 ps-0 ps-lg-5 imageB">
                            <a href="https://e-comm-team-emma25-fe.netlify.app/">
                                <img src={commerce} alt="" className="img-fluid animating" style={{ cursor: 'pointer' }} />
                            </a>
                        </div>

                        <div className="col-md-7 text-white text-justify d-flex flex-column">
                            <h1 className="fw-bold text-success">E-commerce</h1>
                            <h3>My aim is to create solutions that connect and unite people using the power of technology.</h3>
                            <p>As a committed software developer with two years of coding expertise, I excel in handling all
                                stages of the development process, from project planning to design, construction, and testing,
                                ensuring high-quality and effective results. My collaborative approach within multi-functional
                                teams allows me to quickly identify and resolve bugs and functionality issues.</p>

                        </div>
                    </div>
                </div>
                <div className="container d-flex justify-content-center align-items-center" >
                    <div className="row about-row d-flex h">
                        <div className="col-md-7 text-white text-justify d-flex flex-column">
                            <h1 className="fw-bold text-success">Hotel Management</h1>
                            <h3>Streamlining Operations with Innovative Software Solutions</h3>
                            <p>In the dynamic hospitality industry, efficient hotel management is crucial for delivering exceptional guest experiences.
                                As a dedicated software developer with two years of coding experience, I specialize in developing cutting-edge solutions
                                that revolutionize hotel operations. From seamless check-in and checkout processes to personalized guest services and robust
                                inventory management, my goal is to create intuitive and user-friendly applications that enhance productivity
                                and guest satisfaction.</p>
                        </div>
                        <div className="d-flex justify-content-center align-items-center col-md-5 ps-0 ps-lg-5 p imageB">
                            <img src={hotel} alt="" className="img-fluid animating" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Achievement;
