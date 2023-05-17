import React, { useState, useEffect } from "react";
import Products from "../data/products.json";
import { Table } from "@mantine/core";

function Fetch() {
	const [products, setProducts] = useState(Products);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);
	if (Array.isArray(products)) {
		const rows = products.map((product) => (
			<tr key={product.id}>
				<td>{product.nombre}</td>
				<td>{product.descripcion}</td>
				<td>{product.precio}</td>
				<td>
					<img
						src={product.imagen}
						width={20}
						height={20}
						alt="product-image"
					/>
				</td>
			</tr>
		));
	} else {
		console.warn("No se pudo cargar la data");
	}
	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
			setError(false);
		}, 1000);
	}, []);
	return (
		<div className="">
			<h1 className="font-bold text-2xl">Fetch</h1>
			{loading && <p>Loading...</p>}
			{error && <p>Error :(</p>}
			<Table horizontalSpacing="md" verticalSpacing="xl" fontSize="xs">
				<thead>
					<tr>
						<th>Name</th>
						<th>Description</th>
						<th>Price</th>
						<th>Image</th>
					</tr>
				</thead>
				<tbody>
					{Array.isArray(products) ? (
						products.map((product) => (
							<tr key={product.id}>
								<td>{product.nombre}</td>
								<td>{product.descripcion}</td>
								<td>{product.precio}</td>
								<td>
									<img
										src={product.imagen}
										width={20}
										height={20}
										alt="product-image"
									/>
								</td>
							</tr>
						))
					) : (
							<tr>
								<td colSpan="4">No hay productos</td>
						</tr>
					)
						
					}
				</tbody>
			</Table>
		</div>
	);
}

export default Fetch;
