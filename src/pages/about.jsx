import { Avatar, Spoiler } from '@mantine/core';
import { IconStar } from '@tabler/icons-react';

export default function About() {
    return (
        <>
            <div className="flex">

                <Avatar src="https://randomuser.me/api/portraits/men/1.jpg" alt="it's me" />
                <Spoiler maxHeight={120} showLabel="Show more" hideLabel="Hide">
                    <p className='text-md'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est consectetur impedit repudiandae voluptates pariatur odit ut placeat corrupti explicabo! Ipsam ea qui neque, soluta aliquam expedita sed debitis doloribus harum vitae pariatur fuga vel dolore consequuntur dicta repellat odit. Laudantium.</p>
                </Spoiler>
            </div>

            <Avatar radius="xl" src="https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ" />
            <Spoiler maxHeight={120} showLabel="Show more" hideLabel="Hide">
                <p className='text-md'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est consectetur impedit repudiandae voluptates pariatur odit ut placeat corrupti explicabo! Ipsam ea qui neque, soluta aliquam expedita sed debitis doloribus harum vitae pariatur fuga vel dolore consequuntur dicta repellat odit. Laudantium.</p>
            </Spoiler>

            <Avatar color="cyan" radius="xl" src="https://randomuser.me/api/portraits/men/4.jpg">MK</Avatar>
            <Spoiler maxHeight={120} showLabel="Show more" hideLabel="Hide">
                <p className='text-md'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est consectetur impedit repudiandae voluptates pariatur odit ut placeat corrupti explicabo! Ipsam ea qui neque, soluta aliquam expedita sed debitis doloribus harum vitae pariatur fuga vel dolore consequuntur dicta repellat odit. Laudantium.</p>
            </Spoiler>
            <Avatar color="blue" radius="sm">
                <IconStar size="1.5rem" />
            </Avatar>
        </>
    );
}