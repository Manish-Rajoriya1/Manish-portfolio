import React from "react";
import {
    FaBriefcase,
    FaCalendarAlt,
    FaMapMarkerAlt,
    FaBuilding,
} from "react-icons/fa";

const Experience = () => {
    const experiences = [
        {
            role: "Data Science & AI/ML Intern",
            company: "Malhotra IT Innovation",
            location: "India",
            duration: "Internship",
            description:
                "Worked on practical Data Science and Machine Learning projects involving Python, data analysis, preprocessing, visualization and machine learning workflows.",
            skills: [
                "Python",
                "Pandas",
                "NumPy",
                "Machine Learning",
                "Data Analysis",
            ],
        },

        {
            role: "Teaching / Technical Role",
            company: "TIPSG Kotputli",
            location: "Kotputli, Rajasthan",
            duration: "Professional Experience",
            description:
                "Worked in a teaching and technical environment, developing practical problem-solving, communication and technical skills.",
            skills: [
                "Teaching",
                "Communication",
                "Python",
                "Technical Skills",
            ],
        },
    ];

    return (
        <section id="experience" className="experience-section">
            <div className="container">

                {/* Heading */}
                <div className="section-heading text-center">
                    <span className="section-tag">MY JOURNEY</span>

                    <h2>
                        Work <span>Experience</span>
                    </h2>

                    <p>
                        My professional journey, practical experience and continuous
                        learning in technology and Data Science.
                    </p>
                </div>

                {/* Timeline */}
                <div className="experience-timeline">

                    {experiences.map((experience, index) => (
                        <div
                            className={`experience-item ${index % 2 === 0 ? "left" : "right"
                                }`}
                            key={experience.company}
                            data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                        >

                            {/* Timeline dot */}
                            <div className="timeline-dot">
                                <FaBriefcase />
                            </div>

                            {/* Card */}
                            <div className="experience-card">

                                <div className="experience-header">

                                    <div>
                                        <span className="experience-duration">
                                            <FaCalendarAlt />
                                            {experience.duration}
                                        </span>

                                        <h3>{experience.role}</h3>

                                        <h4>
                                            <FaBuilding />
                                            {experience.company}
                                        </h4>
                                    </div>

                                </div>

                                <div className="experience-location">
                                    <FaMapMarkerAlt />
                                    {experience.location}
                                </div>

                                <p>{experience.description}</p>

                                {/* Skills */}
                                <div className="experience-skills">
                                    {experience.skills.map((skill) => (
                                        <span key={skill}>{skill}</span>
                                    ))}
                                </div>

                            </div>
                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
};

export default Experience;