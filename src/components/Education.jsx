import React from "react";
import {
    FaGraduationCap,
    FaUniversity,
    FaBookOpen,
    FaCertificate,
} from "react-icons/fa";

const Education = () => {
    const education = [
        {
            icon: <FaUniversity />,
            degree: "Bachelor's Degree",
            institute: "Jodhpur National University",
            description:
                "Completed higher education with a focus on building a strong academic and technical foundation.",
            type: "Education",
        },

        {
            icon: <FaCertificate />,
            degree: "Data Science & AI Course",
            institute: "CodeWithHarry",
            description:
                "Learning Data Science and Artificial Intelligence including Python, SQL, Machine Learning, Deep Learning, LLMs and RAG.",
            type: "Professional Learning",
        },
    ];

    return (
        <section id="education" className="education-section">
            <div className="container">

                {/* Heading */}
                <div className="section-heading text-center">
                    <span className="section-tag">EDUCATION</span>

                    <h2>
                        Education & <span>Learning</span>
                    </h2>

                    <p>
                        My academic background and continuous learning journey in
                        Data Science, Artificial Intelligence and technology.
                    </p>
                </div>

                {/* Education Cards */}
                <div className="education-grid">

                    {education.map((item, index) => (
                        <div
                            className="education-card"
                            key={item.institute}
                            data-aos="fade-up"
                            data-aos-delay={index * 120}
                        >

                            <div className="education-icon">
                                {item.icon}
                            </div>

                            <span className="education-type">
                                {item.type}
                            </span>

                            <h3>{item.degree}</h3>

                            <h4>{item.institute}</h4>

                            <div className="education-line"></div>

                            <p>{item.description}</p>

                            <div className="education-bottom">
                                <FaBookOpen />
                                Continuous Learning
                            </div>

                        </div>
                    ))}

                </div>

                {/* Learning Quote */}
                <div className="learning-banner" data-aos="zoom-in">

                    <FaGraduationCap />

                    <div>
                        <h3>Always Learning. Always Building.</h3>
                        <p>
                            I believe that the best way to learn technology is by
                            building real-world projects and solving practical problems.
                        </p>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default Education;