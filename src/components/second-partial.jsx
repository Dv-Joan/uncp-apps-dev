import Routing from '../pages/routing'
import { WeeklyButton, Goals } from './ui/elements'


function SecondPartial() {
    return (
        <div className='flex justify-center h-auto gap-5 mt-5'>
            <WeeklyButton dropDownposition="" weekNumber={1} weeklyGoals={<Goals weeklyGoalOne="Participación activa" weeklyGoalTwo="Comprensión del silabus" weeklyGoalThree="Formación de Grupos de Trabajo" weeklyClassDescription="Se realizó la exposicion del silabus del curso de desarrollo de aplicaciones web para el ciclo 2023-I con los diferentes temas que se tratarán durante el perido académico" />} weeklyProject={<Routing />} />
        </div>

    )
}

export default SecondPartial