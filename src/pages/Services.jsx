import React, { useEffect, useRef } from 'react';

const Services = () => {
    const headingRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate__animated', 'animate__fadeInUp');
                    }
                });
            },
            { threshold: 0.5 }
        );

        if (headingRef.current) {
            observer.observe(headingRef.current);
        }

        // Cleanup the observer on component unmount
        return () => {
            if (headingRef.current) {
                observer.unobserve(headingRef.current);
            }
        };
    }, []);

    const handleMouseOver = (event) => {
        const icon = event.currentTarget.querySelector('.icon');
        if (icon) {
            icon.style.color = '#000';
        }
    };

    const handleMouseOut = (event) => {
        const icon = event.currentTarget.querySelector('.icon');
        if (icon) {
            icon.style.color = ''; // Reset to original color
        }
    };

    return (
        <>
            <section id="service" className="d-flex justify-content-center align-items-center min-vh-100">
                <div className="container text-center service-content">
                    <h6 className="section-title mb-4 text-success" ref={headingRef}>Expert Services Showcase</h6>
                    <p className="mb-5 pb-4 text-white">
                        I'm an expert software developer offering custom solutions, web and mobile apps, and seamless integration to elevate your business's digital presence.
                    </p>
                    <div className="services-grid">
                        <div className="custom-card card border" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                            <div className="card-body">
                                <span className="icon material-symbols-outlined">language</span>
                                <h5>Web development</h5>
                            </div>
                        </div>
                        <div className="custom-card card border" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                            <div className="card-body">
                                <span className="icon material-symbols-outlined">contact_phone</span>
                                <h5>Mobile development</h5>
                            </div>
                        </div>
                        <div className="custom-card card border" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                            <div className="card-body">
                                <span className="icon material-symbols-outlined">support_agent</span>
                                <h5>Custom Software Development</h5>
                            </div>
                        </div>
                        <div className="custom-card card border" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                            <div className="card-body">
                                <span className="icon material-symbols-outlined">terminal</span>
                                <h5>System Integration</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
            </section>
        </>
    );
};

export default Services;