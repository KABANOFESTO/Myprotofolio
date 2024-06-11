import React, { useEffect } from 'react';
import commerce from '../assets/images/f.jpg';

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
            <section className="commerce justify-content-center align-items-center">
                <div className='container text-center'>
                    <h2 id="achievement-title" className="section-title mb-4 text-white">My Achievements</h2>
                </div>

                <br />
                <div className="container d-flex justify-content-center align-items-center">
                    <div className="row about-row d-flex">
                        <div className="d-flex justify-content-center align-items-center col-md-5 ps-0 ps-lg-5 image">
                            <img src={commerce} alt="" className="img-fluid" />
                        </div>
                        <div className="col-md-7 view detailat text-justify d-flex flex-column">
                            <h1 className="fw-bold">About Me!</h1>
                            <h3>My goal is to develop solutions that bridge divides and unite people through the power of technology.</h3>
                            <p>As a dedicated software developer with two years of coding experience, I excel in managing all
                                phases of the development process, from project planning to design, construction, and testing,
                                ensuring high-quality and functional outcomes. My collaborative approach in multi-functional
                                teams enables me to efficiently identify and resolve bugs and functionality issues.</p>
                        </div>
                    </div>
                </div>

                <div className="container d-flex justify-content-center align-items-center">
                    <div className="row about-row d-flex">
                        <div className="col-md-7 view detailat text-justify d-flex flex-column">
                            <h1 className="fw-bold">About Me!</h1>
                            <h3>My goal is to develop solutions that bridge divides and unite people through the power of technology.</h3>
                            <p>As a dedicated software developer with two years of coding experience, I excel in managing all
                                phases of the development process, from project planning to design, construction, and testing,
                                ensuring high-quality and functional outcomes. My collaborative approach in multi-functional
                                teams enables me to efficiently identify and resolve bugs and functionality issues.</p>
                        </div>
                        <div className="d-flex justify-content-center align-items-center col-md-5 ps-0 ps-lg-5 p image">
                            <img src={commerce} alt="" className="img-fluid animate" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Achievement;
