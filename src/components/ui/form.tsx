import React, { useState } from 'react'
import { IconCloudUpload } from '@tabler/icons-react';
import { TextInput, Button, Box, Group, Text, NumberInput, FileButton, Title, Table } from '@mantine/core'
import { products } from '../../data/products';
import { useForm } from '@mantine/form'
export function Form() {
    const [file, setFile] = useState<File | null>(null);

    const ths = (
        <tr style={{ color: 'white' }} >
            <th>Nombre del Producto</th>
            <th>Modelo</th>
            <th>Precio</th>
            <th>Cantidad</th>
        </tr>
    );

    const rows = products.map((element) => (
        <tr key={element.name}>
            <td>{element.name}</td>
            <td>{element.model}</td>
            <td>{element.price}</td>
            <td>{element.quantity}</td>
        </tr>
    ));
    const form = useForm({
        initialValues: {
            nombreProducto: '',
            modelo: '',
            precio: 0.00,
            cantidad: 0,
            imagenSrc: '',

        }, validate: {
            nombreProducto: (value: string) => value ? null : 'El campo es requerido',
            precio: (value: number) => value ? null : 'El campo es requerido',
            cantidad: (value: number) => value ? null : 'El campo es requerido',
            imagenSrc: (value: string) => value ? null : 'El campo es requerido',


        }
    })
    return (
        <div className='flex items-center gap-7 m-7'>
            <Box maw={300} mx="auto" className='border-[1px] border-cyan-500 bg-neutral-100 rounded-lg p-7'>
                <Title className='mb-7' color='black' order={3}>
                    Product Crud
                </Title>
                <form className='space-y-2' onSubmit={form.onSubmit((values) => console.log(values))}>
                    <TextInput
                        withAsterisk
                        label="Nombre Producto"
                        placeholder="Laptp Lenovo 14''"
                        {...form.getInputProps('nombreProducto')}
                    />
                    <TextInput
                        label="Modelo"
                        placeholder="Gaming"
                        {...form.getInputProps('modelo')}
                    />
                    <TextInput
                        withAsterisk
                        label="Precio"
                        placeholder="2500.99"
                        {...form.getInputProps('precio')}
                    />
                    <NumberInput

                        label="Cantidad"
                        placeholder="4"
                        {...form.getInputProps('cantidad')}
                    />
                    <FileButton onChange={setFile} accept="image/png,image/jpeg">
                        {(props) => <Button style={{ marginTop: 20 }} fullWidth leftIcon={<IconCloudUpload
                            size={20}
                            strokeWidth={2}

                        />} {...props} variant='outline' color='cyan'>Cargar Imagen del Producto</Button>}
                    </FileButton>
                    {file && (
                        <Text size="sm" align="center" mt="sm">
                            Imagen elegida: {file.name}
                        </Text>
                    )}
                    <Group className='flex justify-between' style={{ marginTop: 30 }}>
                        <Button type='reset' variant='outline' color='red'>Cancelar</Button>
                        <Button type='submit' className='bg-blue-500'>Enviar</Button>
                    </Group>
                </form>
            </Box>




            <Table striped captionSide="bottom" className='bg-neutral-100' style={{ borderRadius: 7 }}>

                <caption>Los productos de la tienda se muestran en esta tabla</caption>
                <thead className='text-white'>{ths}</thead>
                <tbody>{rows}</tbody>

            </Table>

        </div >
    )
}

