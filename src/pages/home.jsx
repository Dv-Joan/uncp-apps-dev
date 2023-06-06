import { useState } from 'react';
import Imagen from '../assets/images/create-next-app.png'
import { Stepper, Button, Group, Image } from '@mantine/core';

export default function Home() {
    const [active, setActive] = useState(1);
    const nextStep = () => setActive((current) => (current < 3 ? current + 1 : current));
    const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

    return (
        <div className=' p-7 rounded m-7'>
            <div className="flex">

                <div className="w-[300px] grid grid-flow-row   ">


                    <p className='text-neutral-200 tracking-tight text-sm my-10'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure molestias doloribus et quo voluptatum provident ut totam illo, quia, perspiciatis fuga reiciendis inventore. Molestiae eius aliquid illum itaque deleniti aut minus nemo doloribus laboriosam asperiores perferendis aspernatur quia voluptate a nihil minima commodi, nulla temporibus, modi placeat tenetur autem magnam magni! In vel laboriosam, quod praesentium obcaecati eos voluptate est quis ullam, incidunt reprehenderit. Accusantium repellendus doloremque quam laborum laudantium, quo nihil quos dolor consequatur quibusdam ipsa blanditiis autem expedita rerum nam et omnis, quasi fugiat sequi facere animi asperiores. Totam, corporis voluptates beatae nesciunt ratione maxime neque qui dolorum.
                    </p>




                </div>
                <Image maw={600} mx="auto" radius="md" src={Imagen} alt="Random image" />
            </div>
            <Stepper active={active} onStepClick={setActive} breakpoint="sm" className='text-white'>
                <Stepper.Step label="Contabilidad" style={{ color: 'white' }} description="Acercarse al área de contabilidad">
                    Area 1 involucrada: Contabilidad
                </Stepper.Step>
                <Stepper.Step label="Cliente" style={{ color: 'white' }} description="Seleecionar el producto que desea">
                    Area 2 involucrada: Cliente
                </Stepper.Step>
                <Stepper.Step label="Vendedor" style={{ color: 'white' }} description="Realizar el pedido al los vendedores">
                    Area 3 involucrada: Vendedeor
                </Stepper.Step>
                <Stepper.Completed>
                    Area 4 involucrada: Almacén
                </Stepper.Completed>
            </Stepper>

            <Group position="center" mt="xl">
                <Button variant="default" onClick={prevStep}>Back</Button>
                <Button onClick={nextStep}>Next step</Button>
            </Group>
        </div>
    );
}