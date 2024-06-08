import commerce from '../assets/images/f.jpg';

const Achievement = () => {
    return (
        <>
            <section className="commerce d-flex justify-content-center align-items-center">
                <div className="container">
                    <div className="row about-row d-flex">
                        <div className="col-md-5 ps-0 ps-lg-5 no-padding image">
                            <img src={commerce} alt="" className="img-fluid" />
                        </div>
                        <div className="col-md-7 detailat text-justify d-flex flex-column">
                            <h1 className="fw-bold">About Me!</h1>
                            <h3>My goal is to develop solutions that bridge divides and unite people through the power of technology.</h3>
                            <p>As a dedicated software developer with two years of coding experience, I excel in managing all
                                phases of the development process, from project planning to design, construction, and testing,
                                ensuring high-quality and functional outcomes. My collaborative approach in multi-functional
                                teams enables me to efficiently identify and resolve bugs and functionality issues.</p>
                        </div>
                    </div>
                </div>
                
            </section>
        </>
    );
}

export default Achievement;
