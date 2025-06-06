// components/MiniAvatarMaker.js
import React, { useState } from "react";
import { Canvg } from "canvg";

// html2canvas is not directly used for SVG download, but keeping it if you plan other download options
import {
  MouthCuting,
  MouthNeutral,
  MouthOpen,
  MouthSmile,
  MouthTongue,
} from "./Mouths";
import { EyeCircle, EyeHappy, EyeLove, EyeRoll } from "./Eyes";
import {
  HairLong,
  HairLongHairBob,
  HairShort,
  HairShortHairFlat,
} from "./Hair";
import { ClothesBlazer, ClothesHoodie, ClothesSweater } from "./Clothes";

const eyeStyles = ["circle", "eyeroll", "happy", "love"];
const mouthStyles = ["smile", "open", "neutral", "cuting", "tongue"];
const hairStyles = ["shorthairflat", "short", "longhairbob", "long"];
const clotheStyles = ["blazer", "hoodie", "sweater"];

// Added more skin tone options
const colors = ["#FFDAB9", "#F5CBA7", "#C39C7E", "#A0785A"];

export default function MiniAvatarMaker() {
  const [eyes, setEyes] = useState("circle");
  const [mouth, setMouth] = useState("smile");
  const [color, setColor] = useState("#FFDAB9");
  const [hair, setHair] = useState("shorthairflat");
  const [clothe, setClothe] = useState("blazer");

  const handleDownload = async () => {
    const avatarSvg = document.getElementById("avatar-preview");

    if (avatarSvg) {
      // Serialize SVG
      const svgData = new XMLSerializer().serializeToString(avatarSvg);

      // Create canvas
      const canvas = document.createElement("canvas");
      canvas.width = 360;
      canvas.height = 400;
      const ctx = canvas.getContext("2d");

      // Use canvg to draw SVG to canvas
      const v = await Canvg.from(ctx, svgData);
      await v.render();

      // Create PNG image from canvas
      const pngUrl = canvas.toDataURL("image/png");

      // Create link and trigger download
      const downloadLink = document.createElement("a");
      downloadLink.href = pngUrl;
      downloadLink.download = "avatar.png";
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    }
  };

  return (
    <div className="p-6 flex flex-col items-center bg-gray-50 min-h-screen">
      {/* Avatar Preview */}

      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          fontSize: 20,
        }}
      >
        <div>Mini Avatar Maker</div>

        <div
          className="flex justify-center items-center bg-white shadow-lg rounded-lg p-6 w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl"
          style={{ height: "auto", maxHeight: "100vh" }}
        >
          <svg
            id="avatar-preview"
            width="360"
            height="300"
            viewBox="0 0 180 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect height="300" fill="rgb(166, 158, 158)" />
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
            {hair === "shorthairflat" && <HairShortHairFlat />}
            {hair === "longhairbob" && <HairLongHairBob />}

            {/* Eyes */}
            {eyes === "eyeroll" && <EyeRoll />}
            {eyes === "circle" && <EyeCircle />}
            {eyes === "happy" && <EyeHappy />}
            {eyes === "love" && <EyeLove />}

            {/* Mouth */}
            {mouth === "smile" && <MouthSmile />}
            {mouth === "open" && <MouthOpen />}
            {mouth === "neutral" && <MouthNeutral />}
            {mouth === "cuting" && <MouthCuting />}
            {mouth === "tongue" && <MouthTongue />}

            {/* Clothes */}
            {clothe === "blazer" && <ClothesBlazer />}
            {clothe === "hoodie" && <ClothesHoodie />}
            {clothe === "sweater" && <ClothesSweater />}
          </svg>
        </div>
      </div>
      {/* Controls */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-4xl mt-10 "
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <div>
          {/* Hair Selection */}
          <div className="flex flex-col items-center bg-white shadow-md rounded-lg p-4">
            <label className="text-lg font-semibold mb-4 text-gray-700">
              Hair
            </label>
            <div className="flex flex-wrap gap-3 justify-center">
              {hairStyles.map((style) => (
                <button
                  key={style}
                  onClick={() => setHair(style)}
                  className={`px-4 py-2 rounded-lg shadow-sm transition-all ${
                    hair === style
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 hover:bg-gray-300"
                  }`}
                >
                  {style}
                </button>
              ))}
            </div>
          </div>

          {/* Eyes Selection */}
          <div className="flex flex-col items-center bg-white shadow-md rounded-lg p-4">
            <label className="text-lg font-semibold mb-4 text-gray-700">
              Eyes
            </label>
            <div className="flex flex-wrap gap-3 justify-center">
              {eyeStyles.map((style) => (
                <button
                  key={style}
                  onClick={() => setEyes(style)}
                  className={`px-4 py-2 rounded-lg shadow-sm transition-all ${
                    eyes === style
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 hover:bg-gray-300"
                  }`}
                >
                  {style}
                </button>
              ))}
            </div>
          </div>

          {/* Mouth Selection */}
          <div className="flex flex-col items-center bg-white shadow-md rounded-lg p-4">
            <label className="text-lg font-semibold mb-4 text-gray-700">
              Mouth
            </label>
            <div className="flex flex-wrap gap-3 justify-center">
              {mouthStyles.map((style) => (
                <button
                  key={style}
                  onClick={() => setMouth(style)}
                  className={`px-4 py-2 rounded-lg shadow-sm transition-all ${
                    mouth === style
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 hover:bg-gray-300"
                  }`}
                >
                  {style}
                </button>
              ))}
            </div>
          </div>

          {/* Clothes Selection */}
          <div className="flex flex-col items-center bg-white shadow-md rounded-lg p-4">
            <label className="text-lg font-semibold mb-4 text-gray-700">
              Clothes
            </label>
            <div className="flex flex-wrap gap-3 justify-center">
              {clotheStyles.map((style) => (
                <button
                  key={style}
                  onClick={() => setClothe(style)}
                  className={`px-4 py-2 rounded-lg shadow-sm transition-all ${
                    clothe === style
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 hover:bg-gray-300"
                  }`}
                >
                  {style}
                </button>
              ))}
            </div>
          </div>

          {/* Skin Color Selection */}
          <div className="flex flex-col items-center bg-white shadow-md rounded-lg p-4">
            <label className="text-lg font-semibold mb-4 text-gray-700">
              Skin Color
            </label>
            <div className="flex flex-wrap gap-3 justify-center">
              {colors.map((skinColor) => (
                <button
                  key={skinColor}
                  onClick={() => setColor(skinColor)}
                  className={`w-10 h-10 rounded-full shadow-md transition-all ${
                    color === skinColor ? "ring-4 ring-blue-500" : ""
                  }`}
                  style={{ backgroundColor: skinColor }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Download Button */}
        <button
          onClick={handleDownload}
          className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-lg transition-all"
        >
          Download Avatar
        </button>
      </div>
    </div>
  );
}
