import React from 'react'

function Testimonials() {
    return (
        <section name='quote' className="quote-section bg-light">
            <div className="container-fluid p-5">
                <div className="row g-5 align-items-center">
                
                {/* Left Side: Content and Image */}
                <div className="col-12 col-lg-6 text-center text-lg-start">
                    <h2 className="display-4 fw-bold text-dark mb-3 ff-anonypro">Get Your Free Solar Quote</h2>
                    <p className="text-muted fs-6 mb-4">
                        Ready to start saving with solar? Get a personalized quote tailored to your home and energy needs.
                    </p>
                    
                    <img 
                        src= "/assets/Solar_House_Real.jpg"
                        alt="Modern solar home" 
                        className="img-fluid rounded-3 shadow-sm mb-4" 
                    />

                    <ul className="list-unstyled">
                        {['No upfront costs available', '25-year warranty included', 'Professional installation'].map((text, i) => (
                            <li key={i} className="d-flex align-items-center mb-3 justify-content-center justify-content-lg-start">
                                <i className="bi bi-check-circle-fill text-yellow me-3 fs-4"></i>
                                <span className="fw-light text-black">{text}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Right Side: Quote Form Card */}
                <div className="col-12 col-lg-6 mt-4">
                    <div className="card border-0 shadow-lg p-4 p-md-5 rounded-4">
                        <h3 className="text-center mb-5 mb-lg-4 fw-semibold">Request Your Quote</h3>
                        <form>
                            <div className="row g-3">
                                <div className="col-md-6">
                                    <label className="form-label small fw-bold">Full Name *</label>
                                    <input type="text" className="form-control bg-light border-0 py-2" placeholder="Your name" />
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label small fw-bold">Email Address *</label>
                                    <input type="email" className="form-control bg-light border-0 py-2" placeholder="Your email" />
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label small fw-bold">Phone Number *</label>
                                    <input type="tel" className="form-control bg-light border-0 py-2" placeholder="Phone" />
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label small fw-bold">Property Type</label>
                                    <select className="form-select bg-light border-0 py-2">
                                        <option defaultValue>Select property type</option>
                                        <option>Residential</option>
                                        <option>Commercial</option>
                                    </select>
                                </div>
                                <div className="col-12">
                                    <label className="form-label small fw-bold">Property Address *</label>
                                    <input type="text" className="form-control bg-light border-0 py-2" placeholder="Enter your full address" />
                                </div>
                                <div className="col-12">
                                    <label className="form-label small fw-bold">Additional Information</label>
                                    <textarea className="form-control bg-light border-0 py-2 textarea-fixed" rows="3" placeholder="Any specific requirements?"></textarea>
                                </div>
                                <div className="col-12 mt-4">
                                    <button type="submit" className="btn btn-yellow w-100 py-3 fw-bold rounded-pill shadow-sm">
                                        Get My Free Quote
                                    </button>
                                </div>
                                <div className="col-12 text-center mt-3">
                                    <p className="small text-muted mb-0">
                                        By submitting this form, you agree to our terms and privacy policy. We'll contact you within 24 hours.
                                    </p>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

                </div>
            </div>
        </section>
    )
}

export default Testimonials