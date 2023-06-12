import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { TextField, Button } from '@mui/material';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import { Title } from '@mantine/core';


export function ProductsForm() {
    const { handleSubmit, control, reset } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };


    return (
        <form style={{ width: 600 }} className='bg-neutral-100 p-7 rounded-lg flex flex-col gap-7 max-w-sm' onSubmit={handleSubmit(onSubmit)}>
            <Title order={3} color='black' >
                Registrar Producto
            </Title>
            <Controller
                name="productName"
                control={control}

                defaultValue=""
                render={({ field }) => <TextField {...field} label="Product Name" />}
            />
            <Controller

                name="productDescription"
                control={control}
                defaultValue=""

                render={({ field }) => <TextareaAutosize placeholder='Description' className='bg-transparent py-3 text-black border-1 border-slate-500 rounded p-2'
                    {...field}

                />}
            />
            <Controller
                name="productModel"
                control={control}

                defaultValue=""
                render={({ field }) => <TextField {...field} label="Model" />}
            />
            <Controller
                name="productPrice"
                control={control}

                defaultValue=""
                render={({ field }) => <TextField type='number'  {...field} label="Price" />}
            />
            <Controller
                name="productQuantity"
                control={control}

                defaultValue=""
                render={({ field }) => <TextField type='number' {...field} label="Quantity" />}
            />
            <div className='flex justify-between'>

                <Button type="submit" variant='outlined' onClick={reset} color='secondary' >Cancelar</Button>
                <Button type="submit" variant='contained' >Registrar</Button>
            </div>

        </form >
    )
}

