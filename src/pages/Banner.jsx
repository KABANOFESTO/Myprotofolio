const Banner = () => {
    return (
        <>
            <div class="container">
                <div class="infos">
                    <h6 class="subtitle">Hello! My name is</h6>
                    <h6 class="title">KABANO Festo</h6>
                    <p class="card-text"> A results-driven software developer with a fervor for creating robust and
                        innovative solutions. My journey in the realm of coding.</p>

                    <div class="buttons pt-3">
                        <a href="#contact" class="btn btn-primary rounded">Contact me</a>
                        <a href="assets/cvPDF.pdf" download="CV KABANO FESTO.pdf" class="btn btn-dark rounded">Resume</a>
                    </div>

                    <div class="socials mt-4">
                        <a class="social-item" href="https://www.facebook.com/kabano.festo"><i class="ti-facebook"></i></a>
                        <a class="social-item" href="https://www.linkedin.com/in/festo-kabano-3b5150251/"><i class="ti-linkedin"></i></a>
                        <a class="social-item" href="https://github.com/KABANOFESTO"><i class="ti-github"></i></a>
                        <a class="social-item" href=""><i class="ti-twitter"></i></a>
                        <a class="social-item" href="https://www.instagram.com/kbb.32/"><i class="ti-instagram"></i></a>
                    </div>
                </div>
                <div class="img-holder">
                    {/* <img src="./picture/f.jpg" id="img" class="rounded float-end" alt="..."
                    style="height:40em; width:25em;border-radius: 20%;"> */}
                    <img src={ } alt="" />
                    {/* <img src="assets/imgs/man.svg" alt=""> */}
                    <img src={ } alt="" />
                </div>
            </div>
        </>
    );
}

export default Banner;