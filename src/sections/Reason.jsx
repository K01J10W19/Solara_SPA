import React from 'react'
import { Element } from 'react-scroll';

function Reason() {
    const benefits = [
        { icon: "bi-currency-dollar", title: "Reduce Energy Bills", description: "Cut your electricity costs by up to 90% with solar panels that pays themselves over time." },
        { icon: "bi-leaf-fill", title: "Environmental Impact", description: "Reduce your carbon footprint and contribute to a cleaner, more sustainable future." },
        { icon: "bi-graph-up-arrow", title: "Increase Home Value", description: "Solar Installations can increase your property value by an average of 15-20%." },
        { icon: "bi-shield-fill-check", title: "25-Year Warranty", description: "Industry-leading warranty and performance guarantees for peace of mind." },
        { icon: "bi-battery-charging", title: "Energy Independence", description: "Generate your own clean energy and reduce dependence on the grid." },
        { icon: "bi-house-fill", title: "Custom Solutions", description: "Tailored solar systems designed specifically for your home and energy needs." }
    ];

    return (
        <Element name='why-solar' className="reason-section">
            <div className="container-fluid py-5 px-md-5">
                <div className="text-center mb-5">
                    <h2 className="display-5 fw-bold text-dark ff-anonypro">Why Choose Solar?</h2>
                    <p className="text-muted mx-auto" >
                        Discover the benefits of switching to solar energy and how it can transform your home and finances.
                    </p>
                </div>

                {/* Grid of Cards */}
                <div className="row g-4 mx-0">
                    {benefits.map((benefit, index) => (
                        <div className="col-12 col-md-6 col-lg-4" key={index}>
                            <div className="card h-100 border-0 shadow-sm p-4 text-center solar-card">
                                <div className="card-body d-flex flex-column align-items-center py-3">
                                    <div className="sun-icon-circle mb-4 d-flex align-items-center justify-content-center">
                                        <i className={`bi ${benefit.icon} fs-1`}></i>
                                    </div>
                                    
                                    <h4 className="card-title fw-bold mb-3">{benefit.title}</h4>
                                    <p className="card-text text-muted">
                                        {benefit.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Element>
    )
}

export default Reason