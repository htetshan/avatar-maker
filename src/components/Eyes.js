import React from "react";

export const EyeRoll = () => (
  <g transform="scale(0.8) translate(46,40)">
    {/* White part of eyes */}
    <circle fill="#FEFEFE" cx="60" cy="70" r="17" />
    <circle fill="#FEFEFE" cx="100" cy="70" r="17" />
    {/* Iris */}
    <circle
      fill="#4D4D4D"
      stroke="#5F4A37"
      strokeWidth="0.9"
      cx="60"
      cy="59"
      r="8"
    />
    <circle fill="#4D4D4D" cx="100" cy="59" r="8" />
  </g>
);

export const EyeCircle = () => (
  <g transform="scale(0.8) translate(46,40)">
    {/* White part of eyes */}
    <circle
      cx="60"
      cy="70"
      r="10"
      fill="white"
      stroke="black"
      strokeWidth="2"
    />
    <circle
      cx="100"
      cy="70"
      r="10"
      fill="white"
      stroke="black"
      strokeWidth="2"
    />
    {/* Iris */}
    <circle fill="#000000" fillOpacity="0.7" cx="60" cy="70" r="8" />
    <circle fill="#000000" fillOpacity="0.7" cx="100" cy="70" r="8" />
  </g>
);

export const EyeHappy = () => (
  <g transform="scale(0.8) translate(46,40)">
    <path
      fill="#000000"
      fillOpacity="0.7"
      d="M38 70c-1,0 0,2 1,1 2,-2 5,-3 11,-4 7,1 9,2 11,4 2,1 3,-1 2,-1 -1,-1 -5,-7 -13,-7 -7,0 -12,6 -12,7z"
    />
    <path
      fill="#000000"
      fillOpacity="0.7"
      d="M95 70c0,0 1,2 2,1 2,-2 5,-3 11,-4 7,1 9,2 11,4 2,1 3,-1 2,-1 -1,-1 -5,-7 -13,-7 -7,0 -12,6 -13,7z"
    />
  </g>
);

export const EyeLove = () => (
  <g transform="scale(0.8) translate(46,40)">
    {/* Left Eye */}
    <path d="M55 70 Q60 65 65 70" stroke="black" strokeWidth="2" fill="none" />
    <path
      fill="#FC675E"
      d="M49 60c4,0 7,2 9,5 1,-3 5,-5 8,-5 6,0 10,4 10,10 0,2 -1,5 -3,7 -5,5 -10,10 -15,16l-16 -16c-2,-2 -3,-5 -3,-7 0,-6 4,-10 10,-10z"
    />

    {/* Right Eye */}
    <path
      d="M95 70 Q100 65 105 70"
      stroke="black"
      strokeWidth="2"
      fill="none"
    />
    <path
      fill="#FC675E"
      d="M95 60c4,0 7,2 9,5 2,-3 5,-5 9,-5 5,0 10,4 10,10 0,2 -2,5 -3,7 -5,5 -11,10 -16,16l-16 -16c-2,-2 -3,-5 -3,-7 0,-6 5,-10 10,-10z"
    />
  </g>
);
