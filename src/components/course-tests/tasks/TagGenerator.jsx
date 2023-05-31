import { useState } from 'react';

const ListaNumerada = () => {
    const [numeroItems, setNumeroItems] = useState('');
    const [listaRenderizada, setListaRenderizada] = useState(null);

    const generarLista = () => {
        const numItems = parseInt(numeroItems);

        if (isNaN(numItems) || numItems <= 0) {
            alert('Por favor, ingresa un número válido mayor que cero.');
            return;
        }

        const items = [];
        for (let i = 1; i <= numItems; i++) {
            items.push(<li key={i}>Línea {i}</li>);
        }

        setListaRenderizada(<ol>{items}</ol>);
    };

    return (
        <div className='p-5 m-10 border-2 border-yellow-200 border-dashed rounded-lg shadow-xl '>

            <h1 className='mb-5 text-2xl'>Generador de Tags</h1>
            <div>
                <input
                    type="text"
                    value={numeroItems}
                    placeholder='Número de items'
                    onChange={(e) => setNumeroItems(e.target.value)}
                    className='px-2 py-1 rounded-lg bg-transparent border-[1px] border-slate-700'
                />
            </div>
            <button className="mt-4 px-4 py-2 border-[1px] hover:bg-black/20 active:bg-black/70  border-black/70   rounded-lg" onClick={generarLista}>Generar Lista</button>
            <div className='my-3 italic text-slate-700' >

                {listaRenderizada}
            </div>
        </div>
    );
};

export default ListaNumerada;
