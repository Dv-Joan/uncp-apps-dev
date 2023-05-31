import { useState, useEffect } from 'react';
import beepSound from '../../assets/BeepExamen.mp3';

export default function Timer() {
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
            <hr className='bg-green-800 my-4 w-96 h-1 rounded-lg' />
            {
                running ? <span className='text-md  mb-2'>Timer working</span> : <span className='text-md mb-2'>Timer paused</span>
            }
            <div className="flex bg-black rounded-xl text-white px-5 text-3xl py-3 items-center justify-center space-x-2">
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
                        className="px-4 py-2 text-black active:bg-yellow-700 bg-yellow-300 rounded-md focus:outline-none"
                    > {
                            running ? 'Pause' : 'Start'
                        }

                    </button>
                </>

                <button
                    onClick={resetTimer}
                    className="px-4 py-2 text-white active:bg-gray-700 bg-gray-500 rounded-md focus:outline-none"
                >
                    Reset
                </button>

            </div>
        </div>
    );
}

