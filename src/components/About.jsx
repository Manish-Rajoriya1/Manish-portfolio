import React from "react";
import {
    FaCode,
    FaBrain,
    FaChartLine,
    FaServer,
    FaMapMarkerAlt,
    FaGraduationCap,
    FaArrowRight,
} from "react-icons/fa";

const About = () => {
    return (
        <section id="about" className="about-section">
            <div className="section-glow about-glow"></div>

            <div className="container">

                {/* Heading */}
                <div className="section-heading">
                    <span className="section-label">ABOUT ME</span>

                    <h2>
                        Building with <span>Data & Intelligence</span>
                    </h2>

                    <p>
                        A little more about who I am, what I do and what I'm passionate
                        about.
                    </p>
                </div>

                <div className="row align-items-center g-5">

                    {/* LEFT */}
                    <div className="col-lg-5">

                        <div className="about-profile-card">

                            <div className="about-card-top">
                                <div className="about-avatar">
                                    M
                                </div>

                                <div>
                                    <h4>Manish Saini Rajoriya</h4>
                                    <p>Data Science & AI/ML Engineer</p>
                                </div>
                            </div>

                            <div className="about-line"></div>

                            <div className="about-info">
                                <div>
                                    <FaMapMarkerAlt />
                                    <span>Jaipur, Rajasthan, India</span>
                                </div>

                                <div>
                                    <FaGraduationCap />
                                    <span>Jodhpur National University</span>
                                </div>
                            </div>

                            <div className="about-mini-stats">

                                <div>
                                    <strong>DS</strong>
                                    <span>Data Science</span>
                                </div>

                                <div>
                                    <strong>AI</strong>
                                    <span>Artificial Intelligence</span>
                                </div>

                                <div>
                                    <strong>ML</strong>
                                    <span>Machine Learning</span>
                                </div>

                            </div>

                        </div>

                    </div>

                    {/* RIGHT */}
                    <div className="col-lg-7">

                        <div className="about-content">

                            <p className="about-lead">
                                I'm a{" "}
                                <strong>Data Science & AI/ML professional</strong>{" "}
                                passionate about turning data into meaningful insights and
                                building intelligent solutions for real-world problems.
                            </p>

                            <p>
                                My interests span across{" "}
                                <span className="highlight">Data Analysis</span>,{" "}
                                <span className="highlight">Machine Learning</span>,{" "}
                                <span className="highlight">Deep Learning</span>,{" "}
                                <span className="highlight">Generative AI</span>, LLMs and
                                RAG-based applications.
                            </p>

                            <p>
                                Alongside AI and Data Science, I also work with modern web and
                                backend technologies such as React, Node.js, Express.js,
                                REST APIs and MongoDB to build complete applications.
                            </p>

                            {/* Expertise */}
                            <div className="expertise-grid">

                                <div className="expertise-card">
                                    <div className="expertise-icon">
                                        <FaChartLine />
                                    </div>
                                    <div>
                                        <h5>Data Science</h5>
                                        <p>Analysis, visualization & predictive modeling</p>
                                    </div>
                                </div>

                                <div className="expertise-card">
                                    <div className="expertise-icon">
                                        <FaBrain />
                                    </div>
                                    <div>
                                        <h5>AI / ML</h5>
                                        <p>Machine learning & intelligent applications</p>
                                    </div>
                                </div>

                                <div className="expertise-card">
                                    <div className="expertise-icon">
                                        <FaServer />
                                    </div>
                                    <div>
                                        <h5>Backend & APIs</h5>
                                        <p>Node.js, Express.js & REST APIs</p>
                                    </div>
                                </div>

                                <div className="expertise-card">
                                    <div className="expertise-icon">
                                        <FaCode />
                                    </div>
                                    <div>
                                        <h5>Web Development</h5>
                                        <p>React & responsive web applications</p>
                                    </div>
                                </div>

                            </div>

                            <a href="#skills" className="about-link">
                                Explore my skills <FaArrowRight />
                            </a>

                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;