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
		<div className="flex flex-col justify-center items-center">
			<div className="flex justify-center items-center gap-3">
				<hr className="w-64 h-1 my-8 bg-gray-200 border-0 rounded dark:bg-gray-500" />
				<span className="bg-yellow-400 px-3 mt-1 font-semibold text-md rounded-full">data</span>
				<h1 className="font-bold  text-3xl text-center my-10">  Fetch</h1><hr className="w-64 h-1 my-8 bg-gray-200 border-0 rounded dark:bg-gray-500" />
			</div>
			{loading && <p>Loading...</p>}
			{error && <p>Error :(</p>}
			<Table horizontalSpacing="md" className="text-neutral-300 w-1/2 border-2 border-neutral-300" verticalSpacing="md" fontSize="sm">
				<thead className="bg-yellow-400 opacity-80">
					<tr>
						<th style={{ color: "white" }} >Title</th>
						<th style={{ color: "white" }}>Price</th>
						<th style={{ color: "white" }}>Image</th>
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
