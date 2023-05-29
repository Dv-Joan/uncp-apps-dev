import { useState } from 'react';


export default function BackgroundInputs() {
    const [red, setRed] = useState('');
    const [green, setGreen] = useState('');
    const [blue, setBlue] = useState('');

    const cambiarColor = () => {
        const rgbColor = `rgb(${red}, ${green}, ${blue})`;
        document.body.style.backgroundColor = rgbColor;
    };

    return (
        <div className="flex flex-col items-center justify-center h-96 bg-neutral-100/50 drop-shadow-xl border-2 border-dashed rounded-lg border-yellow-200">
            <h1 className="text-3xl font-bold mb-4">Color App</h1>
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
            <button
                onClick={cambiarColor}
                className="mt-4 px-4 py-2 border-[1px]  border-black text-black  rounded-lg"
            >
                Cambiar color de fondo
            </button>
        </div>
    );
}

