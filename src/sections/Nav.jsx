import React from 'react'
import { useState, useEffect } from 'react';
import { Link as ScrollLink, scroller} from "react-scroll"

function Nav() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Toggle at 50px scroll
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const closeMobileMenu = () => {
        const navbarCollapse = document.getElementById('navbarNav');
        // Check if the menu is actually open before trying to close it
        if (navbarCollapse && navbarCollapse.classList.contains('show') && window.bootstrap) {
            const bsCollapse = new window.bootstrap.Collapse(navbarCollapse, {
                toggle: false
            });
            bsCollapse.hide();
        } else if (navbarCollapse && navbarCollapse.classList.contains('show')) {
            // Fallback: If JS is missing, just remove the class manually
            navbarCollapse.classList.remove('show');
        }
    };

    const handleQuoteClick = () => {
        scroller.scrollTo('quote', {
            duration: 1500,
            delay: 0,
            smooth: 'easeInOutQuart',
            offset: -50
        });
        closeMobileMenu();
    };

    return (
        <nav className={`navbar navbar-expand-lg pt-4 px-3 px-md-5 fixed-top transition-all transition-all ${scrolled ? 'glass-nav py-2 shadow-sm' : 'bg-transparent'}`}>
            <div className="container-fluid p-0">
                <div className={`ff-anonypro nav-brand-custom fs-2 d-inline-flex align-items-center col-lg-3 ${scrolled ? 'text-yellow' : 'text-white'}`}>
                    <i className="bi bi-brightness-alt-high-fill"></i>
                    <ScrollLink
                        to='home'
                        spy
                        smooth
                        activeClass='nav-brand-custom'
                        offset={-50}
                        onClick={closeMobileMenu}
                    >
                        SOLARA
                    </ScrollLink>
                </div>

                <button className="navbar-toggler border-0 shadow-none d-flex flex-column gap-1 d-lg-none" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation">
                    {/* <span className="navbar-toggler-icon"></span> */}
                    <span className="hamburger-line"></span>
                    <span className="hamburger-line"></span>
                    <span className="hamburger-line"></span>
                </button>
                
                <div className="collapse navbar-collapse navbar-smooth" id="navbarNav">
                    <ul className="navbar-nav mx-auto mb-3 mb-lg-0 d-flex flex-column flex-lg-row align-items-center text-center justify-content-center gap-4 gap-lg-5 col-9">
                        <li className="nav-item">
                            <ScrollLink 
                                className="nav-link-custom" 
                                to="why-solar"
                                spy={true}
                                smooth={true}
                                activeClass={"nav-link-active"}
                                offset={-50}
                                onClick={closeMobileMenu}
                            >
                                Why Solar
                            </ScrollLink>
                        </li>
                        <li className="nav-item">
                            <ScrollLink 
                                className="nav-link-custom" 
                                to="services"
                                spy={true}
                                smooth={true}
                                activeClass={"nav-link-active"}
                                offset={-50}
                                onClick={closeMobileMenu}
                            >
                                Our Services
                            </ScrollLink>
                        </li>
                        <li className="nav-item">
                            <ScrollLink 
                                className="nav-link-custom" 
                                to="process"
                                spy={true}
                                smooth={true}
                                activeClass={"nav-link-active"}
                                offset={-50}
                                onClick={closeMobileMenu}
                            >
                                Process
                            </ScrollLink>
                        </li>
                    </ul>

                    <button 
                        type="button" 
                        className="btn-yellow rounded-pill px-4 py-2 fw-semibold w-100 mt-3 mt-lg-0"
                        onClick={handleQuoteClick}   
                    >
                        Get a Free Quote
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Nav