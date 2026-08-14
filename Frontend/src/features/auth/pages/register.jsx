import React , {useState} from 'react'
import { useNavigate , Link } from 'react-router'
import { useAuth } from '../hooks/useAuth'


const Register = () => {

  const navigate = useNavigate()
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")


  const {loading, handleRegister} = useAuth()



  const handleSubmit = async (e) => {
        e.preventDefault()
        await handleRegister({username,email,password})
        navigate("/")
  }  

  if(loading){
    return (<main
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
    <main>
      <div className="form-container">
        <h1>Register</h1>

        <form action="" onSubmit={handleSubmit}>
            <div className="input-group">
                <label htmlFor="username">Username</label>
                <input 
                onChange={(e)=> {setUsername(e.target.value)}}
                type="text" id="username" name="username" placeholder="Enter Username" />

            </div>
            <div className="input-group">
                <label htmlFor="email">Email</label>
                <input
                onChange={(e)=> {setEmail(e.target.value)}}
                type="email" id="email" name="email" placeholder="Enter email address" />

            </div>
            <div className="input-group">
                <label htmlFor="password">Password</label>
                <input 
                onChange={(e)=> {setPassword(e.target.value)}}
                type="password" id='password' name="password" placeholder="Enter password" />
            </div>
            <button className='button primary-button'>Register</button>
        </form>

        <p>Already have an account? <Link to={"/login"}>Login</Link></p>
      </div>
    </main>
  )
}

export default Register
