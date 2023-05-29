import React from 'react'


// eslint-disable-next-line react/prop-types
const Child = ({ numbers, oddRender }) => {
    const numbersFiltered = oddRender
        ? numbers.filter((number) => number % 2 !== 0)
        : numbers;

    const numbersList = numbersFiltered.map((number) => (
        <li key={number}>{number}</li>
    ));

    return (
        <div className=' shadow-xl w-[500px] h-[470px] border-2 border-dashed border-red-400 rounded-lg p-5 '>
            <div className='flex'>
                <ul className='flex '>
                    <li className='grid grid-flow-row grid-cols-10 items-center justify-center gap-3'>
                        {numbersList}
                    </li></ul>
            </div>
        </div>
    );
};


function NumbersArray() {

    const [oddRender, setOddRender] = React.useState(false);
    const numbers = Array.from({ length: 100 }, (_, i) => i + 1); // 

    const handleRender = () => {
        setOddRender(!oddRender);
    };

    return (
        <div className='flex flex-col gap-3'>

            <div className="">

                <button className='border-[1px] border-cyan-700 bg-cyan-100 py-1 px-3 text-cyan-700 hover:bg-cyan-200 rounded-lg active:bg-cyan-500' onClick={handleRender}>
                    {oddRender ? 'Ver Todos' : 'Ver Impares'}
                </button>
            </div>
            <Child numbers={numbers} oddRender={oddRender} />
        </div>
    );
}



export default NumbersArray;