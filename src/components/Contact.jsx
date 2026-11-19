import React, { useState } from "react";
import {
    FaEnvelope,
    FaLinkedin,
    FaGithub,
    FaMapMarkerAlt,
    FaArrowRight,
    FaFileDownload,
} from "react-icons/fa";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [status, setStatus] = useState("");
    const [loading, setLoading] = useState(false);

    // ==========================================
    // GOOGLE APPS SCRIPT WEB APP URL
    // Yahan apna deployed Apps Script URL paste karo
    // ==========================================
    const SCRIPT_URL =
        "https://script.google.com/macros/s/AKfycbwegNu_32TViSB1-WXFEvqS6zyD5ZBFHffX0gYiPl2pecG23OZUxaMDY_iDDsK2rUpjOA/exec";

    // ==========================================
    // Input Change
    // ==========================================
    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    // ==========================================
    // Form Submit
    // ==========================================
    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);
        setStatus("");

        try {
            const response = await fetch(SCRIPT_URL, {
                method: "POST",
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (result.success) {
                setStatus("success");

                // Form clear
                setFormData({
                    name: "",
                    email: "",
                    subject: "",
                    message: "",
                });
            } else {
                setStatus("error");
            }
        } catch (error) {
            console.error("Form Error:", error);
            setStatus("error");
        }

        setLoading(false);
    };

    return (
        <section id="contact" className="contact-section">
            <div className="container">

                {/* ================================
            SECTION HEADING
        ================================= */}
                <div className="section-heading text-center">

                    <span className="section-tag">
                        GET IN TOUCH
                    </span>

                    <h2>
                        Let's <span>Connect</span>
                    </h2>

                    <p>
                        Have a project, opportunity or just want to say hello?
                        Feel free to reach out.
                    </p>

                </div>


                {/* ================================
            CONTACT CONTENT
        ================================= */}
                <div className="row g-4 align-items-stretch">


                    {/* =================================
              LEFT SIDE - CONTACT INFORMATION
          ================================= */}
                    <div className="col-lg-5">

                        <div className="contact-info-card">

                            <h3>
                                Let's work together.
                            </h3>

                            <p>
                                I'm open to opportunities related to Data Science,
                                Artificial Intelligence, Machine Learning and
                                AI-driven applications.
                            </p>


                            {/* ============================
                  CONTACT DETAILS
              ============================= */}

                            <div className="contact-info-list">


                                {/* EMAIL */}
                                <div className="contact-info-item">

                                    <div className="contact-icon">
                                        <FaEnvelope />
                                    </div>

                                    <div>
                                        <span>Email</span>

                                        <a href="mailto:rjrmanish@gmail.com">
                                            rjrmanish@gmail.com
                                        </a>
                                    </div>

                                </div>


                                {/* LOCATION */}
                                <div className="contact-info-item">

                                    <div className="contact-icon">
                                        <FaMapMarkerAlt />
                                    </div>

                                    <div>
                                        <span>Location</span>

                                        <p>
                                            Jaipur, Rajasthan, India
                                        </p>
                                    </div>

                                </div>

                            </div>


                            {/* ============================
                  SOCIAL LINKS
              ============================= */}

                            <div className="contact-socials">

                                <a
                                    href="https://github.com/Manish-Rajoriya1"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="GitHub"
                                >
                                    <FaGithub />
                                </a>


                                <a
                                    href="https://www.linkedin.com/in/manish-rajoriya1/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="LinkedIn"
                                >
                                    <FaLinkedin />
                                </a>

                            </div>


                            {/* ============================
                  RESUME BUTTON
              ============================= */}

                            <a
                                href="/Manish Rajoriya.pdf"
                                download
                                className="resume-download"
                            >
                                <FaFileDownload />
                                Download Resume
                            </a>

                        </div>

                    </div>



                    {/* =================================
              RIGHT SIDE - CONTACT FORM
          ================================= */}
                    <div className="col-lg-7">

                        <div className="contact-form-card">

                            <form onSubmit={handleSubmit}>

                                <div className="row g-4">


                                    {/* =========================
                      NAME
                  ========================== */}

                                    <div className="col-md-6">

                                        <label htmlFor="name">
                                            Name
                                        </label>

                                        <input
                                            id="name"
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="Your Name"
                                            required
                                        />

                                    </div>



                                    {/* =========================
                      EMAIL
                  ========================== */}

                                    <div className="col-md-6">

                                        <label htmlFor="email">
                                            Email
                                        </label>

                                        <input
                                            id="email"
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="Your Email"
                                            required
                                        />

                                    </div>



                                    {/* =========================
                      SUBJECT
                  ========================== */}

                                    <div className="col-12">

                                        <label htmlFor="subject">
                                            Subject
                                        </label>

                                        <input
                                            id="subject"
                                            type="text"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            placeholder="What is this about?"
                                            required
                                        />

                                    </div>



                                    {/* =========================
                      MESSAGE
                  ========================== */}

                                    <div className="col-12">

                                        <label htmlFor="message">
                                            Message
                                        </label>

                                        <textarea
                                            id="message"
                                            rows="6"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            placeholder="Write your message..."
                                            required
                                        ></textarea>

                                    </div>



                                    {/* =========================
                      SUBMIT BUTTON
                  ========================== */}

                                    <div className="col-12">

                                        <button
                                            type="submit"
                                            className="send-message-btn"
                                            disabled={loading}
                                        >

                                            {loading
                                                ? "Sending..."
                                                : "Send Message"
                                            }

                                            {!loading && (
                                                <FaArrowRight />
                                            )}

                                        </button>

                                    </div>

                                </div>

                            </form>



                            {/* =========================
                  SUCCESS MESSAGE
              ========================== */}

                            {status === "success" && (

                                <div className="form-success">

                                    ✅ Message sent successfully!
                                    I'll get back to you soon.

                                </div>

                            )}



                            {/* =========================
                  ERROR MESSAGE
              ========================== */}

                            {status === "error" && (

                                <div className="form-error">

                                    ❌ Something went wrong.
                                    Please try again.

                                </div>

                            )}

                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
};

export default Contact;