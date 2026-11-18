import React, { useState } from "react";

import { NavLink, useNavigate } from "react-router-dom";

import {
    FaHome,
    FaUser,
    FaCode,
    FaProjectDiagram,
    FaBriefcase,
    FaGraduationCap,
    FaCertificate,
    FaEnvelope,
    FaBars,
    FaTimes,
} from "react-icons/fa";


const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    const navigate = useNavigate();


    // ==========================================
    // CLOSE MOBILE MENU
    // ==========================================

    const handleNavigation = () => {
        setMenuOpen(false);

        // Page ke top par le jao
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };


    // ==========================================
    // HOME
    // ==========================================

    const goHome = () => {

        setMenuOpen(false);

        navigate("/");

        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };


    return (

        <nav className="navbar navbar-expand-lg custom-navbar">

            <div className="container">


                {/* =====================================
            LOGO
        ====================================== */}

                <button
                    type="button"
                    className="navbar-brand brand-button"
                    onClick={goHome}
                >

                    <span className="brand-bracket">
                        &lt;
                    </span>

                    <span className="brand-name">
                        Manish
                    </span>

                    <span className="brand-bracket">
                        /&gt;
                    </span>

                </button>


                {/* =====================================
            MOBILE TOGGLE
        ====================================== */}

                <button
                    type="button"
                    className="navbar-toggler custom-toggler"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle navigation"
                >

                    {menuOpen ? (
                        <FaTimes />
                    ) : (
                        <FaBars />
                    )}

                </button>


                {/* =====================================
            NAVIGATION
        ====================================== */}

                <div
                    className={`navbar-collapse ${menuOpen
                            ? "show mobile-menu-open"
                            : ""
                        }`}
                >

                    <ul className="navbar-nav ms-auto align-items-lg-center">


                        {/* HOME */}

                        <li className="nav-item">

                            <NavLink
                                to="/"
                                onClick={handleNavigation}
                                className={({ isActive }) =>
                                    `nav-link nav-button ${isActive ? "active" : ""
                                    }`
                                }
                            >

                                <FaHome />

                                <span>
                                    Home
                                </span>

                            </NavLink>

                        </li>


                        {/* ABOUT */}

                        <li className="nav-item">

                            <NavLink
                                to="/about"
                                onClick={handleNavigation}
                                className={({ isActive }) =>
                                    `nav-link nav-button ${isActive ? "active" : ""
                                    }`
                                }
                            >

                                <FaUser />

                                <span>
                                    About
                                </span>

                            </NavLink>

                        </li>


                        {/* SKILLS */}

                        <li className="nav-item">

                            <NavLink
                                to="/skills"
                                onClick={handleNavigation}
                                className={({ isActive }) =>
                                    `nav-link nav-button ${isActive ? "active" : ""
                                    }`
                                }
                            >

                                <FaCode />

                                <span>
                                    Skills
                                </span>

                            </NavLink>

                        </li>


                        {/* PROJECTS */}

                        <li className="nav-item">

                            <NavLink
                                to="/projects"
                                onClick={handleNavigation}
                                className={({ isActive }) =>
                                    `nav-link nav-button ${isActive ? "active" : ""
                                    }`
                                }
                            >

                                <FaProjectDiagram />

                                <span>
                                    Projects
                                </span>

                            </NavLink>

                        </li>


                        {/* EXPERIENCE */}

                        <li className="nav-item">

                            <NavLink
                                to="/experience"
                                onClick={handleNavigation}
                                className={({ isActive }) =>
                                    `nav-link nav-button ${isActive ? "active" : ""
                                    }`
                                }
                            >

                                <FaBriefcase />

                                <span>
                                    Experience
                                </span>

                            </NavLink>

                        </li>


                        {/* EDUCATION */}

                        <li className="nav-item">

                            <NavLink
                                to="/education"
                                onClick={handleNavigation}
                                className={({ isActive }) =>
                                    `nav-link nav-button ${isActive ? "active" : ""
                                    }`
                                }
                            >

                                <FaGraduationCap />

                                <span>
                                    Education
                                </span>

                            </NavLink>

                        </li>


                        {/* CERTIFICATIONS */}

                        <li className="nav-item">

                            <NavLink
                                to="/certifications"
                                onClick={handleNavigation}
                                className={({ isActive }) =>
                                    `nav-link nav-button ${isActive ? "active" : ""
                                    }`
                                }
                            >

                                <FaCertificate />

                                <span>
                                    Certifications
                                </span>

                            </NavLink>

                        </li>


                        {/* CONTACT */}

                        <li className="nav-item">

                            <NavLink
                                to="/contact"
                                onClick={handleNavigation}
                                className={({ isActive }) =>
                                    `nav-link nav-button contact-nav-button ${isActive ? "active" : ""
                                    }`
                                }
                            >

                                <FaEnvelope />

                                <span>
                                    Contact
                                </span>

                            </NavLink>

                        </li>

                    </ul>

                </div>

            </div>

        </nav>
    );
};

export default Navbar;