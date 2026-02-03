import React from 'react'
import { Element } from 'react-scroll';

function Services() {
    const services = [
        { title: "Residential Solar", description: "Custom-designed roof arrays optimized for your home's architecture."},
        { title: "Energy Storage", description: "Next-gen battery systems (like Tesla Powerwall) to keep your lights on during outages."},
        { title: "Solar Maintenance", description: "Professional cleaning and system monitoring to ensure 100% efficiency."}
    ];

    return (
        <Element name='services' className="services-section position-relative">
            <div className="container-fluid p-5">
                <div className="row align-items-center m-0">

                    {/* Left Side: Section Title */}
                    <div className="col-12 col-lg-5 mb-5 mb-lg-0 text-center text-lg-start">
                        <h2 className="display-3 fw-bold text-white ff-anonypro mb-3">
                            Our Services
                        </h2>
                        <p className="text-light opacity-75 fs-6">
                            Focus on the technical diversity of solar
                        </p>
                    </div>

                    {/* Right Side: Service Cards */}
                    <div className="col-12 col-lg-7">
                        <div className="d-flex flex-column gap-4 gap-xl-5">
                            {services.map((service, index) => (
                                <div key={index} className="service-card p-3 d-flex align-items-start gap-4">
                                    <div className="bolt-circle flex-shrink-0 d-none d-sm-flex">
                                        <i className="bi bi-lightning-charge-fill"></i>
                                    </div>
                                    
                                    <div>
                                        <h3 className="h2 text-white fw-bold mb-2 ff-anonypro">
                                            {service.title}
                                        </h3>
                                        <p className="text-white opacity-75 mb-0 fs-6">
                                            {service.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </Element>
    )
}

export default Services