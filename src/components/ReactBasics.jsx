import { useState, useEffect, useRef, useCallback, useMemo } from 'react'

function ReactBasics() {
    const [count, setCount] = useState(0)
    useEffect(() => {


        console.log(`Haz clickeado ${count} veces`);

    })
    const inputRef = useRef(null)
    const handleFocus = () => {
        inputRef.current.focus()
    }
    const handleBlur = () => {
        inputRef.current.blur()
    }
    const handleReset = () => {
        inputRef.current.value = ""
    }
    const handleAlert = useCallback(() => {
        console.log(`Callback say you clicked ${count} times`)
    }, [count])
    const memoHandleAlert = useMemo(() => {
        let a = 20, b = 30, c = 4;
        return console.log(Math.pow(a, b) / c)

    }, []);


    return (
        <div>
            <div className="flex items-center justify-center gap-3">
                <hr className="w-64 h-1 my-8 bg-gray-200 border-0 rounded dark:bg-gray-500" />
                <span className="px-3 mt-1 font-semibold rounded-full bg-cyan-400 text-md">react</span>
                <h1 className="my-10 text-3xl font-bold text-center">  Basics</h1>
                <hr className="w-64 h-1 my-8 bg-gray-200 border-0 rounded dark:bg-gray-500" />
            </div>
            <main >
                <div className="flex items-center justify-center gap-3">
                    <button className="px-5 mt-1 font-semibold rounded-md active:bg-cyan-400/30 bg-cyan-400 text-md" onClick={() => setCount(count + 1)}>+</button>
                    <h1 className="my-10 text-3xl font-bold text-center">{count}</h1>
                    <button className="px-5 mt-1 font-semibold rounded-md  active:bg-cyan-400/40 border-[1px] border-cyan-400 text-md" onClick={() => setCount(count - 1)}>-</button>
                </div>
                <div className="flex flex-col items-center justify-center gap-3 mb-4 lg:flex-row">
                    <input className="px-3 mt-1 font-semibold bg-transparent rounded-md border-[1px]  border-cyan-400  text-md" placeholder='Write something ...' type="text" ref={inputRef} />
                    <button className="px-3 mt-1 font-semibold rounded-md bg-cyan-400 text-md" onClick={handleFocus}>Focus</button>
                    <button className="px-3 mt-1 font-semibold rounded-md bg-cyan-400 text-md" onClick={handleBlur}>Blur</button>
                    <button className="px-3 mt-1 font-semibold border-[1px] rounded-md border-cyan-400 text-md" onClick={handleReset}>Reset</button>
                </div>
                <div className="flex items-center justify-center gap-3">
                    <button className="px-3 mt-1 font-semibold border-[1px] rounded-md border-cyan-400 text-md" onClick={handleAlert}>Callback</button>
                    <button className="px-3 mt-1 font-semibold border-[1px] rounded-md border-cyan-400 text-md" onClick={memoHandleAlert}  >Memo</button>
                </div>


            </main>
        </div>
    )
}

export default ReactBasics