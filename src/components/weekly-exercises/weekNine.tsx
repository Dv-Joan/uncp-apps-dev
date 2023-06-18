import React, { useState, useEffect } from 'react';
import { products as InitialProducts } from '../../data/products.json';
import { Product } from '../../types/product';
import Routing from './../../pages/routing'
import { ProductsForm } from './../ui/form'
import { ProductsTable } from './../ui/table'
import { Title } from '@mantine/core'


function WeekNine() {
    const [products, setProducts] = React.useState(InitialProducts)
    const [currentProduct, setCurrentProduct] = useState<Product | null>(null)
    const handleDelete = (id: number) => {
        const newProducts = products?.filter((product) => product.id !== id);
        setProducts(newProducts);
    };
    const handleAdd = (product: Product) => {
        const newProducts = [...products, product];
        setProducts(newProducts);
    };
    const handleEdit = (product: Product) => {
        setCurrentProduct(product)
    };
    const handleUpdate = (product: Product) => {
        const newProducts = products.map((p) => (p.id === product.id ? product : p));
        setProducts(newProducts);
    };
    useEffect(() => {
        if (currentProduct) {

            handleUpdate(currentProduct);
        } else {
            setCurrentProduct(null);

        }
    }, [currentProduct]);


    return (


        <div className='mx-7'>
            {/* <Routing /> */}
            <Title className='mt-5 mb-16 text-center'>
                Products CRUD
            </Title>
            <div className="flex gap-7">
                <ProductsForm products={products}
                    handleAdd={handleAdd}
                    currentProduct={currentProduct}
                    handleUpdate={handleUpdate}
                    handleCancel={() => setCurrentProduct(null)} />
                <ProductsTable handleDelete={handleDelete} handleEdit={handleEdit} products={products} />
            </div>

        </div >

    )
}

export default WeekNine