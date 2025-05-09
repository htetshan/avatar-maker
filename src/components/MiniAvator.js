// components/MiniAvatarMaker.js
import React, { useState } from "react";
// html2canvas is not directly used for SVG download, but keeping it if you plan other download options
import html2canvas from "html2canvas";
import { MouthNeutral, MouthOpen, MouthSmile } from "./Mouths";
import { EyeCircle, EyeHappy, EyeLove, EyeRoll } from "./Eyes";
import { HairLong, HairShort } from "./Hair";

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
          width="360"
          height="450"
          viewBox="0 0 180 200" // You can keep this if the coordinate system remains the same
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="200" height="300" fill="white" />
          <path d="M50 180 Q100 130 150 180 V250 H50 Z" fill={color} />
          <path d="M85 170 H115 A15 10 0 0 1 85 170" fill={color} />
          <rect x="85" y="150" width="30" height="20" fill={color} />
          <path
            d="M60 100 Q60 50 100 40 Q140 50 140 100 Q140 140 100 150 Q60 140 60 100 Z"
            fill={color}
          />
          <rect x="50" y="90" width="15" height="30" rx="7.5" fill={color} />
          <rect x="135" y="90" width="15" height="30" rx="7.5" fill={color} />
          <path d="M90 110 Q100 115 110 110 Q100 120 90 110" fill={color} />

          {/* Hair Styles */}
          {hair === "long" && <HairLong />}
          {hair === "short" && <HairShort />}

          {/* Eyes */}
          {eyes === "eyeroll" && <EyeRoll />}
          {eyes === "circle" && <EyeCircle />}
          {eyes === "happy" && <EyeHappy />}
          {eyes === "love" && <EyeLove />}

          {/* Mouth */}
          {mouth === "smile" && <MouthSmile />}
          {mouth === "open" && <MouthOpen />}
          {mouth === "neutral" && <MouthNeutral />}
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
