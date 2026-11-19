import React from "react";
import {
    FaCertificate,
    FaPython,
    FaBrain,
    FaDatabase,
    FaExternalLinkAlt,
} from "react-icons/fa";

const Certifications = () => {
    const certifications = [
        {
            icon: <FaBrain />,
            title: "Data Science & AI",
            issuer: "CodeWithHarry",
            description:
                "Learning Python, SQL, Data Science, Machine Learning, Deep Learning, LLMs and RAG.",
            status: "Completed / Learning",
        },
        {
            icon: <FaPython />,
            title: "Python Programming",
            issuer: "Data Science Learning",
            description:
                "Practical learning of Python programming, data handling, functions, OOP and problem solving.",
            status: "Learning",
        },
        {
            icon: <FaDatabase />,
            title: "SQL & Data Analysis",
            issuer: "Data Science Learning",
            description:
                "Working with SQL, databases, data manipulation and analytical queries.",
            status: "Learning",
        },
    ];

    return (
        <section id="certifications" className="certifications-section">
            <div className="container">

                <div className="section-heading text-center">
                    <span className="section-tag">CERTIFICATIONS</span>

                    <h2>
                        Learning & <span>Certifications</span>
                    </h2>

                    <p>
                        My certifications, courses and continuous learning journey in
                        Data Science, Artificial Intelligence and technology.
                    </p>
                </div>

                <div className="certifications-grid">

                    {certifications.map((certificate, index) => (
                        <div
                            className="certificate-card"
                            key={certificate.title}
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >

                            <div className="certificate-top">
                                <div className="certificate-icon">
                                    {certificate.icon}
                                </div>

                                <FaCertificate className="certificate-mark" />
                            </div>

                            <span className="certificate-status">
                                {certificate.status}
                            </span>

                            <h3>{certificate.title}</h3>

                            <h4>{certificate.issuer}</h4>

                            <p>{certificate.description}</p>

                            <div className="certificate-footer">
                                <span>
                                    <FaCertificate />
                                    Professional Learning
                                </span>

                                <button type="button">
                                    View
                                    <FaExternalLinkAlt />
                                </button>
                            </div>

                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
};

export default Certifications;