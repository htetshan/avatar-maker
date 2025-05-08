// components/MiniAvatarMaker.js
import React, { useState } from "react";
// html2canvas is not directly used for SVG download, but keeping it if you plan other download options
import html2canvas from "html2canvas";

const faceShapes = ["oval"];
const eyeStyles = ["eyeroll", "circle", "happy", "love"];
const mouthStyles = ["smile", "open", "neutral"];
const hairStyles = ["long", "short"];

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
  const [hair, setHair] = useState("long");

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
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          height: "100%",
        }}
      >
        <svg
          id="avatar-preview"
          xmlns="http://www.w3.org/2000/svg"
          width="360"
          height="450 " // Increased height
          viewBox="0 0 250 250" // Adjusted viewBox
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
          {/* Hair Styles */}
          {hair === "long" && (
            <>
              <g transform="scale(0.7) translate(10,70)">
                <path
                  fill="#000000"
                  fill-opacity="0.2"
                  d="M0 60c2,-11 -13,-62 3,-94 17,-35 36,-40 83,-51 34,-3 68,-2 99,16 13,7 21,22 28,35 5,11 8,24 9,36 0,13 -6,24 -6,43 0,2 0,3 0,5l-2 -1c-8,-3 -17,-7 -25,-12 -10,-6 -20,-13 -29,-20 -11,-9 -25,-21 -34,-33 -5,7 -13,13 -20,17 -6,4 -13,7 -19,9 -8,3 -15,6 -23,9 -8,3 -16,6 -24,10 -12,7 -17,7 -40,31zm126 -85l-1 0c0,0 0,0 0,0l1 0z"
                />
                <path
                  class="tinted"
                  fill="#bb7748"
                  d="M0 60c3,-11 -13,-62 3,-94 17,-35 36,-40 83,-51 34,-3 68,-2 99,16 13,7 21,22 28,35 5,11 8,24 9,36 0,13 -6,24 -6,43 -25,-9 -74,-43 -91,-70 -6,17 -31,28 -62,40 -25,8 -46,14 -63,45z"
                />
              </g>
            </>
          )}
          {hair === "short" && (
            <>
              <g transform="scale(0.9) translate(10,2)">
                {" "}
                <path
                  class="tinted"
                  fill="#bb7748"
                  d="M103 10c28,11 48,41 48,75 0,5 -1,10 -1,14l-2 0c-3,-40 -33,-64 -69,-64 -36,0 -66,24 -69,64l-2 0c0,-4 -1,-9 -1,-14 0,-34 20,-64 48,-75 -3,-3 -5,-7 -5,-12 0,-12 13,-22 29,-22 16,0 29,10 29,22 0,5 -2,9 -5,12z"
                />
              </g>
            </>
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
              <circle
                fill="#000000"
                fill-opacity="0.7"
                cx="100 "
                cy="70"
                r="8"
              />
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
            <g transform="scale(0.7) translate(2,2)">
              {" "}
              <path
                fill="#000000"
                d="M115 180l0 0c10,0 17,-8 17,-18l0 0 -34 0 0 0c0,10 7,18 17,18z"
              />
            </g>
          )}
        </svg>
      </div>

      {/* Controls */}
      <div className="grid grid-cols-2 gap-4 w-full max-w-md">
        <div>
          <label className="block mb-1">Hair:</label>
          <select
            value={hair}
            onChange={(e) => setHair(e.target.value)}
            className="border p-2 rounded w-full"
          >
            {hairStyles.map((m) => (
              <option key={m}>{m}</option>
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
