import { useState } from "react";

export default function BackgroundInputs() {
  const [red, setRed] = useState("");
  const [green, setGreen] = useState("");
  const [blue, setBlue] = useState("");
  const [backgroundColor, setBackgroundColor] = useState("");

  const cambiarColor = () => {
    const rgbColor = `rgb(${red}, ${green}, ${blue})`;
    setBackgroundColor(rgbColor);
  };

  return (
    <div
      className="flex flex-col items-center justify-center gap-5 p-10 border-2 border-yellow-200 border-dashed rounded-lg shadow-xl"
      style={{ backgroundColor }}
    >
      <h1 className="mb-4 text-2xl font-bold tracking-tight">BG Changer</h1>
      <div className="flex gap-4 text-slate-800">
        <input
          type="number"
          min="1"
          max="255"
          value={red}
          onChange={(e) => setRed(e.target.value)}
          placeholder="R"
          className="max-w-xs bg-red-200 input input-bordered"
        />
        <input
          type="number"
          min="1"
          max="255"
          value={green}
          onChange={(e) => setGreen(e.target.value)}
          placeholder="G"
          className="max-w-xs bg-green-200 input input-bordered"
        />
        <input
          type="number"
          min="1"
          max="255"
          value={blue}
          onChange={(e) => setBlue(e.target.value)}
          placeholder="B"
          className="max-w-xs bg-blue-200 input input-bordered"
        />
      </div>
      <button onClick={cambiarColor} className="btn btn-accent ">
        Change Backgroung
      </button>
    </div>
  );
}
