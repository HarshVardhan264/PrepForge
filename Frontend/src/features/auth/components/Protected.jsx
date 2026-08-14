import {useAuth } from "../hooks/useAuth"
import { Navigate } from "react-router"
import React, { useState } from 'react'

const Protected = ({children}) => {
 
    const {loading, user} = useAuth()

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

    if(!user){
        return <Navigate to={"/login"} />
    }
  return children
}

export default Protected
