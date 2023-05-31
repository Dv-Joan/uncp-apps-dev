import { useState } from 'react'

const Data = () => {
    const calificativos = [18, 3, 9, 15, 2, 7, 10, 19, 5, 12]
    const nombres = ['Ana', 'Juan', 'María', 'Carlos', 'Luis', 'Laura', 'Pedro', 'Sofía', 'Diego', 'Valeria']

    return (
        <div className='flex flex-col rounded-lg border-yellow-200 items-center justify-center border-2 border-dashed  shadow-xl p-5 mt-10'>

            <div className='flex flex-col my-10 items-center justify-center'>
                <div className='grid grid-cols-2 gap-2'>
                    {nombres.map((nombre, index) => (
                        <div key={index} className='grid grid-flow-row grid-cols-3 items-center justify-center'>
                            <h2 className='text-xl font-bold'>{nombre}</h2>
                            {
                                calificativos[index] >= 10 ?
                                    <p className='text-xl font-bold text-blue-500'>{calificativos[index]} </p>
                                    :
                                    <p className='text-xl font-bold text-red-500'>{calificativos[index]} </p>

                            }

                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default function StudentsGrades() {
    /* const [student, setStudent] = useState(calificativos)

    const handleAnalysis = () => {
        const newStudent = [...student]
        newStudent.sort((a, b) => a - b)
        setStudent(newStudent)

    } */

    return (

        <form >
            <h1 className='text-2xl font-bold mb-10'>Students & Grades</h1>
            <div className="grid  gap-3 mb-5 md:grid-cols-2">
                <div>

                    <input type="text" id="first_name" className="input input-primary bg-primary/10" placeholder="Name" required />
                </div>
                <div>

                    <input type="text" id="first_name" className="input input-primary bg-primary/10" placeholder="Grade" required />
                </div>

            </div>


            <button type="submit" className='btn btn-neutral-focus'>Analyze</button>
            <Data />

        </form >

    )
}

