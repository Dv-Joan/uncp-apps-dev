import React, { useEffect } from 'react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { Product } from '../../types/product';
import { TextField, Button, Input, Checkbox, Alert } from '@mui/material';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import { Title } from '@mantine/core';
import { v4 as uuidv4 } from 'uuid';
import { ErrorMessage } from '@hookform/error-message';

type FormProps = {
    products: Product[],
    handleAdd: (product: Product) => void
    currentProduct?: Product | null,
    handleUpdate?: (product: Product) => void,
    handleCancel?: () => void
}
export function ProductsForm({ handleAdd, currentProduct, handleUpdate, handleCancel }: FormProps) {
    const { handleSubmit, control, reset, setValue, formState: { errors } } = useForm<Product>();
    useEffect(() => {
        if (currentProduct) {
            setValue('name', currentProduct.name);
            setValue('description', currentProduct.description);
            setValue('model', currentProduct.model);
            setValue('price', currentProduct.price);
            setValue('quantity', currentProduct.quantity);
        } else {
            reset();
        }
    }, [currentProduct]);

    const onSubmit = (data: Product) => {
        if (currentProduct) {
            handleUpdate && handleUpdate({ ...data, id: currentProduct.id });
        } else {
            handleAdd({ ...data, id: uuidv4() });
        }
        reset();
    };
    return (
        <form style={{ width: 600 }} className='flex flex-col max-w-sm bg-white rounded-lg p-7 gap-7' onSubmit={handleSubmit(onSubmit)}>
            <Title order={3} color='black' >
                Registrar Producto
            </Title>
            <Controller
                name="name"
                control={control}
                render={({ field: { onChange, value } }) => <TextField label='Name' onChange={onChange} value={value} />}
                rules={{ required: { value: true, message: `Este campo es requerido` } }}
            />
            {
                errors.name && <ErrorMessage render={
                    ({ message }) => <Alert severity="error">{message}</Alert>
                } errors={errors} name='name' />
            }


            <Controller
                name="description"
                control={control}
                defaultValue=""
                render={({ field: { onChange, value } }) => <TextField onChange={onChange} value={value} label="Description"
                />}



            />
            <Controller
                name="model"
                control={control}
                defaultValue=""
                render={({ field: { onChange, value } }) => <TextField label='Model' onChange={onChange} value={value} />}



            />

            <Controller
                name="price"
                control={control}

                render={({ field: { onChange, value } }) => <TextField type='number' label='Price' onChange={onChange} value={value} />}
                rules={{
                    required: { value: true, message: `Este campo  es requerido` },
                    min: { value: 1, message: 'La cantidad debe ser mayor a 0' },
                }}
            />
            {
                errors.price && <ErrorMessage render={
                    ({ message }) => <Alert severity="error">{message}</Alert>
                } errors={errors} name='price' />
            }
            <Controller
                name="quantity"
                control={control}
                render={({ field: { onChange, value } }) => <TextField type='number' label='Quantity' onChange={onChange} value={value} />}
                rules={{
                    required: { value: true, message: 'Este campo es requerido' },
                    min: { value: 1, message: 'La cantidad debe ser mayor a 0' },
                    max: { value: 1000, message: 'La cantidad debe ser menor a 1000' }
                }}

            />
            {
                errors.quantity && <ErrorMessage render={
                    ({ message }) => <Alert severity="error">{message}</Alert>
                } errors={errors} name='quantity' />
            }
            <div className='flex justify-between'>
                <Button type="reset" color='error' onClick={
                    currentProduct ? handleCancel : () => reset()
                } >
                    {
                        currentProduct ? 'Cancelar' : 'Limpiar'
                    }
                </Button>
                <Button type="submit" variant='contained' >
                    {
                        currentProduct ? 'Guardar' : 'Agregar'
                    }
                </Button>
            </div>

        </form >
    )
}

