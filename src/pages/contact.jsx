import { TextInput, Checkbox, Button, Group, Box, Textarea, Title } from '@mantine/core';
import { useForm } from '@mantine/form';

export default function Contact() {
    const form = useForm({
        initialValues: {
            email: '',
            termsOfService: false,
        },

        validate: {
            email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
        },
    });

    return (
        <div>
            <Title order={3}>
                <h1 className='text-4xl text-center text-lime-500'>Contacto</h1>
            </Title>
            <Box maw={300} mx="auto" className='p-7 border-2 border-dotted rounded border-lime-400'>
                <form onSubmit={form.onSubmit((values) => console.log(values))}>
                    <TextInput
                        withAsterisk
                        labelProps={{
                            style: {
                                color: 'white'
                            }
                        }}
                        label="Nombre"
                        placeholder="Tu nombre"
                        {...form.getInputProps('name')}
                    />
                    <Textarea

                        labelProps={{
                            style: {
                                color: 'white'
                            }
                        }}
                        labelStyle={{ style: { color: 'white' } }}
                        label="Mensaje"
                        placeholder="Por favor, escribe tu mensaje"
                        {...form.getInputProps('message', { type: 'textarea' })}

                    />

                    <Checkbox
                        mt="lg"
                        color='white'
                        label="Acepto recibir respuestas por correo"
                        {...form.getInputProps('termsOfService', { type: 'checkbox' })}
                    />

                    <Group position="right" mt="md">
                        <Button type="submit" className='bg-lime-500'>Contact</Button>
                    </Group>
                </form>
            </Box>
        </div>
    );
}