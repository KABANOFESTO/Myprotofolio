import About from "../pages/About";
import Achievement from "../pages/Achievement";
import Banner from "../pages/Banner";
import Certificates from "../pages/Certificates";
import Contact from "../pages/Contact";
import Experience from "../pages/Experience";
import Services from "../pages/Services";

const Home = () => {
    return (
        <>
            <Banner />
            <hr />
            <About />
            <hr />
            <Services />
            <hr />
            <Achievement />
            <hr />
            <Experience />
            <hr />
            <Certificates />
            <br /><br /><br />
            <br /><br />
            <hr />
            <Contact />
        </>
    );
}

export default Home;