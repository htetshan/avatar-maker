// components/MiniAvatarMaker.js
import React, { useState } from "react";
// html2canvas is not directly used for SVG download, but keeping it if you plan other download options
import html2canvas from "html2canvas";

const faceShapes = ["oval"];
const eyeStyles = ["eyeroll", "circle", "happy", "love"];
const mouthStyles = ["smile", "open", "neutral"];
// Added more skin tone options
const colors = [
  "#FFDAB9",
  "#F5CBA7",
  "#FADBD8",
  "#D2B4DE",
  "#C39C7E",
  "#A0785A",
];

export default function MiniAvatarMaker() {
  const [face, setFace] = useState("oval");
  const [eyes, setEyes] = useState("eyeroll");
  const [mouth, setMouth] = useState("smile");
  const [color, setColor] = useState("#FFDAB9");

  const handleDownload = () => {
    const avatar = document.getElementById("avatar-preview");
    if (avatar) {
      // Serialize the SVG element to a string
      const svgData = avatar.outerHTML;
      // Create a Blob from the SVG string
      const blob = new Blob([svgData], { type: "image/svg+xml;charset=utf-8" });
      // Create a link element
      const link = document.createElement("a");
      // Set the href to a URL created from the blob
      link.href = URL.createObjectURL(blob);
      // Set the download attribute with the desired file name
      link.download = "avatar.svg";
      // Programmatically click the link to trigger the download
      link.click();
      // Clean up the URL object after the download starts
      URL.revokeObjectURL(link.href);
    }
  };

  return (
    <div className="p-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-4 text-center">Mini Avatar Maker</h1>

      {/* Avatar Preview */}
      {/* Increased height and adjusted viewBox to fit the body */}
      <svg
        id="avatar-preview"
        xmlns="http://www.w3.org/2000/svg"
        width="160"
        height="220" // Increased height
        viewBox="0 0 160 220" // Adjusted viewBox
        className="mb-6 rounded-lg shadow-lg"
      >
        {/* Smooth Body and Neck - Using a path for a smoother shape */}
        {/* Adjusted the path data to be more rectangular with wider, slightly sloped shoulders */}
        <path
          d="M 25 140 L 35 135 L 70 135 L 90 135 L 125 135 L 135 140 L 135 200 Q 135 210 125 210 L 35 210 Q 25 210 25 200 Z"
          fill={color} // Fill color matches the skin color
          stroke="black"
          strokeWidth="2"
        />

        {/* Face Shape - Oval shape is currently the only option */}
        {face === "oval" && (
          <ellipse
            cx="80"
            cy="80"
            rx="60"
            ry="70"
            fill={color}
            stroke="black"
            strokeWidth="2"
          />
        )}

        {/* Eyes */}
        {eyes === "eyeroll" && (
          <>
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
            {/* Pupils */}
          </>
        )}
        {eyes === "circle" && (
          <>
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

            <circle fill="#000000" fill-opacity="0.7" cx="60" cy="70" r="8" />
            <circle fill="#000000" fill-opacity="0.7" cx="100 " cy="70" r="8" />
          </>
        )}
        {eyes === "happy" && (
          <>
            <path
              fill="#000000"
              fill-opacity="0.7"
              d="M31 70c-1,0 0,2 1,1 2,-2 5,-3 11,-4 7,1 9,2 11,4 2,1 3,-1 2,-1 -1,-1 -5,-7 -13,-7 -7,0 -12,6 -12,7z"
            />
            <path
              fill="#000000"
              fill-opacity="0.7"
              d="M102 70c0,0 1,2 2,1 2,-2 5,-3 11,-4 7,1 9,2 11,4 2,1 3,-1 2,-1 -1,-1 -5,-7 -13,-7 -7,0 -12,6 -13,7z"
            />
          </>
        )}

        {eyes === "love" && (
          <>
            <path
              d="M55 70 Q60 65 65 70"
              stroke="black"
              strokeWidth="2"
              fill="none"
            />
            <path
              d="M95 70 Q100 65 105 70"
              stroke="black"
              strokeWidth="2"
              fill="none"
            />
            <path
              fill="#FC675E"
              d="M50 60c4,0 7,2 9,5 1,-3 5,-5 8,-5 6,0 10,4 10,10 0,2 -1,5 -3,7 -5,5 -10,10 -15,16l-16 -16c-2,-2 -3,-5 -3,-7 0,-6 4,-10 10,-10z"
            />
            <path
              fill="#FC675E"
              d="M100 60c4,0 7,2 9,5 2,-3 5,-5 9,-5 5,0 10,4 10,10 0,2 -2,5 -3,7 -5,5 -11,10 -16,16l-16 -16c-2,-2 -3,-5 -3,-7 0,-6 5,-10 10,-10z"
            />
          </>
        )}

        {/* Mouth */}
        {mouth === "smile" && (
          <path
            d="M60 100 Q80 120 100 100"
            stroke="black"
            strokeWidth="2"
            fill="none"
          />
        )}
        {mouth === "open" && (
          <ellipse cx="80" cy="105" rx="15" ry="10" fill="black" />
        )}
        {mouth === "neutral" && (
          <line
            x1="60"
            y1="100"
            x2="100"
            y2="100"
            stroke="black"
            strokeWidth="2"
          />
        )}
      </svg>

      {/* Controls */}
      <div className="grid grid-cols-2 gap-4 w-full max-w-md">
        <div>
          <label className="block mb-1">Face Shape:</label>
          <select
            value={face}
            onChange={(e) => setFace(e.target.value)}
            className="border p-2 rounded w-full"
          >
            {faceShapes.map((f) => (
              <option key={f} value={f}>
                {f}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block mb-1">Eyes:</label>
          <select
            value={eyes}
            onChange={(e) => setEyes(e.target.value)}
            className="border p-2 rounded w-full"
          >
            {eyeStyles.map((e) => (
              <option key={e}>{e}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block mb-1">Mouth:</label>
          <select
            value={mouth}
            onChange={(e) => setMouth(e.target.value)}
            className="border p-2 rounded w-full"
          >
            {mouthStyles.map((m) => (
              <option key={m}>{m}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block mb-1">Skin Color:</label>
          <select
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className="border p-2 rounded w-full"
          >
            {colors.map((c) => (
              <option key={c} value={c} style={{ backgroundColor: c }}>
                {c}
              </option>
            ))}
          </select>
        </div>
      </div>

      <button
        onClick={handleDownload}
        className="mt-6 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full"
      >
        Download Avatar
      </button>
    </div>
  );
}
