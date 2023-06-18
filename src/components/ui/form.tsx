import React from 'react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { Product } from '../../types/product';
import { TextField, Button } from '@mui/material';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import { Title } from '@mantine/core';

type FormProps = {
    products: Product[],
    handleAdd: (product: Product) => void
}
export function ProductsForm({ products, handleAdd }: FormProps) {
    const { handleSubmit, control, reset } = useForm<Product>();
    const onSubmit: SubmitHandler<Product> = (data) => {
        handleAdd({ ...data, id: products.length + 1 });
        reset();
    }
    return (
        <form style={{ width: 600 }} className='flex flex-col max-w-sm bg-white rounded-lg p-7 gap-7' onSubmit={handleSubmit(onSubmit)}>
            <Title order={3} color='black' >
                Registrar Producto
            </Title>
            <Controller
                name="name"
                control={control}
                render={({ field }) => <TextField {...field} label="Product Name" />}
            />
            <Controller

                name="description"
                control={control}
                defaultValue=""

                render={({ field }) => <TextareaAutosize placeholder='Description' className='p-2 py-3 text-black bg-transparent rounded border-1 border-slate-500'
                    {...field}

                />}
            />
            <Controller
                name="model"
                control={control}
                defaultValue=""
                render={({ field }) => <TextField {...field} label="Model" />}
            />
            <Controller
                name="price"
                control={control}
                render={({ field }) => <TextField type='number'  {...field} label="Price" />}
            />
            <Controller
                name="quantity"
                control={control}
                render={({ field }) => <TextField type='number' {...field} label="Quantity" />}
            />
            <div className='flex justify-between'>
                <Button type="reset" onClick={() => reset()} >Limpiar</Button>
                <Button type="submit" variant='contained' >Registrar</Button>
            </div>

        </form >
    )
}

