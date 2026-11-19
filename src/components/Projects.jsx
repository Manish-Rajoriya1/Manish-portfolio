import React, { useState } from "react";
import {
    FaGithub,
    FaExternalLinkAlt,
    FaBrain,
    FaChartLine,
    FaRobot,
    FaCode,
} from "react-icons/fa";

const Projects = () => {
    const [activeFilter, setActiveFilter] = useState("All");

    const projects = [
        {
            title: "House Price Prediction",
            description:
                "A Machine Learning project that predicts house prices using data preprocessing, feature engineering and regression algorithms.",
            category: "Machine Learning",
            icon: <FaChartLine />,
            technologies: ["Python", "Pandas", "NumPy", "Scikit-Learn"],
            github: "https://github.com/Manish-Rajoriya1",
            demo: "#",
        },
        {
            title: "Data Science Projects",
            description:
                "A collection of Data Science projects covering data analysis, visualization, machine learning and practical problem solving.",
            category: "Data Science",
            icon: <FaBrain />,
            technologies: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
            github: "https://github.com/Manish-Rajoriya1/Data-Science-Projects",
            demo: "https://github.com/Manish-Rajoriya1/Data-Science-Projects",
        },
        {
            title: "Python Projects",
            description:
                "A collection of Python projects designed to demonstrate programming fundamentals, logic building and practical applications.",
            category: "Python",
            icon: <FaCode />,
            technologies: ["Python", "OOP", "Functions", "File Handling"],
            github: "https://github.com/Manish-Rajoriya1/Python-Projects",
            demo: "https://github.com/Manish-Rajoriya1/Python-Projects",
        },
        {
            title: "AI & ML Projects",
            description:
                "Exploring Artificial Intelligence and Machine Learning through practical projects, predictive models and intelligent applications.",
            category: "AI / ML",
            icon: <FaRobot />,
            technologies: ["Python", "Machine Learning", "AI", "Scikit-Learn"],
            github: "https://github.com/Manish-Rajoriya1",
            demo: "#",
        },
    ];

    const filters = [
        "All",
        "Data Science",
        "Machine Learning",
        "AI / ML",
        "Python",
    ];

    const filteredProjects =
        activeFilter === "All"
            ? projects
            : projects.filter((project) => project.category === activeFilter);

    return (
        <section id="projects" className="projects-section">
            <div className="container">

                {/* Heading */}
                <div className="section-heading text-center">
                    <span className="section-tag">MY WORK</span>

                    <h2>
                        Featured <span>Projects</span>
                    </h2>

                    <p>
                        Some of the projects I've built while learning and working with
                        Data Science, AI, Machine Learning and Python.
                    </p>
                </div>

                {/* Filters */}
                <div className="project-filters">
                    {filters.map((filter) => (
                        <button
                            key={filter}
                            className={activeFilter === filter ? "active" : ""}
                            onClick={() => setActiveFilter(filter)}
                        >
                            {filter}
                        </button>
                    ))}
                </div>

                {/* Projects */}
                <div className="row g-4">

                    {filteredProjects.map((project, index) => (
                        <div
                            className="col-lg-6"
                            key={project.title}
                        >
                            <div
                                className="project-card"
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                            >

                                {/* Top */}
                                <div className="project-top">

                                    <div className="project-icon">
                                        {project.icon}
                                    </div>

                                    <span className="project-number">
                                        0{index + 1}
                                    </span>

                                </div>

                                {/* Content */}
                                <div className="project-content">

                                    <span className="project-category">
                                        {project.category}
                                    </span>

                                    <h3>{project.title}</h3>

                                    <p>{project.description}</p>

                                    {/* Technologies */}
                                    <div className="project-tech">

                                        {project.technologies.map((tech) => (
                                            <span key={tech}>{tech}</span>
                                        ))}

                                    </div>

                                    {/* Buttons */}
                                    <div className="project-buttons">

                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="project-btn github-btn"
                                        >
                                            <FaGithub />
                                            GitHub
                                        </a>

                                        <a
                                            href={project.demo}
                                            className="project-btn demo-btn"
                                        >
                                            Live Demo
                                            <FaExternalLinkAlt />
                                        </a>

                                    </div>

                                </div>

                            </div>
                        </div>
                    ))}

                </div>

                {/* GitHub CTA */}
                <div className="github-cta">

                    <p>
                        Want to see more of my projects?
                    </p>

                    <a
                        href="https://github.com/Manish-Rajoriya1"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaGithub />
                        Visit My GitHub
                    </a>

                </div>

            </div>
        </section>
    );
};

export default Projects;