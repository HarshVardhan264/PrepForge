import React from "react";
import "../style/contact.scss";

const Contact = () => {
    return (
        <main className="contact-page">

            {/* ================= NAVBAR ================= */}
            <header className="about-header">
                <a href="/about" className="about-logo">
                    <span className="about-logo-mark">
                        <img src="/fox2.png" alt="PrepForge" />
                    </span>

                    <span className="about-logo-text">
                        Prep<span>Forge</span>
                    </span>
                </a>

                <nav className="about-nav">
                    <a href="/">HOME</a>


                    <a
                        href="/about"

                    >
                        ABOUT
                    </a>

                    <a href="/contact" className="active">CONTACT</a>
                </nav>

                <a href="/" className="about-nav-button">
                    Get Started
                    <span>→</span>
                </a>
            </header>

            {/* ================= CONTACT HERO ================= */}
            <section className="contact-hero">

                {/* Decorative dots */}
                <div className="contact-dots contact-dots-top">
                    {Array.from({ length: 16 }).map((_, index) => (
                        <span key={index}></span>
                    ))}
                </div>


                {/* ================= LEFT SIDE ================= */}
                <div className="contact-left">

                    {/* Small badge */}
                    <div className="contact-badge">
                        <span>↗</span>
                        LET'S CONNECT
                    </div>

                    {/* Heading */}
                    <h1 className="contact-title">
                        Have a question?
                        <br />
                        <span>Let's talk.</span>
                    </h1>

                    {/* Description */}
                    <p className="contact-description">
                        Whether you have a question about PrepForge, need
                        help with your interview preparation, or simply want
                        to share some feedback, I'd love to hear from you.
                    </p>


                    {/* ================= CONTACT DETAILS ================= */}
                    <div className="contact-details">

                        {/* Email */}
                        <div className="contact-detail">
                            <span className="detail-number">01</span>

                            <div className="detail-content">
                                <span className="detail-label">
                                    EMAIL
                                </span>

                                <a href="mailto:hello@prepforge.ai">
                                    hello@prepforge.ai
                                </a>
                            </div>
                        </div>


                        {/* Response time */}
                        <div className="contact-detail">
                            <span className="detail-number">02</span>

                            <div className="detail-content">
                                <span className="detail-label">
                                    RESPONSE TIME
                                </span>

                                <p>Usually within 24–48 hours</p>
                            </div>
                        </div>


                        {/* Social */}
                        <div className="contact-detail">
                            <span className="detail-number">03</span>

                            <div className="detail-content">
                                <span className="detail-label">
                                    SOCIAL
                                </span>

                                <div className="social-links">
                                    <a
                                        href="https://github.com/HarshVardhan264"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        GitHub <span>↗</span>
                                    </a>

                                    <a
                                        href="https://www.linkedin.com/in/harsh-vardhan-284130315/"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        LinkedIn <span>↗</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>


                {/* ================= RIGHT SIDE ================= */}
                <div className="contact-right">

                    <div className="contact-options">

                        {/* Book meeting */}
                        <a href="#meeting" className="contact-option">
                            <div className="option-left">
                                <span className="option-icon">▣</span>
                                <span>Book a Meeting</span>
                            </div>

                            <span className="option-arrow">↗</span>
                        </a>


                        {/* LinkedIn */}
                        <a
                            href="https://www.linkedin.com/in/harsh-vardhan-284130315/"
                            target="_blank"
                            rel="noreferrer"
                            className="contact-option"
                        >
                            <div className="option-left">
                                <span className="option-icon linkedin-icon">
                                    in
                                </span>

                                <span>LinkedIn</span>
                            </div>

                            <span className="option-arrow">↗</span>
                        </a>


                        {/* GitHub */}
                        <a
                            href="https://github.com/HarshVardhan264"
                            target="_blank"
                            rel="noreferrer"
                            className="contact-option github-option"
                        >
                            <div className="option-left">
                                <span className="option-icon">
                                    ◇
                                </span>

                                <span>GitHub</span>
                            </div>

                            <span className="option-arrow">↗</span>
                        </a>


                        {/* X */}
                        <a
                            href="https://x.com"
                            target="_blank"
                            rel="noreferrer"
                            className="contact-option"
                        >
                            <div className="option-left">
                                <span className="option-icon x-icon">
                                    𝕏
                                </span>

                                <span>X (Twitter)</span>
                            </div>

                            <span className="option-arrow">↗</span>
                        </a>


                        {/* Email */}
                        <a
                            href="mailto:harshvar2642002@gmail.com?subject=PrepForge%20Inquiry"
                            className="contact-option"
                        >
                            <div className="option-left">
                                <span className="option-icon">✉</span>
                                <span>Email Me</span>
                            </div>

                            <span className="option-arrow">↗</span>
                        </a>

                    </div>


                    {/* ================= LOCATION ================= */}
                    <div className="location-box">

                        <div className="location-icon">
                            ⌖
                        </div>

                        <div>
                            <span className="location-label">
                                BASE OF OPERATIONS
                            </span>

                            <p>India</p>
                        </div>

                    </div>

                </div>

            </section>


            {/* ================= DECORATIVE BOTTOM ================= */}
            <div className="contact-decoration">
                <span>+</span>
            </div>

            <div className="contact-dots contact-dots-bottom">
                {Array.from({ length: 16 }).map((_, index) => (
                    <span key={index}></span>
                ))}
            </div>

            

        </main>
    );
};

export default Contact;