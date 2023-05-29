import { useState } from 'react';

const Operations = () => {
    const [numero1, setNumero1] = useState('');
    const [numero2, setNumero2] = useState('');
    const [resultadoSuma, setResultadoSuma] = useState('');
    const [resultadoResta, setResultadoResta] = useState('');
    const [resultadoMultiplicacion, setResultadoMultiplicacion] = useState('');
    const [resultadoDivision, setResultadoDivision] = useState('');

    const calcularResultados = () => {
        const num1 = parseFloat(numero1);
        const num2 = parseFloat(numero2);

        if (isNaN(num1) || isNaN(num2)) {
            // Verificar si los valores ingresados son números válidos
            alert('Por favor, ingresa números válidos.');
            return;
        }

        const suma = num1 + num2;
        const resta = num1 - num2;
        const multiplicacion = num1 * num2;
        const division = num2 !== 0 ? num1 / num2 : 'Indefinido';

        setResultadoSuma(suma);
        setResultadoResta(resta);
        setResultadoMultiplicacion(multiplicacion);
        setResultadoDivision(division);
    };

    return (
        <div className=' shadow-xl flex flex-col gap-2.5 p-5 text-slate-700 border-2 border-dashed rounded-lg border-yellow-200'>
            <h1 className='text-xl font-semibold'>Calculadora</h1>




            <input
                className='px-2 py-1 rounded-lg bg-transparent border-[1px] border-slate-700'
                type="text"
                placeholder='Número 1'
                value={numero1}
                onChange={(e) => setNumero1(e.target.value)}
            />


            <input
                className='px-2 py-1 rounded-lg bg-transparent border-[1px] border-slate-700'
                type="text"
                placeholder='Número 2'
                value={numero2}
                onChange={(e) => setNumero2(e.target.value)}
            />

            <button className='px-2 py-1 rounded-lg bg-yellow-100 text-yellow-600 border-[1px] border-yellow-600 hover:bg-yellow-300' onClick={calcularResultados}>Calcular</button>
            <h2 className='my-3'>Resultados:</h2>
            <p>  Suma:<span className='mx-2 text-yellow-600'>{resultadoSuma}</span> </p>
            <p>Resta: <span className='mx-2 text-yellow-600'>{resultadoResta}</span></p>
            <p>Multiplicación: <span className='mx-2 text-yellow-600'>{resultadoMultiplicacion}</span></p>
            <p>División: <span className='mx-2 text-yellow-600'>{resultadoDivision}</span></p>
        </div>
    );
};

export default Operations;
