import React,{useState} from 'react'
import "../auth.form.scss"
import { useNavigate , Link } from 'react-router'
import { useAuth } from '../hooks/useAuth'


const Login = () => {

  const navigate =useNavigate()

  const { loading, handleLogin} = useAuth()

  const [email , setEmail] = useState("")
  const [password, setPassword] = useState("")


  const handleSubmit = async (e) => {
        e.preventDefault()
        handleLogin({email,password})
        navigate('/')
    }  

  if(loading){
    return(<main
      className="loading-screen"
      role="status"
      aria-live="polite"
    >
      <svg
        className="loading-screen__svg"
        viewBox="0 0 1000 220"
        preserveAspectRatio="xMidYMid meet"
        aria-hidden="true"
      >
        <defs>
          {/* Scanning gradient */}
          <linearGradient
            id="sweepGradient"
            x1="0"
            y1="0"
            x2="1"
            y2="0"
          >
            <stop
              offset="0%"
              stopColor="#000000"
              stopOpacity="0"
            />

            <stop
              offset="40%"
              stopColor="#ffffff"
              stopOpacity="1"
            />

            <stop
              offset="60%"
              stopColor="#ffffff"
              stopOpacity="1"
            />

            <stop
              offset="100%"
              stopColor="#000000"
              stopOpacity="0"
            />
          </linearGradient>

          {/* Mask */}
          <mask
            id="sweepMask"
            maskUnits="userSpaceOnUse"
          >
            <rect
              x="0"
              y="0"
              width="1000"
              height="220"
              fill="#000000"
            />

            <g className="loading-screen__sweep-rect">
              <rect
                x="-225"
                y="-40"
                width="450"
                height="300"
                fill="url(#sweepGradient)"
              />
            </g>
          </mask>
        </defs>

        {/* Outline */}
        <text
          x="500"
          y="110"
          textAnchor="middle"
          dominantBaseline="middle"
          className="loading-screen__text loading-screen__text--outline"
        >
          LOADING
        </text>

        {/* Animated white fill */}
        <text
          x="500"
          y="110"
          textAnchor="middle"
          dominantBaseline="middle"
          className="loading-screen__text loading-screen__text--fill"
          mask="url(#sweepMask)"
        >
          LOADING
        </text>
      </svg>
    </main>)
  }
  return (
  <main className="auth-page">
    <div className="auth-card">

      {/* Brand */}
      <div className="auth-brand">
            <span className="logo-mark">
              <img src="/fox.png" alt="PrepForge" />
            </span>

            
        <span>PrepForge</span>
      </div>

      {/* Heading */}
      <div className="auth-heading">
        <p className="auth-eyebrow">WELCOME BACK</p>

        <h1>Ready to prepare?</h1>

        <p>
          Sign in to continue your interview preparation.
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="auth-form">

        <div className="input-group">
          <label htmlFor="email">
            Email address
          </label>

          <div className="input-wrapper">
            <span className="input-symbol">@</span>

            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
              name="email"
              placeholder="you@example.com"
              required
            />
          </div>
        </div>


        <div className="input-group">
          <label htmlFor="password">
            Password
          </label>

          <div className="input-wrapper">
            <span className="input-symbol">••</span>

            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              required
            />
          </div>
        </div>


        <button
          type="submit"
          className="auth-button"
        >
          <span>Sign in</span>
          <span className="auth-button-arrow">→</span>
        </button>

      </form>

      {/* Register */}
      <div className="auth-footer">
        <span>Don't have an account?</span>

        <Link to="/register">
          Create one
        </Link>
      </div>

    </div>
  </main>
);
}

export default Login
