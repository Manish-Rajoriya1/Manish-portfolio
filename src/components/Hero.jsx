import React from "react";
import {
    FaArrowRight,
    FaDownload,
    FaPython,
    FaReact,
    FaNodeJs
} from "react-icons/fa";

const Hero = () => {
    return (
        <section id="home" className="hero-section">

            {/* Background Effects */}
            <div className="hero-grid"></div>

            <div className="glow glow-one"></div>
            <div className="glow glow-two"></div>
            <div className="glow glow-three"></div>

            <div className="floating-dot dot-one"></div>
            <div className="floating-dot dot-two"></div>
            <div className="floating-dot dot-three"></div>
            <div className="floating-dot dot-four"></div>

            <div className="container hero-container">

                <div className="row align-items-center">

                    {/* LEFT SIDE */}
                    <div className="col-lg-7">

                        <div className="hero-badge">
                            <span></span>
                            Open to Data Science & AI/ML opportunities
                        </div>

                        <p className="hero-intro">
                            Hi, I'm
                        </p>

                        <h1 className="hero-title">
                            Manish Saini
                            <br />
                            <span>Rajoriya</span>
                        </h1>

                        <h2 className="hero-role">
                            Data Science & <span>AI/ML Engineer</span>
                        </h2>

                        <p className="hero-description">
                            I build practical solutions with Python, Machine Learning, Deep Learning, Generative AI, LLMs, RAG and data-driven applications — from analysis and prediction to intelligent automation.
                        </p>

                        <div className="hero-buttons">

                            <a href="#projects" className="btn-primary-custom">
                                View My Projects
                                <FaArrowRight />
                            </a>

                            <a
                                href="/Manish Rajoriya.pdf"
                                download
                                className="btn-outline-custom"
                            >
                                Download Resume
                                <FaDownload />
                            </a>

                        </div>

                        <div className="hero-tech">

                            <div>
                                <FaPython />
                                <span>Python</span>
                            </div>

                            <div>
                                <FaReact />
                                <span>React</span>
                            </div>

                            <div>
                                <FaNodeJs />
                                <span>Node.js</span>
                            </div>

                        </div>

                    </div>

                    {/* RIGHT SIDE */}
                    <div className="col-lg-5">

                        <div className="hero-image-wrapper">

                            <div className="image-glow"></div>

                            <div className="hero-image-card">

                                <img
                                    src="/Manish Image.jpeg"
                                    alt="Manish Saini Rajoriya"
                                />

                            </div>

                            <div className="floating-card card-ai">
                                🤖
                                <div>
                                    <strong>AI / ML</strong>
                                    <small>Building Intelligence</small>
                                </div>
                            </div>

                            <div className="floating-card card-data">
                                📊
                                <div>
                                    <strong>Data</strong>
                                    <small>Turning Data Into Insights</small>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>

            </div>

            <div className="scroll-indicator">
                <span></span>
                Scroll to explore
            </div>

        </section>
    );
};

export default Hero;