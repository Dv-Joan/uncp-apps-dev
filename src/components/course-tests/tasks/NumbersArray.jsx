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
