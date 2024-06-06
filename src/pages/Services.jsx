import React, { useEffect } from 'react';

const Services = () => {
    useEffect(() => {
        const customCards = document.querySelectorAll('.custom-card');

        const handleMouseOver = (event) => {
            const icon = event.currentTarget.querySelector('.icon');
            if (icon) {
                icon.style.color = 'white';
            }
        };

        const handleMouseOut = (event) => {
            const icon = event.currentTarget.querySelector('.icon');
            if (icon) {
                icon.style.color = ''; // Reset to original color
            }
        };

        customCards.forEach(card => {
            card.addEventListener('mouseover', handleMouseOver);
            card.addEventListener('mouseout', handleMouseOut);
        });

        // Cleanup event listeners on component unmount
        return () => {
            customCards.forEach(card => {
                card.removeEventListener('mouseover', handleMouseOver);
                card.removeEventListener('mouseout', handleMouseOut);
            });
        };
    }, []);

    return (
        <>
            <section id="service" className="d-flex justify-content-center align-items-center min-vh-100">
                <div className="container text-center service-content">
                    <h6 className="section-title mb-4 text-white">My Services</h6>
                    <p className="mb-5 pb-4 text-white">
                        I'm an expert software developer offering custom solutions, web and mobile apps, and seamless integration to elevate your business's digital presence.
                    </p>
                    <div className="services-grid">
                        <div className="custom-card card border">
                            <div className="card-body">
                                <span className="icon material-symbols-outlined">
                                    language
                                </span>
                                <h5>Web development</h5>
                            </div>
                        </div>
                        <div className="custom-card card border">
                            <div className="card-body">
                                <span className="icon material-symbols-outlined">
                                    contact_phone
                                </span>
                                <h5>Mobile development</h5>
                            </div>
                        </div>
                        <div className="custom-card card border">
                            <div className="card-body">
                                <span className="icon material-symbols-outlined">
                                    support_agent
                                </span>
                                <h5>Custom Software Development</h5>
                            </div>
                        </div>
                        <div className="custom-card card border">
                            <div className="card-body">
                                <span className="icon material-symbols-outlined">
                                    terminal
                                </span>
                                <h5>System Integration</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}

export default Services;
