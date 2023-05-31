import React from "react";

// eslint-disable-next-line react/prop-types
const Child = ({ numbers, oddRender }) => {
  const numbersFiltered = oddRender
    ? numbers.filter((number) => number % 2 !== 0)
    : numbers;

  const numbersList = numbersFiltered.map((number) => (
    <li key={number}>{number}</li>
  ));

  return (
    <div className=" shadow-xl w-[500px] h-[470px] border-2 border-dashed border-yellow-200 rounded-lg p-5 ">
      <div className="flex">
        <ul className="flex ">
          <li className="grid items-center justify-center grid-flow-row grid-cols-10 gap-3">
            {numbersList}
          </li>
        </ul>
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

export default NumbersArray;
