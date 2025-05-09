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
          xmlns="http://www.w3.org/2000/svg"
          width="360"
          height="450"
          viewBox="0 0 300 353"
        >
          <g transform="translate(0,353) scale(0.1,-0.1)" fill="#000">
            <path d="M1438 3428c-324-30-605-287-673-614-17-83-21-258-5-234 5 8 10 47 10 87 0 75 27 208 56 284 42 107 138 230 237 305 142 106 284 154 462 155 90 0 127-5 200-26 141-41 216-86 326-195 150-149 211-289 226-516 6-97 23-131 23-46 0 146-43 314-111 429-19 32-75 99-124 149-80 81-103 97-195 142-148 71-275 95-432 80z" />
            <path d="M695 2550c-31-13-66-50-81-86-20-47-19-250 1-297 17-42 67-86 106-94 25-5 28-10 34-63 15-130 97-305 193-412 63-69 215-178 230-163 7 6 11 3-75 59-40 26-100 78-134 114-61 67-129 171-129 197 0 8-4 17-10 20-12 7-46 124-55 185-7 46-28 80-51 80-21 0-76 52-89 85-18 43-19 236-1 278 15 36 46 67 91 90 23 13 26 16 10 16-11 0-29-4-40-9z" />
            <path d="M2315 2548c11-7 29-18 40-24 49-27 60-59 65-187 3-82 1-133-7-157-12-34-67-89-89-90-20 0-42-34-49-75-36-218-163-413-343-530-74-47-92-71-30-39 120 61 244 188 308 314 34 67 80 205 80 240 0 43 12 70 29 70 29 0 92 51 107 85 9 23 14 77 15 165 0 111-2 135-18 163-22 37-77 77-107 77-20 0-20 0-1-12z" />
            <path d="M1352 2138c44-67 186-92 281-50 39 17 67 45 67 66 0 3-82 6-181 6l-181 0 14-22z" />
            <path d="M1662 2135c5-34-108-64-195-51-48 8-93 37-83 55 9 14 275 11 278-4z" />
            <path d="M1190 1351v-67l53-17c196-60 369-60 565 0l52 17v68c0 37-2 68-4 68-2 0-24-11-49-25-25-14-74-31-109-37-34-7-55-14-46-16 15-3 66 8 156 34 20 6 22 3 22-38 0-53-11-60-124-84-146-31-337-21-445 22-30 12-40 22-45 45-8 42 2 62 28 54 92-30 191-44 286-43l105 1-125 7c-141 8-203 20-272 55l-48 24v-68z" />
            <path d="M1190 1220c0-29 3-50 7-47 7 8 6 88-2 95-3 3-5-19-5-48z" />
            <path d="M1847 1253c-11-10-8-73 3-73 6 0 10 18 10 40 0 41-2 45-13 33z" />
            <path d="M975 1163c-328-45-602-241-749-535-68-136-87-222-93-410l-5-157-67-4c-36-2 611-3 1439-3 828 0 1486 1 1463 3l-43 4v79c0 318-85 544-280 740-127 129-282 217-460 262-92 23-310 37-310 19 0-7 27-11 84-11 46 0 108-5 137-10 30-6 70-13 89-16 19-3 48-12 64-20 16-8 34-14 40-14 6 0 47-19 91-41 208-106 358-265 448-474 51-119 66-191 73-362 6-131 5-141-12-145-9-1-630-1-1378 2l-1361 5 3 115c4 142 16 224 47 315 24 74 81 186 123 245 50 69 209 217 278 258 153 91 329 142 490 142 49 0 84 4 84 10 0 10-131 12-195 3z" />
          </g>
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
