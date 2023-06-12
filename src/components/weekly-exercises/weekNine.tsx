import React from 'react'
import Routing from './../../pages/routing'
import { ProductsForm } from './../ui/form'
import { ProductsTable } from './../ui/table'
import { Title } from '@mantine/core'

function WeekNine() {
    return (
        <div className='mx-7'>
            {/* <Routing /> */}
            <Title className='text-center mb-16 mt-5'>
                Products CRUD
            </Title>
            <div className="flex gap-7">

                <ProductsForm />
                <ProductsTable />
            </div>

        </div>
    )
}

export default WeekNine