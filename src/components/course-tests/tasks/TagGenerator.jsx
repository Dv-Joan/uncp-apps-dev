import { useState } from "react";

const ListaNumerada = () => {
  const [numeroItems, setNumeroItems] = useState("");
  const [listaRenderizada, setListaRenderizada] = useState(null);

  const generarLista = () => {
    const numItems = parseInt(numeroItems);

    if (isNaN(numItems) || numItems <= 0) {
      alert("Por favor, ingresa un número válido mayor que cero.");
      return;
    }

    const items = [];
    for (let i = 1; i <= numItems; i++) {
      items.push(
        <tr className="bg-slate-800" key={i}>
          <th>Línea {i}</th>
        </tr>
      );
    }

    setListaRenderizada(items);
  };

  return (
    <div className="flex flex-col gap-5 p-5 m-10 border-2 border-yellow-200 border-dashed rounded-lg shadow-xl ">
      <h1 className="mb-5 text-2xl tracking-tight">Generador de Tags</h1>

      <input
        type="text"
        value={numeroItems}
        placeholder="Número de items"
        onChange={(e) => setNumeroItems(e.target.value)}
        className="w-full max-w-xs input input-bordered input-warning"
      />

      <button className="btn btn-accent w-36" onClick={generarLista}>
        Generate
      </button>
      <div className="mt-10 overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th className="text-center">Tags Quantity </th>
            </tr>
          </thead>
          {listaRenderizada}
        </table>
      </div>
    </div>
  );
};

export default ListaNumerada;
