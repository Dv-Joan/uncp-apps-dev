import { useState, useEffect } from "react";
import products from "./../data/products.json"
import { Table } from "@mantine/core";

function Fetch() {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);
	const url = "https://fakestoreapi.com/products";

	const handleFetch = async () => {
		try {
			const response = await fetch(url);
			const data = await response.json();
			setProducts(data);
			console.log(data);
		} catch (error) {
			setError(true);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
			setError(false);
		}, 1000);
		handleFetch();
	}, []);
	return (
		<div className="flex flex-col items-center justify-center">
			<div className="flex items-center justify-center gap-3">
				<hr className="w-64 h-1 my-8 bg-gray-200 border-0 rounded dark:bg-gray-500" />
				<span className="px-3 mt-1 font-semibold bg-yellow-400 rounded-full text-md">data</span>
				<h1 className="my-10 text-3xl font-bold text-center">  Fetch</h1><hr className="w-64 h-1 my-8 bg-gray-200 border-0 rounded dark:bg-gray-500" />
			</div>
			{loading && <p>Loading...</p>}
			{error && <p>Error :(</p>}
			<Table horizontalSpacing="md" className="w-1/2 bg-white border-2 font-noto-sans text-zinc-800 border-neutral-300" verticalSpacing="md" fontSize="sm">
				<thead className="bg-yellow-400  drop-shadow-md">
					<tr>
						<th >Title</th>
						<th >Price</th>
						<th >Preview</th>
					</tr>
				</thead>
				<tbody>
					{
						products.map((product) => (
							<tr key={product.id}>
								<td className="w-64" >{product.title}</td>
								<td >$ {product.price}</td>
								<td>
									<img src={product.image} width={50} height={50} alt={product.title} />
								</td>
							</tr>
						))

					}
				</tbody>
			</Table>
		</div>
	);
}

export default Fetch;
