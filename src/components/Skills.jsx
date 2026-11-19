import React from "react";
import {
    FaPython,
    FaReact,
    FaNodeJs,
    FaGitAlt,
    FaGithub,
    FaDatabase,
    FaBrain,
    FaCode,
} from "react-icons/fa";

import {
    SiPandas,
    SiNumpy,
    SiScikitlearn,
    SiTensorflow,
    SiMongodb,
    SiMysql,
    SiJavascript,
    SiExpress,
    SiJupyter,
    SiFlask,
} from "react-icons/si";

const Skills = () => {
    const skillGroups = [
        {
            title: "Programming",
            icon: <FaCode />,
            description: "Languages I use to build and solve problems.",
            skills: [
                { name: "Python", icon: <FaPython /> },
                { name: "JavaScript", icon: <SiJavascript /> },
                { name: "SQL", icon: <FaDatabase /> },
            ],
        },

        {
            title: "Data Science",
            icon: <FaDatabase />,
            description: "Turning raw data into meaningful insights.",
            skills: [
                { name: "NumPy", icon: <SiNumpy /> },
                { name: "Pandas", icon: <SiPandas /> },
                { name: "Scikit-Learn", icon: <SiScikitlearn /> },
                { name: "Jupyter", icon: <SiJupyter /> },
            ],
        },

        {
            title: "AI / Machine Learning",
            icon: <FaBrain />,
            description: "Building intelligent and predictive solutions.",
            skills: [
                { name: "TensorFlow", icon: <SiTensorflow /> },
                { name: "Machine Learning", icon: <FaBrain /> },
                { name: "Deep Learning", icon: <FaBrain /> },
                { name: "Computer Vision", icon: <FaBrain /> },
                { name: "NLP", icon: <FaBrain /> },
                { name: "LLMs", icon: <FaBrain /> },
                { name: "RAG", icon: <FaBrain /> },
            ],
        },

        {
            title: "Backend & APIs",
            icon: <FaNodeJs />,
            description: "Building server-side applications and APIs.",
            skills: [
                { name: "Node.js", icon: <FaNodeJs /> },
                { name: "Express.js", icon: <SiExpress /> },
                { name: "Flask", icon: <SiFlask /> },
                { name: "REST API", icon: <FaServerIcon /> },
            ],
        },

        {
            title: "Databases",
            icon: <FaDatabase />,
            description: "Working with structured and NoSQL databases.",
            skills: [
                { name: "MongoDB", icon: <SiMongodb /> },
                { name: "MySQL", icon: <SiMysql /> },
                { name: "Database Design", icon: <FaDatabase /> },
                { name: "CRUD", icon: <FaDatabase /> },
            ],
        },

        {
            title: "Frontend & Tools",
            icon: <FaReact />,
            description: "Creating modern web experiences and workflows.",
            skills: [
                { name: "React", icon: <FaReact /> },
                { name: "HTML5", icon: <FaCode /> },
                { name: "CSS3", icon: <FaCode /> },
                { name: "Bootstrap", icon: <FaCode /> },
                { name: "Git", icon: <FaGitAlt /> },
                { name: "GitHub", icon: <FaGithub /> },
            ],
        },
    ];

    return (
        <section id="skills" className="skills-section">

            <div className="section-glow skills-glow"></div>

            <div className="container">

                <div className="section-heading">
                    <span className="section-label">MY SKILLS</span>

                    <h2>
                        Tools I use to <span>build & create</span>
                    </h2>

                    <p>
                        A combination of data, AI, backend and frontend technologies
                        that helps me build complete solutions.
                    </p>
                </div>

                <div className="skills-grid">

                    {skillGroups.map((group, index) => (
                        <div
                            className="skill-group-card"
                            key={group.title}
                            style={{ animationDelay: `${index * 0.08}s` }}
                        >

                            <div className="skill-group-header">

                                <div className="skill-group-icon">
                                    {group.icon}
                                </div>

                                <div>
                                    <h4>{group.title}</h4>
                                    <p>{group.description}</p>
                                </div>

                            </div>

                            <div className="skill-items">

                                {group.skills.map((skill) => (
                                    <div className="skill-item" key={skill.name}>

                                        <span className="skill-item-icon">
                                            {skill.icon}
                                        </span>

                                        <span>{skill.name}</span>

                                    </div>
                                ))}

                            </div>

                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
};

/* Small helper icon for REST API */
const FaServerIcon = () => (
    <span style={{ fontSize: "18px" }}>⚡</span>
);

export default Skills;