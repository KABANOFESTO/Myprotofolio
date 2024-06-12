

const Contact = () => {
    return (
        <>
            <div style={{ marginTop: '0px' }} className="row no-margin">
                <iframe
                    style={{ width: '100%', height: '300px', border: 0 }}
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.4751087853338!2d30.119153!3d-1.9637585000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca7ae8598d631%3A0xc552b4bcc2764eed!2sRemera%20Miracle%20Center%20Church!5e0!3m2!1sen!2srw!4v1713910249556!5m2!1sen!2srw"
                    title="Remera Miracle Center Church"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />
            </div>

            <div className="row contact-rooo big-padding no-margin">
                <div className="container">
                    <div className="row">
                        <div style={{ padding: '20px' }} className="col-sm-7">

                            <br />
                            <div className="row cont-row">

                                <div className="col-sm-3">
                                    <label></label>
                                    <span>:</span>
                                </div>
                                <div className="col-sm-8">
                                    <h2 className="fs-4 fw-bold text-white">Contact Form</h2><br />
                                    <input
                                        type="text"
                                        placeholder="Enter Name"
                                        name="name"
                                        className="form-control input-sm"
                                    />
                                </div>
                            </div>
                            <div className="row cont-row">
                                <div className="col-sm-3">
                                    <label></label>
                                    <span>:</span>
                                </div>
                                <div className="col-sm-8">
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Enter Email Address"
                                        className="form-control input-sm"
                                    />
                                </div>
                            </div>
                            <div className="row cont-row">
                                <div className="col-sm-3">
                                    <label></label>
                                    <span>:</span>
                                </div>
                                <div className="col-sm-8">
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Enter Mobile Number"
                                        className="form-control input-sm"
                                    />
                                </div>
                            </div>
                            <div className="row cont-row">
                                <div className="col-sm-3">
                                    <label></label>
                                    <span>:</span>
                                </div>
                                <div className="col-sm-8">
                                    <textarea
                                        rows="5"
                                        placeholder="Enter Your Message"
                                        className="form-control input-sm"
                                    ></textarea>
                                </div>
                            </div>
                            <div style={{ marginTop: '10px' }} className="row">
                                <div style={{ paddingTop: '10px' }} className="col-sm-3">
                                    <label></label>
                                </div>
                                <div className="col-sm-8">
                                    <button className="btn btn-success fs-5 btn-sm">
                                        Send Message
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-5 text-white">
                            <div style={{ margin: '50px' }} className="serv">
                                <h2 className="fs-4 fw-bold" style={{ marginTop: '10px' }}>
                                    Address
                                </h2>
                                <p className="fs-5">
                                    Kigli, Rwanda <br />
                                    Kicukiro
                                    <br />
                                    Remera
                                    <br />
                                    Phone: +250785206973
                                    <br />
                                    Email: kabanofesto1@gmail.com
                                    <br />
                                    Website: www.myBrand.com
                                    <br />
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;