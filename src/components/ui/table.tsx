import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Button } from '@mui/material';
import Paper from '@mui/material/Paper';

function createData(
    name: string,
    calories: number,
    fat: number,
    carbs: number,
    protein: number,
    actions: string[],
) {
    return { name, calories, fat, carbs, protein, actions };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0, ['edit', 'delete']),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3, ['edit', 'delete']),
    createData('Eclair', 262, 16.0, 24, 6.0, ['edit', 'delete']),
    createData('Cupcake', 305, 3.7, 67, 4.3, ['edit', 'delete']),
    createData('Gingerbread', 356, 16.0, 49, 3.9, ['edit', 'delete']),
];

export function ProductsTable() {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650, maxWidth: 800 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Product</TableCell>
                        <TableCell align="right">Description</TableCell>
                        <TableCell align="right">Model</TableCell>
                        <TableCell align="right">Price</TableCell>
                        <TableCell align="right">Quantity</TableCell>
                        <TableCell align="right">Actions</TableCell>

                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="right">{row.calories}</TableCell>
                            <TableCell align="right">{row.fat}</TableCell>
                            <TableCell align="right">{row.carbs}</TableCell>
                            <TableCell align="right">{row.protein}</TableCell>
                            <TableCell align="right">{
                                row.actions.map((action) => (
                                    action.includes('edit') ?
                                        <Button variant='contained' color='primary' size='small'>
                                            Edit
                                        </Button>
                                        :
                                        <Button variant='outlined' size='small' color='error' style={{ marginLeft: 20 }} >
                                            Delete
                                        </Button>



                                ))

                            }</TableCell>

                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}