import React, { useState } from 'react'
import { IconCloudUpload } from '@tabler/icons-react';
import { useProductsContext } from '../../context/productsContext';
import { INITIAL_FORM_VALUES } from '../../data/initialValues';
import { TextInput, Button, Box, Group, Text, NumberInput, FileButton, Title, Table, Badge } from '@mantine/core'
import { initialProducts } from '../../data/initialProducts';
import { useForm } from '@mantine/form'
import { block } from 'million/react';
export function Form() {
    const { products, addProduct } = useProductsContext();
    const [file, setFile] = useState<File | null>(null);
    const form = useForm({
        initialValues: {
            nombreProducto: '',
            modelo: '',
            precio: 0,
            cantidad: 0,
            imageSrc: '',

        }, validate: {
            nombreProducto: (value: string) => value ? null : 'El campo es requerido',
            precio: (value: number) => value ? null : 'El campo es requerido',
            cantidad: (value: number) => value ? null : 'El campo es requerido',
            imageSrc: (value: string) => value ? null : 'El campo es requerido',


        }
    })
    const LionBlock = block(function Lion() {
        return <img className='mt-8 rounded-full' width={100} src="https://million.dev/lion.svg" />;
    });

    const ths = (
        <tr style={{ color: 'white' }} >
            <th>Nombre del Producto</th>
            <th>Modelo</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Preview </th>

        </tr>
    );



    const rows = initialProducts.map((product) => (
        <tr key={product.name}>
            <td className='font-semibold'>{product.name}</td>
            <td>{product.model}</td>
            <td>
                <Badge color='green' size='lg'>
                    $ {product.price}
                </Badge>
            </td>
            <td>{product.quantity}</td>
            <td><img className='rounded-xl' width={100} src={product.imageSrc} alt="preview" /></td>
        </tr >
    ));


    return (
        <div className='lg:flex-row flex-col flex items-start gap-7 m-7'>
            <Box maw={300} mx="auto" className='border-[1px] border-cyan-500 bg-neutral-100 rounded-lg p-7'>
                <Title className='mb-7' color='black' order={3}>
                    Products CRUD
                </Title>
                <form className='space-y-2' onSubmit={form.onSubmit(addProduct)}>
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
                    <NumberInput
                        withAsterisk
                        label="Precio"
                        placeholder="2500.99"
                        {...form.getInputProps('precio')}
                        hideControls
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
                        <Button type='reset' variant='outline' color='red' onClick={form.reset}>Cancelar</Button>
                        <Button type='submit' className='bg-blue-500'
                        >Enviar</Button>
                    </Group>
                </form>
                {
                    LionBlock({})
                }
            </Box>




            <Table striped captionSide="bottom" className='bg-neutral-100' style={{ borderRadius: 7 }}>

                <caption>Los productos de la tienda se muestran en esta tabla</caption>
                <thead className='text-white'>{ths}</thead>
                <tbody >{rows}</tbody>

            </Table>

        </div >
    )
}

