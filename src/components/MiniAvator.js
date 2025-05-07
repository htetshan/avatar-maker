// components/MiniAvatarMaker.js
import React, { useState } from "react";
import html2canvas from "html2canvas";

const faceShapes = ["round", "square", "oval"];
const eyeStyles = ["dot", "circle", "happy"];
const mouthStyles = ["smile", "open", "neutral"];
const colors = ["#FFDAB9", "#F5CBA7", "#FADBD8", "#D2B4DE"];

export default function MiniAvatarMaker() {
  const [face, setFace] = useState("round");
  const [eyes, setEyes] = useState("dot");
  const [mouth, setMouth] = useState("smile");
  const [color, setColor] = useState("#FFDAB9");

  const handleDownload = () => {
    const avatar = document.getElementById("avatar-preview");
    if (avatar) {
      const svgData = avatar.outerHTML;
      const blob = new Blob([svgData], { type: "image/svg+xml;charset=utf-8" });
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = "avatar.svg";
      link.click();
    }
  };

  return (
    <div className="p-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-4 text-center">Mini Avatar Maker</h1>

      {/* Avatar Preview */}
      <svg
        id="avatar-preview"
        xmlns="http://www.w3.org/2000/svg" // 👈 Required for valid standalone SVG
        width="160"
        height="160"
        viewBox="0 0 160 160"
        className="mb-6 rounded-full shadow-lg"
      >
        {/* Face Shape */}
        {face === "round" && (
          <circle
            cx="80"
            cy="80"
            r="60"
            fill={color}
            stroke="black"
            strokeWidth="2"
          />
        )}
        {face === "square" && (
          <rect
            x="40"
            y="40"
            width="80"
            height="80"
            fill={color}
            stroke="black"
            strokeWidth="2"
          />
        )}
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
        {eyes === "dot" && (
          <>
            <circle cx="60" cy="70" r="5" fill="black" />
            <circle cx="100" cy="70" r="5" fill="black" />
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
          </>
        )}
        {eyes === "happy" && (
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
