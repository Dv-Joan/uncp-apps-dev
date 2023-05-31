import React from 'react'
import { useState, useEffect } from "react";

const colors = ["blue", "yellow", "red", "green", "gray"];

export const ListaNumerada = () => {
    const [numeroItems, setNumeroItems] = useState("");
    const [listaRenderizada, setListaRenderizada] = useState(null);

    const generarLista = () => {
        const numItems = parseInt(numeroItems);

        if (isNaN(numItems) || numItems <= 0) {
            alert("Por favor, ingresa un número válido mayor que cero.");
            return;
        }

        const items = [];
        for (let i = 1; i <= numItems; i++) {
            items.push(
                <tr className="bg-slate-800" key={i}>
                    <th>Línea {i}</th>
                </tr>
            );
        }

        setListaRenderizada(items);
    };

    return (
        <div className="flex flex-col gap-5 p-5 m-10 border-2 border-yellow-200 border-dashed rounded-lg shadow-xl ">
            <h1 className="mb-5 text-2xl tracking-tight">Generador de Tags</h1>

            <input
                type="text"
                value={numeroItems}
                placeholder="Número de items"
                onChange={(e) => setNumeroItems(e.target.value)}
                className="w-full max-w-xs input input-bordered input-warning"
            />

            <button className="btn btn-accent w-36" onClick={generarLista}>
                Generate
            </button>
            <div className="mt-10 overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th className="text-center">Tags Quantity </th>
                        </tr>
                    </thead>
                    {listaRenderizada}
                </table>
            </div>
        </div>
    );
};


export const Operations = () => {
    const [numero1, setNumero1] = useState("");
    const [numero2, setNumero2] = useState("");
    const [resultadoSuma, setResultadoSuma] = useState("");
    const [resultadoResta, setResultadoResta] = useState("");
    const [resultadoMultiplicacion, setResultadoMultiplicacion] = useState("");
    const [resultadoDivision, setResultadoDivision] = useState("");

    const calcularResultados = () => {
        const num1 = parseFloat(numero1);
        const num2 = parseFloat(numero2);

        if (isNaN(num1) || isNaN(num2)) {
            // Verificar si los valores ingresados son números válidos
            alert("Por favor, ingresa números válidos.");
            return;
        }

        const suma = num1 + num2;
        const resta = num1 - num2;
        const multiplicacion = num1 * num2;
        const division = num2 !== 0 ? num1 / num2 : "Indefinido";

        setResultadoSuma(suma);
        setResultadoResta(resta);
        setResultadoMultiplicacion(multiplicacion);
        setResultadoDivision(division);
    };

    return (
        <div className=" shadow-xl flex mt-96 flex-col gap-2.5 p-5 border-2 border-dashed rounded-lg border-yellow-200">
            <h1 className="mb-5 text-2xl font-semibold ">Calculadora</h1>

            <input
                className="w-full max-w-xs input input-bordered input-warning"
                type="text"
                placeholder="Número 1"
                value={numero1}
                onChange={(e) => setNumero1(e.target.value)}
            />

            <input
                className="w-full max-w-xs input input-bordered input-warning"
                type="text"
                placeholder="Número 2"
                value={numero2}
                onChange={(e) => setNumero2(e.target.value)}
            />

            <button className="w-28 btn btn-accent" onClick={calcularResultados}>
                Calcular
            </button>
            <h2 className="my-3">Resultados:</h2>
            <p>
                {" "}
                Suma:<span className="mx-2 text-yellow-300">{resultadoSuma}</span>{" "}
            </p>
            <p>
                Resta: <span className="mx-2 text-yellow-300">{resultadoResta}</span>
            </p>
            <p>
                Multiplicación:{" "}
                <span className="mx-2 text-yellow-300">{resultadoMultiplicacion}</span>
            </p>
            <p>
                División:{" "}
                <span className="mx-2 text-yellow-300">{resultadoDivision}</span>
            </p>
        </div>
    );
};


// eslint-disable-next-line react/prop-types
const Child = ({ numbers, oddRender }) => {
    const numbersFiltered = oddRender
        ? numbers.filter((number) => number % 2 !== 0)
        : numbers;

    const numbersList = numbersFiltered.map((number) => (
        <li key={number}>{number}</li>
    ));

    return (
        <div className=" shadow-xl  h-[470px]  w-[500px] border-2 border-dashed border-yellow-200 rounded-lg ">
            <div className="flex justify-center pt-12">
                <ul>
                    <li className="grid grid-cols-10 gap-3 gridgrid-flow-row">
                        {numbersList}
                    </li>
                </ul>
            </div>
        </div>
    );
};

export function NumbersArray() {
    const [oddRender, setOddRender] = React.useState(false);
    const numbers = Array.from({ length: 100 }, (_, i) => i + 1); //

    const handleRender = () => {
        setOddRender(!oddRender);
    };

    return (
        <div className="flex flex-col gap-3">
            <div className="">
                <button className="btn btn-success btn-outline" onClick={handleRender}>
                    {oddRender ? "Ver Todos" : "Ver Impares"}
                </button>
            </div>
            <Child numbers={numbers} oddRender={oddRender} />
        </div>
    );
}



export function BackgroundInputs() {
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

export function AlertColorChanger() {
    const [currentColor, setCurrentColor] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentColor((currentColor + 1) % colors.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [currentColor]);

    const divStyle = {
        backgroundColor: colors[currentColor],
    };

    return (
        <div className="flex items-center justify-center p-5 ">
            <div
                className="w-1/3 p-10 text-white border-2 border-yellow-200 border-dashed shadow-lg rounded-xl"
                style={divStyle}
            ></div>
        </div>
    );
}

export default function WeekSeven() {
    return (
        <div className='flex flex-col gap-5'>
            {/* <BackgroundInputs /> */}
            <AlertColorChanger />
            <NumbersArray />
            <Operations />


        </div>
    )
}

