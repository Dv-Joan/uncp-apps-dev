import { useState } from "react";

export default function BackgroundInputs() {
  const [red, setRed] = useState("");
  const [green, setGreen] = useState("");
  const [blue, setBlue] = useState("");

  const cambiarColor = () => {
    const rgbColor = `rgb(${red}, ${green}, ${blue})`;
    document.body.style.backgroundColor = rgbColor;
  };

  return (
    <div className="flex flex-col items-center justify-center gap-5 p-10 border-2 border-yellow-200 border-dashed rounded-lg shadow-xl">
      <h1 className="mb-4 text-2xl font-bold tracking-tight">Bg Changer</h1>
      <div className="flex gap-4">
        <input
          type="number"
          min="1"
          max="255"
          value={red}
          onChange={(e) => setRed(e.target.value)}
          placeholder="R"
          className="w-16 px-2 py-1 border-[1px] rounded bg-red-200 border-red-600 text-red-600"
        />
        <input
          type="number"
          min="1"
          max="255"
          value={green}
          onChange={(e) => setGreen(e.target.value)}
          placeholder="G"
          className="w-16 px-2 py-1 rounded border-[1px]  bg-green-200 border-green-600 text-green-600"
        />
        <input
          type="number"
          min="1"
          max="255"
          value={blue}
          onChange={(e) => setBlue(e.target.value)}
          placeholder="B"
          className="w-16 px-2 py-1 border-[1px]  bg-blue-200 border-blue-600 text-blue-600 rounded "
        />
      </div>
      <button onClick={cambiarColor} className="btn btn-primary btn-outline">
        Cambiar color de fondo
      </button>
    </div>
  );
}
