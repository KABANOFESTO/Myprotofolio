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
                        <li>Sitemap</li>
                        <li>Company details</li>
                    </ul>

                    <p className="soso">English(IN) ₹ INR</p>
                </footer>
            </div>
        </>
    );
}

export default Footer;