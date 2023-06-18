import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Button, Chip } from '@mui/material';
import Paper from '@mui/material/Paper';
import { products } from '../../data/products.json';
import { Title } from '@mantine/core';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
    offset: 120,
    duration: 500,
    easing: 'ease',

});
type TableProps = {
    products: typeof products,
    handleDelete: (id: number) => void
    handleEdit: (product: typeof products[0]) => void
}

export function ProductsTable({ products, handleDelete, handleEdit }: TableProps) {
    return (
        <TableContainer component={Paper} style={{
            borderRadius: 10, padding: 20
        }} >
            <Table className='' sx={{ minWidth: 650, maxWidth: 800 }} aria-label="simple table">
                <TableHead  >
                    <TableRow className=' backdrop-blur-xl bg-gradient-to-r from-blue-500 from-10%  to-cyan-500 to-90% font-bold ' >
                        <TableCell style={{
                            borderTopLeftRadius: 10, borderBottomLeftRadius: 10,
                        }} align="right">Product</TableCell>
                        <TableCell align="right">Model</TableCell>
                        <TableCell align="right">Description</TableCell>
                        <TableCell align="right">Price</TableCell>
                        <TableCell align="right">Quantity</TableCell>
                        {/* <TableCell align="right">Image</TableCell> */}
                        <TableCell style={{
                            borderTopRightRadius: 10, borderBottomRightRadius: 10,
                        }} align="center">Actions</TableCell>

                    </TableRow>
                </TableHead>
                <TableBody >
                    {products.length > 0 ? products.map((product) => (
                        <TableRow
                            data-aos="fade-up"
                            className='duration-200 ease-in-out cursor-pointer hover:scale-105 hover:shadow-xl'
                            key={product.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            hover={true}

                        >
                            <TableCell align="right" component="th" scope="row">
                                {product.name}
                            </TableCell>
                            <TableCell align="right" component="th" scope="row">
                                {product.model}
                            </TableCell>
                            <TableCell align="center">{product.description}</TableCell>
                            <TableCell width={90} align="right">S/. {product.price}</TableCell>
                            <TableCell align="center">
                                <Chip size='small' color='success' variant='outlined' label={product.quantity} />
                            </TableCell>
                            {/* <TableCell>
                                <img width={200} src={product.image} alt="product-image" />
                            </TableCell> */}
                            <TableCell align="right" >
                                <div className='flex justify-center'>
                                    <Button onClick={
                                        () => handleEdit(product)
                                    } variant='contained' color='primary' size='small'>
                                        Edit
                                    </Button>                                                                               <Button onClick={() => handleDelete(product.id)} size='small' color='error' style={{ marginLeft: 20 }} >
                                        Delete
                                    </Button>
                                </div>
                            </TableCell>


                        </TableRow>
                    )) : <TableRow>
                        <TableCell colSpan={6} align='center' >
                            <div className='flex items-center justify-center gap-7'>

                                <img src="https://img.icons8.com/?size=1x&id=yVhO6IrLt66u&format=png" alt="no-data" />
                                <Title order={3} >

                                    No hay productos registrados
                                </Title>
                            </div>
                        </TableCell>
                    </TableRow>
                    }
                </TableBody>
            </Table>
        </TableContainer >
    );
}