import React from 'react'
import "../style/home.scss"

const Home = () => {
  return (
    <main className='home'>
        <div className="interview-input-group">
            <div className="left">
            <textarea name="jobDescription" id="jobDescription" placeholder='Enter job Description here...'>

            </textarea>
        </div>
        <div className="right">
            <div className="input-group">
                <label className='file-label' htmlFor="resume">Upload Resume</label>
                <input hidden type="file" id="resume" accept=".pdf,.doc,.docx" />
            </div>
            <div className="input-group">
                <label htmlFor="self-description">Enter Self Description</label>
                <textarea name="self-description" id="selfDescription" placeholder='Describe yourself here...'>

                </textarea>
            </div>
            <button className="generate-btn">Generate Interview Report</button>
        </div>
        </div>
      
    </main>
  )
}

export default Home
