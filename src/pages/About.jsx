import me from '../assets/images/festo.jfif';
import '../CSS/style.css';

const About = () => {
    return (
        <>
            <div class="about-outline" >
                <div class="container-fluid big-padding about-cover d-flex justify-content-center align-items-center">
                    <div class="container">
                        <div class="row about-row d-flex">
                            <div class="d-flex justify-content-center align-items-center col-md-5 ps-0 ps-lg-5 image">
                                <img src={me} alt="" class="img-fluid" />
                            </div>
                            <div class="col-md-7 view detailat text-justify d-flex flex-column" >
                                <h1 class="fw-bold">About Me!</h1>
                                <h3>My goal is to develop solutions that bridge divides and unite people through the power of technology.</h3>
                                <p>As a dedicated software developer with two years of coding experience, I excel in managing all
                                    phases of the development process, from project planning to design, construction, and testing,
                                    ensuring high-quality and functional outcomes. My collaborative approach in multi-functional
                                    teams enables me to efficiently identify and resolve bugs and functionality issues.</p>
                                <p id='s'>During my time as a Full Stack Developer through Coursera (Oct 2022 - Oct 2023), I immersed
                                    myself in web development technologies like HTML, CSS, JavaScript, and Django. I contributed
                                    to web-based projects, enhancing my skills in front-end and back-end development, and
                                    developed proficiency in version control using Git and GitHub. At solve it in Kigali City (May 2018 -
                                    Jan 2019), I participated in an intensive training program, mastering programming languages
                                    such as Python, Visual Basic, and C++, and gained hands-on experience in software development
                                    methodologies.</p>
                                <p>My core skills include HTML, CSS, JavaScript, Python, Django, Node.js, and Git and GitHub. I
                                    possess strong technical analysis and quality assurance skills and am an effective team player known
                                    for resolving bugs collaboratively.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default About;