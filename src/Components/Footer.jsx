const Footer = () => {
    return (
        <>
            <div>
                <footer className="bg-white p-2">
                    <p> © 2024 kabano All Rights Reserved.</p>
                    <ul className="footerlist">
                        {/* li*4 => 4 list*/}
                        <li>Privacy</li>
                        <li>Terms</li>
                        <li>aboutMe</li>
                        <li>Location</li>
                    </ul>

                    <p className="soso">English(EN)</p>
                </footer>
            </div>
        </>
    );
}

export default Footer;