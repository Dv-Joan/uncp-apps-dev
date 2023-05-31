import React, { useState, useEffect, useRef, useCallback, useMemo } from "react";

export default function WeekFive() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log(`Haz clickeado ${count} veces`);
    });
    const inputRef = useRef(null);
    const handleFocus = () => {
        inputRef.current.focus();
    };
    const handleBlur = () => {
        inputRef.current.blur();
    };
    const handleReset = () => {
        inputRef.current.value = "";
    };
    const handleAlert = useCallback(() => {
        console.log(`Callback say you clicked ${count} times`);
    }, [count]);
    const memoHandleAlert = useMemo(() => {
        let a = 20,
            b = 30,
            c = 4;
        return console.log(Math.pow(a, b) / c);
    }, []);

    return (
        <main className="flex flex-col gap-5 border-2 border-dashed border-cyan-500">
            <div className="flex items-center justify-between gap-7">

                <h4 className="flex gap-2 text-neutral-content"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
                </svg>React Basic Usage
                </h4>
                <a href='https://react.dev/' target='_blank' className="my-10 btn btn-primary"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                </svg>

                    <span className='pl-3'>React JS Theory</span></a>
            </div>
            <div className="flex items-center gap-5">
                <button
                    className="btn btn-outline btn-neutral-focus"
                    onClick={() => setCount(count + 1)}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
                    </svg>
                </button>
                <h1 className="my-10 text-3xl font-bold text-center">{count}</h1>
                <button
                    className="w-16 btn btn-neutral-focus"
                    onClick={() => setCount(count - 1)}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 6v12m6-6H6"
                        />
                    </svg>
                </button>
            </div>
            <div className="flex flex-col items-center justify-center gap-3 mb-4 lg:flex-row">
                <input
                    className="w-full max-w-xs input input-bordered input-accent"
                    placeholder="Write something ..."
                    type="text"
                    ref={inputRef}
                />
                <button className="btn btn-secondary btn-circle" onClick={handleFocus}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                        />
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                    </svg>
                </button>
                <button className="btn btn-secondary btn-circle" onClick={handleBlur}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                        />
                    </svg>
                </button>
                <button className="btn btn-secondary btn-outline" onClick={handleReset}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 9.75L14.25 12m0 0l2.25 2.25M14.25 12l2.25-2.25M14.25 12L12 14.25m-2.58 4.92l-6.375-6.375a1.125 1.125 0 010-1.59L9.42 4.83c.211-.211.498-.33.796-.33H19.5a2.25 2.25 0 012.25 2.25v10.5a2.25 2.25 0 01-2.25 2.25h-9.284c-.298 0-.585-.119-.796-.33z"
                        />
                    </svg>
                </button>
            </div>
            <div className="flex items-center justify-center gap-3">
                <button className="btn btn-primary" onClick={handleAlert}>
                    Callback
                </button>
                <button className="btn btn-primary " onClick={memoHandleAlert}>
                    Memo
                </button>
            </div>


        </main>
    );
}

