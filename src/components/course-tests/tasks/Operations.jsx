import { useState } from "react";

const Operations = () => {
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
    <div className=" shadow-xl flex mt-14 flex-col gap-2.5 p-5 border-2 border-dashed rounded-lg border-yellow-200">
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

export default Operations;
