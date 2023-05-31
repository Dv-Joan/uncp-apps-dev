import React from 'react'
import { useState, useEffect } from 'react';
import beepSound from '../../assets/BeepExamen.mp3';

export function Timer() {
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [running, setRunning] = useState(false);

    useEffect(() => {
        let intervalId;

        if (running) {
            intervalId = setInterval(updateTimer, 1000);
        } else {
            clearInterval(intervalId);
        }

        return () => clearInterval(intervalId);
    }, [running]);

    const updateTimer = () => {
        if (hours === 0 && minutes === 0 && seconds === 0) {
            setRunning(false);
            playSound();
        } else {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            } else {
                if (minutes > 0) {
                    setMinutes(minutes - 1);
                    setSeconds(59);
                } else {
                    if (hours > 0) {
                        setHours(hours - 1);
                        setMinutes(59);
                        setSeconds(59);
                    }
                }
            }
        }
    };

    const handleTimer = () => {
        if (running) {
            setRunning(false);
        } else {
            setRunning(true);
        }
    };



    const resetTimer = () => {
        setRunning(false);
        setHours(0);
        setMinutes(0);
        setSeconds(0);
        stopSound();
    };

    const playSound = () => {
        const audio = new Audio(beepSound);
        audio.loop = true;
        audio.play();
    };

    const stopSound = () => {
        const audio = new Audio(beepSound);
        audio.pause();
        audio.currentTime = 0;
    };

    const formatTime = (time) => {
        return time.toString().padStart(2, '0');
    };

    return (
        <div className="flex shadow-xl flex-col items-center border-2 border-black border-dashed rounded-lg w-[500px] py-5 ">
            <span className='text-xl'>Timer</span>
            <hr className='h-1 my-4 bg-green-800 rounded-lg w-96' />
            {
                running ? <span className='mb-2 text-md'>Timer working</span> : <span className='mb-2 text-md'>Timer paused</span>
            }
            <div className="flex items-center justify-center px-5 py-3 space-x-2 text-3xl text-white bg-black rounded-xl">
                <label className="text-4xl">{formatTime(hours)}</label>  :
                <label className="text-4xl">{formatTime(minutes)}</label>  :
                <label className="text-4xl">{formatTime(seconds)}</label>
            </div>
            <div className="flex items-center justify-center mt-4 space-x-2">

                <>
                    <input
                        type="number"
                        min="0"
                        value={hours}
                        onChange={(e) => setHours(parseInt(e.target.value))}
                        className="w-20 px-2 py-1 border border-gray-300 rounded-md focus:outline-none"
                    />
                    <input
                        type="number"
                        min="0"
                        max="59"
                        value={minutes}
                        onChange={(e) => setMinutes(parseInt(e.target.value))}
                        className="w-20 px-2 py-1 border border-gray-300 rounded-md focus:outline-none"
                    />
                    <input
                        type="number"
                        placeholder='seconds'
                        min="0"
                        max="59"
                        value={seconds}
                        onChange={(e) => setSeconds(parseInt(e.target.value))}
                        className="w-20 px-2 py-1 border border-gray-300 rounded-md focus:outline-none"
                    />
                    <button
                        onClick={handleTimer}
                        className="px-4 py-2 text-black bg-yellow-300 rounded-md active:bg-yellow-700 focus:outline-none"
                    > {
                            running ? 'Pause' : 'Start'
                        }

                    </button>
                </>

                <button
                    onClick={resetTimer}
                    className="px-4 py-2 text-white bg-gray-500 rounded-md active:bg-gray-700 focus:outline-none"
                >
                    Reset
                </button>

            </div>
        </div>
    );
}


export const Data = () => {
    const calificativos = [18, 3, 9, 15, 2, 7, 10, 19, 5, 12]
    const nombres = ['Ana', 'Juan', 'María', 'Carlos', 'Luis', 'Laura', 'Pedro', 'Sofía', 'Diego', 'Valeria']

    return (
        <div className='flex flex-col items-center justify-center p-5 mt-10 border-2 border-yellow-200 border-dashed rounded-lg shadow-xl'>

            <div className='flex flex-col items-center justify-center my-10'>
                <div className='grid grid-cols-2 gap-2'>
                    {nombres.map((nombre, index) => (
                        <div key={index} className='grid items-center justify-center grid-flow-row grid-cols-3'>
                            <h2 className='text-xl font-bold'>{nombre}</h2>
                            {
                                calificativos[index] >= 10 ?
                                    <p className='text-xl font-bold text-blue-500'>{calificativos[index]} </p>
                                    :
                                    <p className='text-xl font-bold text-red-500'>{calificativos[index]} </p>

                            }

                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}

export function StudentsGrades() {
    /* const [student, setStudent] = useState(calificativos)

    const handleAnalysis = () => {
        const newStudent = [...student]
        newStudent.sort((a, b) => a - b)
        setStudent(newStudent)

    } */

    return (

        <form >
            <h1 className='mb-10 text-2xl font-bold'>Students & Grades</h1>
            <div className="grid gap-3 mb-5 md:grid-cols-1">
                <div>

                    <input type="text" id="first_name" className="input input-primary bg-primary/10" placeholder="Name" required />
                </div>
                <div>

                    <input type="text" id="first_name" className="input input-primary bg-primary/10" placeholder="Grade" required />
                </div>

            </div>


            <button type="submit" className='btn btn-neutral-focus'>Analyze</button>
            <Data />

        </form >

    )
}


export const RGBArray = () => {
    const combinations = [];

    for (let r = 0; r <= 256; r += 16) {
        for (let g = 0; g <= 256; g += 16) {
            for (let b = 0; b <= 256; b += 16) {
                const sum = r + g + b;

                let textColor;
                if (sum < 256) {
                    textColor = 'text-white';
                } else if (sum >= 256 && sum <= 512) {
                    textColor = 'text-blue-500';
                } else {
                    textColor = 'text-black';
                }

                combinations.push({
                    background: `rgb(${r}, ${g}, ${b})`,
                    textColor,
                });
            }
        }
    }

    return (
        <div className="grid grid-cols-4 gap-4 p-20 bg-gray-500">
            {combinations.map((combination, index) => (
                <div
                    key={index}
                    className={`w-24 h-24 ${combination.background} ${combination.textColor} border border-gray-300 flex items-center justify-center`}
                >
                    <span className={`text-black `}>
                        RGB({combination.background})
                    </span>
                </div>
            ))}
        </div>
    );
};



export function BackgroundInputs() {
    const [red, setRed] = useState("");
    const [green, setGreen] = useState("");
    const [blue, setBlue] = useState("");

    const cambiarColor = () => {
        const rgbColor = `rgb(${red}, ${green}, ${blue})`;
        document.body.style.backgroundColor = rgbColor;
    };

    return (
        <div className="flex flex-col my-5 items-center w-[400px]  justify-center h-96 shadow-xl border-2 border-dashed rounded-lg border-yellow-200">
            <h1 className="mb-4 text-2xl font-bold">RGB Generator</h1>
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
                className="mt-4 px-4 py-2 border-[1px]  hover:bg-black/20 active:bg-black/70  border-black text-black  rounded-lg"
            >
                Generar
            </button>
        </div>
    );
}

function WeekEight() {
    return (
        <div className='flex flex-col gap-5'>
            <BackgroundInputs />
            {/* <RGBArray /> */}
            <StudentsGrades />

        </div>
    )
}

export default WeekEight