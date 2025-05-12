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
export const MouthNeutral = () => (
  <g transform="scale(0.9) translate(51,50)">
    <path
      fill="#000000"
      d="M60 100l0 0c10,0 17,-8 17,-18l0 0 -34 0 0 0c0,10 7,18 17,18z"
    />
  </g>
);
