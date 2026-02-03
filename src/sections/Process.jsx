import React from 'react'
import { Element } from 'react-scroll';

function Process() {
    const steps = [
        {
            id: "01",
            icon: "bi-calculator-fill",
            title: "Get Your Quote",
            description: "Fill out our simple form to get a personalized solar quote based on your energy usage and roof specifications."
        },
        {
            id: "02",
            icon: "bi-house-fill",
            title: "Site Assessment",
            description: "Our certified technicians visit your home to assess your roof, electrical system, and optimal panel placement."
        },
        {
            id: "03",
            icon: "bi-tools",
            title: "Professional Installation",
            description: "Expert installation team installs your solar system with minimal disruption to your daily routine."
        },
        {
            id: "04",
            icon: "bi-sun-fill",
            title: "Start Saving",
            description: "Begin generating clean energy and watch your electricity bills drop while helping the environment."
        }
    ];

    return (
        <Element name='process' className="process-section bg-white">
            <div className="container-fluid p-5">
                <div className="text-center mb-3">
                    <h2 className="display-5 fw-bold text-dark ff-anonypro">How It Works</h2>
                    <p className="text-muted mx-auto fs-5">
                        Our simple 4-step process makes going solar easy and hassle-free.
                    </p>
                </div>

                <div className="row g-4 m-0">
                    {steps.map((step, index) => (
                        <div key={index} className="col-12 col-md-6 col-lg-3 mt-5 mt-lg-4">
                            <div className="process-card h-100 p-3 pt-4 p-xl-5 text-center position-relative">
                                <div className="step-badge fw-bold">
                                    {step.id}
                                </div>
                                
                                <div className="step-icon-circle mx-auto mb-4 d-flex align-items-center justify-content-center">
                                    <i className={`bi ${step.icon} fs-4`}></i>
                                </div>

                                <h4 className="fw-bold mb-3">{step.title}</h4>
                                <p className="text-muted mb-0">
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Element>
    )
}

export default Process