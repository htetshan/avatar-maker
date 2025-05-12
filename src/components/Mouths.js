import React from "react";

export const MouthSmile = () => (
  <g transform="scale(0.9) translate(30,30)">
    <path
      d="M60 100 Q80 120 100 100"
      stroke="black"
      strokeWidth="2"
      fill="none"
    />
  </g>
);
//helet

export const MouthOpen = () => (
  <g transform="scale(0.9) translate(30,30)">
    <ellipse cx="80" cy="105" rx="15" ry="10" fill="black" />
  </g>
);
//hefe
export const MouthCuting = () => (
  <g transform="scale(0.55) translate(2,20)">
    <circle fill="#E08C65" fill-opacity="0.6" cx="134" cy="199" r="11" />
    <circle fill="#E08C65" fill-opacity="0.6" cx="226" cy="199" r="11" />
    <path
      fill="#000000"
      d="M167 201c9,3 18,3 26,0 0,-6 5,-12 12,-13 -5,3 -8,7 -8,12 0,8 7,14 14,14 1,0 1,0 1,0 -2,1 -3,1 -5,1 -7,0 -12,-4 -14,-9 -9,3 -18,3 -27,0 -2,5 -7,8 -13,8 -2,0 -3,0 -5,-1 0,0 0,0 1,0 7,0 14,-6 14,-14 0,-5 -3,-10 -8,-12 7,1 12,7 12,14 0,0 0,0 0,0z"
    />
  </g>
);
export const MouthTongue = () => (
  <g transform="scale(0.55) translate(2,20)">
    <path
      fill="#000000"
      d="M180 220l0 0c17,0 31,-10 31,-23l0 -1 -62 0 0 1c0,13 14,23 31,23z"
    />
    <path
      fill="#FEFEFE"
      d="M199 196l-38 0 0 2c0,3 2,5 4,5l30 0c2,0 4,-2 4,-5l0 -2z"
    />
    <path
      fill="#FF4F6D"
      d="M194 220l0 0c0,8 -6,15 -14,15l0 0c-8,0 -14,-7 -14,-15l0 0 0 -7c0,-4 4,-8 8,-8 3,0 5,1 6,2 1,-1 3,-2 6,-2 4,0 8,4 8,8l0 7z"
    />
  </g>
);

export const MouthNeutral = () => (
  <g transform="scale(0.9) translate(51,50)">
    <path
      fill="#000000"
      d="M60 100l0 0c10,0 17,-8 17,-18l0 0 -34 0 0 0c0,10 7,18 17,18z"
    />
  </g>
);
