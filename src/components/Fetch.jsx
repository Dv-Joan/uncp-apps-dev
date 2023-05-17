import { useState, useEffect } from "react";
import Products from "./../data/products.json"
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
		<div className="">
			<h1 className="font-bold text-2xl">Fetch</h1>
			{loading && <p>Loading...</p>}
			{error && <p>Error :(</p>}
			<Table horizontalSpacing="md" className="text-neutral-200" verticalSpacing="md" fontSize="sm">
				<thead>
					<tr>
						<th>Title</th>
						<th>Description</th>
						<th>Price</th>
						<th>Image</th>
					</tr>
				</thead>
				<tbody>
					{
						products.map((product) => (
							<tr key={product.id}>
								<td >{product.title}</td>
								<td className="w-64">{product.description}</td>
								{/* <td className="w-24">$ {product.price}</td> */}
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
