import React from 'react'

function Footer() {
    return (
        <footer className="footer-section bg-dark-charcoal pt-5 pb-3 text-light">
            <div className="container-fluid px-5">
                <div className="row g-4 mb-4">
                    
                    {/* Column 1: Brand & Bio */}
                    <div className="col-12 col-md-6 col-lg-3 text-center text-md-start">
                        <a className="ff-anonypro nav-brand-custom fs-2 d-inline-flex align-items-center text-white col-lg-3 mb-3" href="#">
                            <i className="bi bi-brightness-alt-high-fill"></i>
                            <span>SOLARA</span>
                        </a>
                        <p className="opacity-75 small leading-relaxed mb-4">
                            Leading Luxembourg solar installation company committed to providing clean, affordable energy solutions for homes and businesses across the Grand Duchy.
                        </p>
                        <div className="d-flex gap-3 justify-content-center justify-content-md-start">
                            <a href="#" className="social-icon"><i className="bi bi-facebook"></i></a>
                            <a href="#" className="social-icon"><i className="bi bi-send-fill"></i></a>
                            <a href="#" className="social-icon"><i className="bi bi-linkedin"></i></a>
                        </div>
                    </div>

                    {/* Column 2: Services */}
                    <div className="col-6 col-md-3 col-lg-2 offset-lg-1 text-center text-md-start">
                        <h5 className="fw-bold mb-4">Services</h5>
                        <ul className="list-unstyled d-flex flex-column gap-3 opacity-75 small">
                            <li><a href="#" className="footer-link">Residential Solar</a></li>
                            <li><a href="#" className="footer-link">Energy Storage</a></li>
                            <li><a href="#" className="footer-link">Solar Maintenance</a></li>
                        </ul>
                    </div>

                    {/* Column 3: Quick Links */}
                    <div className="col-6 col-md-3 col-lg-2 text-center text-md-start">
                        <h5 className="fw-bold mb-4">Quick Links</h5>
                        <ul className="list-unstyled d-flex flex-column gap-3 opacity-75 small">
                            <li><a href="#" className="footer-link">Home</a></li>
                            <li><a href="#" className="footer-link">Why Sora</a></li>
                            <li><a href="#" className="footer-link">Our Services</a></li>
                            <li><a href="#" className="footer-link">Process</a></li>
                        </ul>
                    </div>

                    {/* Column 4: Contact Us */}
                    <div className="col-12 col-md-12 col-lg-3 offset-lg-1 mt-md-5 mt-lg-4 text-center text-lg-start">
                        <h5 className="fw-bold mb-4">Contact Us</h5>
                        <div className="d-flex flex-column gap-4 small">
                            <div className="d-flex align-items-center gap-3 justify-content-center justify-content-lg-start">
                                <i className="bi bi-telephone-fill text-yellow"></i>
                                <span className="opacity-75">+352 27 85 SOLARA</span>
                            </div>
                            <div className="d-flex align-items-center gap-3 justify-content-center justify-content-lg-start">
                                <i className="bi bi-envelope-fill text-yellow"></i>
                                <span className="opacity-75">info@solara.com</span>
                            </div>
                            <div className="d-flex align-items-start gap-3 justify-content-center justify-content-lg-start">
                                <i className="bi bi-geo-alt-fill text-yellow"></i>
                                <span className="opacity-75">15 Rue de Energie<br/>L-1234 Luxembourg</span>
                            </div>
                        </div>
                        
                        {/* Free Consultation Box */}
                        <div className="consultation-box mt-4 p-3 rounded shadow-sm">
                            <p className="fw-bold text-yellow mb-1 small">Free Consultation:</p>
                            <p className="x-small mb-0 opacity-75">Call us today for your personalized solar assessment</p>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <hr className="opacity-25 m-0" />
                <div className="d-flex flex-column flex-md-row justify-content-between align-items-center pt-3 small opacity-50">
                    <p className="mb-2 mb-md-0">SOLARA. All rights reserved</p>
                    <div className="d-flex gap-4">
                        <a href="#" className="footer-link">Privacy Policy</a>
                        <a href="#" className="footer-link">Terms of Service</a>
                        <a href="#" className="footer-link">Cookie Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer