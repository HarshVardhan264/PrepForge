import React from "react";
import "../style/about.scss";

const About = () => {
  return (
    <main className="about-page">

      {/* =====================================================
          NAVBAR
      ===================================================== */}

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
            className="active"
          >
            ABOUT
          </a>

          <a href="/contact">CONTACT</a>
        </nav>

        <a href="/" className="about-nav-button">
          Get Started
          <span>→</span>
        </a>
      </header>


      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="about-hero">

        {/* LEFT */}
        <div className="about-hero-content">

          <div className="about-eyebrow">
            <span>›_</span>
            ABOUT PREPFORGE
          </div>

          <h1>
            Building confidence.
            <br />

            <span>
              Preparing careers.
            </span>

            <br />

            <strong>
              One interview at a time.
            </strong>
          </h1>

          <p className="about-hero-description">
            PrepForge is an AI-powered interview preparation
            platform designed to help you understand your skills,
            practice smarter, and walk into every interview with
            confidence.
          </p>

          <div className="about-hero-actions">

            <a
              href="/"
              className="about-primary-button"
            >
              Start Preparing
              <span>↗</span>
            </a>

           

          </div>

        </div>


        {/* RIGHT — FOX / 3D VISUAL */}
        <div className="about-hero-visual">

          <div className="visual-grid"></div>

          <div className="floating-card card-code">

            <span className="card-dot orange"></span>
            <span className="card-dot yellow"></span>
            <span className="card-dot green"></span>

            <div className="code-content">
              <span>resume</span>
              <b>+</b>
              <span>job description</span>
              <b>→</b>
              <strong>interview plan</strong>
            </div>

          </div>


          <div className="fox-platform">

            <img
              src="/fox3.png"
              alt="PrepForge AI fox"
              className="about-fox"
            />

          </div>


          <div className="floating-card card-score">

            <span className="score-label">
              INTERVIEW READINESS
            </span>

            <strong>
              87%
            </strong>

            <div className="score-bar">
              <span></span>
            </div>

            <small>
              Keep preparing
            </small>

          </div>

        </div>

      </section>


      {/* =====================================================
          STATS
      ===================================================== */}

      <section className="about-stats">

        <div className="stat-item">

          <div className="stat-icon">
            ◉
          </div>

          <div>
            <strong>AI</strong>
            <span>Powered Preparation</span>
          </div>

        </div>


        <div className="stat-item">

          <div className="stat-icon">
            ↗
          </div>

          <div>
            <strong>Personalized</strong>
            <span>Interview Plans</span>
          </div>

        </div>


        <div className="stat-item">

          <div className="stat-icon">
            ◎
          </div>

          <div>
            <strong>Smart</strong>
            <span>Skill Gap Analysis</span>
          </div>

        </div>


        <div className="stat-item">

          <div className="stat-icon">
            ∞
          </div>

          <div>
            <strong>Practice</strong>
            <span>Without Limits</span>
          </div>

        </div>

      </section>


      {/* =====================================================
          LOWER CONTENT
      ===================================================== */}

      <section className="about-lower">

        {/* JOURNEY */}

        <article className="about-card journey-card">

          <div className="card-heading">

            <span className="heading-symbol">
              *
            </span>

            <h2>
              Why PrepForge?
            </h2>

          </div>

          <p>
            Preparing for interviews can feel overwhelming.
            You have a resume, a job description, and dozens
            of topics to study — but knowing where to start
            is often the hardest part.
          </p>

          <p>
            PrepForge brings everything together in one place.
            Our AI analyzes your profile and the role you're
            targeting to help you focus on what actually matters.
          </p>

          <div className="journey-visual">

            <div className="journey-step step-one">
              01
            </div>

            <div className="journey-line"></div>

            <div className="journey-step step-two">
              02
            </div>

            <div className="journey-line"></div>

            <div className="journey-step step-three">
              03
            </div>

            <div className="journey-flag">
              🚩
            </div>

          </div>

        </article>


        {/* WHAT WE DO */}

        <article className="about-card services-card">

          <div className="card-heading">

            <span className="heading-symbol">
              *
            </span>

            <h2>
              What PrepForge Does
            </h2>

          </div>


          <div className="service-grid">

            <div className="service-item">

              <div className="service-icon">
                ✦
              </div>

              <div>
                <h3>
                  AI Analysis
                </h3>

                <p>
                  Understand your strengths,
                  weaknesses, and skill gaps.
                </p>
              </div>

            </div>


            <div className="service-item">

              <div className="service-icon">
                ◎
              </div>

              <div>
                <h3>
                  Personalized Plans
                </h3>

                <p>
                  Get preparation focused on
                  your target role.
                </p>
              </div>

            </div>


            <div className="service-item">

              <div className="service-icon">
                ↗
              </div>

              <div>
                <h3>
                  Interview Practice
                </h3>

                <p>
                  Practice relevant questions
                  before the real interview.
                </p>
              </div>

            </div>


            <div className="service-item">

              <div className="service-icon">
                ◇
              </div>

              <div>
                <h3>
                  Career Growth
                </h3>

                <p>
                  Build confidence and improve
                  your interview performance.
                </p>
              </div>

            </div>

          </div>

        </article>

      </section>


      {/* =====================================================
          MISSION
      ===================================================== */}

      <section className="about-mission">

        <div className="mission-content">

          <span className="mission-label">
            OUR MISSION
          </span>

          <h2>
            Prepare today.
            <br />

            <span>
              Crack tomorrow.
            </span>
          </h2>

          <p>
            We believe interview preparation should be
            personalized, practical, and accessible.
            PrepForge uses AI to turn your preparation
            into a clear path forward.
          </p>

        </div>


        <div className="mission-points">

          <div>
            <span>01</span>

            <h3>
              Understand
            </h3>

            <p>
              Know exactly what the role expects.
            </p>
          </div>


          <div>
            <span>02</span>

            <h3>
              Practice
            </h3>

            <p>
              Focus on the questions that matter.
            </p>
          </div>


          <div>
            <span>03</span>

            <h3>
              Perform
            </h3>

            <p>
              Walk into your interview prepared.
            </p>
          </div>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="about-cta">

        <div>

          <span>
            READY WHEN YOU ARE
          </span>

          <h2>
            Your next interview
            <br />
            starts with preparation.
          </h2>

        </div>

        <a
          href="/"
          className="about-primary-button"
        >
          Build Resume
          <span>→</span>
        </a>

      </section>


      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer className="about-footer">

        <a href="/about" className="footer-brand">

          <span className="about-logo-mark">
            <img src="/fox2.png" alt="PrepForge" />
          </span>

          <span>
            Prep<span>Forge</span>
          </span>

        </a>

        <p>
          © 2026 PrepForge AI. Built for better interviews.
        </p>

        <div className="footer-links">

          <a href="/privacy">
            PRIVACY
          </a>

          <a href="/terms">
            TERMS
          </a>

        </div>

      </footer>

    </main>
  );
};

export default About;
