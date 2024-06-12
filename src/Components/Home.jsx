import About from "../pages/About";
import Achievement from "../pages/Achievement";
import Banner from "../pages/Banner";
import Certificates from "../pages/Certificates";
import Experience from "../pages/Experience";
import Services from "../pages/Services";

const Home = () => {
    return (
        <>
            <Banner />
            <About />
            <Services />
            <Achievement />
            <Experience />
            <Certificates />
        </>
    );
}

export default Home;