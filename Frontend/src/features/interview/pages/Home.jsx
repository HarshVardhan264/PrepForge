import React, { useState, useRef } from 'react'
import "../style/home.scss"
import { useInterview } from '../hooks/useInterview'
import { useNavigate } from 'react-router-dom'


const Home = () => {

  const { loading, generateReport, reports } = useInterview()
  const [jobDescription, setJobDescription] = useState("")
  const [selfDescription, setSelfDescription] = useState("")
  const resumeInputRef = useRef()

  const navigate = useNavigate()

  const handleGenerateReport = async () => {
    const resumeFile = resumeInputRef.current.files[0]
    const data = await generateReport({ jobDescription, selfDescription, resumeFile })
    navigate(`/interview/${data._id}`)
  }

  if (loading) {
    return (
      <main className='loading-screen'>
        <h1>Loading...</h1>
      </main>
    )
  }



  return (
    <div className='home-page'>
      {/* Navigation Header */}
      <header className='header'>
        <div className='header-content'>
          <div className='logo'>
            <span className='logo-icon'>🚀</span>
            <span className='logo-text'>PrepForge</span>
          </div>
          <nav className='nav-menu'>
            <a href='#features'>Features</a>
            <a href='#pricing'>Pricing</a>
            <a href='#about'>About</a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className='home'>
        {/* Hero Section */}
        <section className='hero-section'>
          <div className='hero-content'>
            <h1 className='hero-title'>Generate Your AI Interview<br />Report</h1>
            <p className='hero-subtitle'>
              Upload your resume and job description to receive interview questions, skill gap insights, and a personalized preparation plan.
            </p>
          </div>
        </section>

        {/* Form Section */}
        <section className='form-section'>
          <div className='interview-container'>
            {/* Left Panel - Job Description */}
            <div className='form-panel left-panel'>
              <div className='panel-header'>
                <span className='icon'>📋</span>
                <h2>Job Description</h2>
              </div>
              <p className='panel-description'>Paste the requirements of the role you are targeting.</p>
              <textarea
                onChange={(e) => setJobDescription(e.target.value)}
                className='input-textarea'
                name='jobDescription'
                id='jobDescription'
                placeholder='Enter job description here...'
              />
            </div>

            {/* Right Panel - Candidate Profile */}
            <div className='form-panel right-panel'>
              <div className='panel-header'>
                <span className='icon'>👤</span>
                <h2>Candidate Profile</h2>
              </div>

              {/* Resume Upload */}
              <div className='input-section'>
                <label className='section-label'>Resume Upload</label>
                <div className='file-upload-area'>
                  <span className='file-icon'>📄</span>
                  <p>Upload Resume (PDF or DOCX)</p>
                  <small>Max size: 5MB • Drag and drop here</small>
                  <input
                    ref={resumeInputRef}
                    hidden
                    type='file'
                    id='resume'
                    accept='.pdf,.doc,.docx'
                  />
                  <label htmlFor='resume' className='file-label'>
                    Click to upload
                  </label>
                </div>
              </div>

              {/* Self Description */}
              <div className='input-section'>
                <label htmlFor='selfDescription' className='section-label'>
                  Self Description
                </label>
                <textarea
                  onChange={(e) => setSelfDescription(e.target.value)}
                  className='input-textarea'
                  name='selfDescription'
                  id='selfDescription'
                  placeholder='Describe your skills, experience, and background...'
                />
              </div>

              {/* Pro Tip Box */}
              <div className='pro-tip-box'>
                <div className='pro-tip-header'>
                  <span className='pro-icon'>💡</span>
                  <span className='pro-label'>Pro Tip</span>
                </div>
                <p className='pro-tip-text'>
                  Detailed self-descriptions help our AI find specific nuances that might be missed in your PDF resume.
                </p>
              </div>

              {/* Generate Button */}
              <button
                onClick={handleGenerateReport}
                className='generate-btn'>
                <span>Generate Interview Report</span>
                <span className='btn-icon'>⚡</span>
              </button>
            </div>
          </div>

          {/* Security Notice */}
          <p className='security-notice'>🔒 Your data is processed securely and privately.</p>
        </section>
      </main>


      {/* Recent Reports List */}
      {reports.length > 0 && (
        <section className='recent-reports'>
          <h2>My Recent Interview Plans</h2>
          <ul className='reports-list'>
            {reports.map(report => (
              <li key={report._id} className='report-item' onClick={() => navigate(`/interview/${report._id}`)}>
                <h3>{report.title || 'Untitled Position'}</h3>
                <p className='report-meta'>Generated on {new Date(report.createdAt).toLocaleDateString()}</p>
                <p className={`match-score ${report.matchScore >= 80 ? 'score--high' : report.matchScore >= 60 ? 'score--mid' : 'score--low'}`}>Match Score: {report.matchScore}%</p>
              </li>
            ))}
          </ul>
        </section>
      )}


      {/* Footer */}
      <footer className='footer'>
        <div className='footer-content'>
          <div className='footer-brand'>
            <span className='logo-icon'>🚀</span>
            <span>PrepForge</span>
          </div>
          <p className='footer-copyright'>© 2024 PrepForge AI. All rights reserved.</p>
          <div className='footer-links'>
            <a href='#privacy'>PRIVACY</a>
            <a href='#terms'>TERMS</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home
