import { Group, Text, useMantineTheme, rem, Title } from '@mantine/core';
import { IconUpload, IconAugmentedReality, IconX } from '@tabler/icons-react';
import { Dropzone, DropzoneProps, IMAGE_MIME_TYPE } from '@mantine/dropzone';
import React from 'react';

export default function Products(props: Partial<DropzoneProps>) {
    const theme = useMantineTheme();
    return (
        <div>

            <Title>
                <Text size="xl" weight={700} color='indigo'> Productos </Text>
            </Title>
            <Dropzone
                onDrop={(files) => console.log('accepted files', files)}
                onReject={(files) => console.log('rejected files', files)}
                maxSize={3 * 1024 ** 2}
                accept={IMAGE_MIME_TYPE}
                {...props}
                className='bg-slate-700 hover:bg-slate-600'
            >
                <Group position="center" spacing="xl" style={{ minHeight: rem(220), pointerEvents: 'none' }}>
                    <Dropzone.Accept>
                        <IconUpload
                            size="3.2rem"
                            stroke={1.5}
                            color={theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 4 : 6]}
                        />
                    </Dropzone.Accept>
                    <Dropzone.Reject>
                        <IconX
                            size="3.2rem"
                            stroke={1.5}
                            color={theme.colors.red[theme.colorScheme === 'dark' ? 4 : 6]}
                        />
                    </Dropzone.Reject>
                    <Dropzone.Idle>
                        <IconAugmentedReality size="3.2rem" stroke={1.5} />
                    </Dropzone.Idle>

                    <div>
                        <Text size="xl" inline>
                            Selecciona y sube los productos que deseas vender
                        </Text>
                        <Text size="sm" color="dimmed" inline mt={7}>
                            Solo se permiten archivos de imagen (jpg, png, gif) de menos de 5 mb como máximo
                        </Text>
                    </div>
                </Group>
            </Dropzone>
        </div>
    );
}