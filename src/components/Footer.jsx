import React from "react";
import {
    FaGithub,
    FaLinkedin,
    FaArrowUp,
} from "react-icons/fa";

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <footer className="footer-section">

            <div className="container">

                <div className="footer-content">

                    <div className="footer-brand">

                        <h3>
                            Manish<span>.</span>
                        </h3>

                        <p>
                            Data Science & AI/ML Engineer
                        </p>

                    </div>

                    <div className="footer-socials">

                        <a
                            href="https://github.com/Manish-Rajoriya1"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaGithub />
                        </a>

                        <a
                            href="https://www.linkedin.com/in/manish-rajoriya1/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaLinkedin />
                        </a>

                    </div>

                    <button
                        className="back-to-top"
                        onClick={scrollToTop}
                        aria-label="Back to top"
                    >
                        <FaArrowUp />
                    </button>

                </div>

                <div className="footer-bottom">

                    <p>
                        © {new Date().getFullYear()} Manish Saini Rajoriya.
                        All rights reserved.
                    </p>

                    <p>
                        Built with React ⚡
                    </p>

                </div>

            </div>

        </footer>
    );
};

export default Footer;