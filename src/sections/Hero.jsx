import React from 'react'

function Hero() {
    return (
        <header name='home' className="hero-section flex-grow-1 pt-5 mt-5 d-flex align-items-center position-relative overflow-hidden">
            <div className="container-fluid px-md-5">
                <div className="row align-items-center text-center">
                    
                    {/* Left Text Overlay */}
                    <div className="col-12 col-md-4 order-2 order-md-1 text-start hero-text-left ps-3 ps-md-5 p-0 mb-3 mb-md-0">
                        <h1 className="display-1 fw-bold mb-0 text-light d-inline-block d-md-block me-3 me-md-0">SOLAR</h1>
                        <h1 className="display-1 fw-bold text-light d-inline-block d-md-block">PANEL</h1>
                        <button type='button' className="btn-yellow rounded-pill px-3 py-2 fw-semibold mt-0 mt-md-4 d-flex align-items-center gap-3">
                            See more 
                            <span className="arrow-circle fs-4">↗</span>
                        </button>
                    </div>

                    {/* Center Image (The House) */}
                    <div className="col-12 col-md-4 order-1 order-md-2 position-relative p-3 p-md-0 z-0">
                        <img 
                            src="./assets/Solar_House.png" 
                            alt="Solar House" 
                            className="img-fluid main-house-img"
                        />
                    </div>

                    {/* Right Text Overlay */}
                    <div className="col-12 col-md-4 order-3 order-md-3 text-end hero-text-right pe-3 pe-md-5 p-0">
                        <div className="d-inline-block text-start">
                            <h1 className="display-1 fw-bold border-bottom border-warning-subtle border-2 border-lg-5 mb-0 text-light  d-inline-block d-md-block me-3 me-md-0">PURE</h1>
                            <h1 className="display-1 fw-bold text-light  d-inline-block d-md-block">SUN</h1>
                        </div>
                        <div className="mt-0 mt-md-4">
                            <span className="badge bg-white text-dark rounded-pill px-3 py-2">
                                Review 
                                <span className="text-warning ps-2">★ 4.9</span>
                            </span>
                        </div>
                    </div>

                    {/* Data Display */}
                    <div className="py-4 py-md-5 z-1 order-4">
                        <div className="container px-0">
                            <div className="row text-center">
                                <div className="col-md-4">
                                    <h2 className="text-yellow fw-bold display-5">25+</h2>
                                    <p className="text-uppercase fw-bold text-light">Years Warranty</p>
                                </div>
                                <div className="col-md-4">
                                    <h2 className="text-yellow fw-bold display-5">$0</h2>
                                    <p className="text-uppercase fw-bold text-light">Upfront Cost Options</p>
                                </div>
                                <div className="col-md-4">
                                    <h2 className="text-yellow fw-bold display-5">90%</h2>
                                    <p className="text-uppercase fw-bold text-light">Average Savings</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </header>
    )
}

export default Hero