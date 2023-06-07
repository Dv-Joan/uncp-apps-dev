import Routing from '../pages/routing'
import { WeeklyButton, Goals } from './ui/elements'
import React from 'react'


function SecondPartial() {
    return (
        <div className='flex justify-center h-auto gap-5 mt-5'>
            <WeeklyButton dropDownposition="right" weekNumber={9} weeklyGoals={<Goals weeklyGoalOne="Implementación de la dependencia de enrutamiento react-router" weeklyGoalTwo="Uso del hook useState en formularios" weeklyGoalThree="Aplicación práctica de conceptos clave de React" weeklyClassDescription="Se puso en práctica la dependencia de enrutamiento react-router, además se pusieron en práctica el hook de useState utilizando formularios" />} weeklyProject={<Routing />} />
            <WeeklyButton dropDownposition="right" weekNumber={10} weeklyGoals={<Goals weeklyGoalOne="Participación activa" weeklyGoalTwo="Comprensión del silabus" weeklyGoalThree="Formación de Grupos de Trabajo" weeklyClassDescription="Se realizó la exposicion del silabus del curso de desarrollo de aplicaciones web para el ciclo 2023-I con los diferentes temas que se tratarán durante el perido académico" />} weeklyProject={<Routing />} />
            <WeeklyButton dropDownposition="right" weekNumber={11} weeklyGoals={<Goals weeklyGoalOne="Participación activa" weeklyGoalTwo="Comprensión del silabus" weeklyGoalThree="Formación de Grupos de Trabajo" weeklyClassDescription="Se realizó la exposicion del silabus del curso de desarrollo de aplicaciones web para el ciclo 2023-I con los diferentes temas que se tratarán durante el perido académico" />} weeklyProject={<Routing />} />
            <WeeklyButton dropDownposition="right" weekNumber={12} weeklyGoals={<Goals weeklyGoalOne="Participación activa" weeklyGoalTwo="Comprensión del silabus" weeklyGoalThree="Formación de Grupos de Trabajo" weeklyClassDescription="Se realizó la exposicion del silabus del curso de desarrollo de aplicaciones web para el ciclo 2023-I con los diferentes temas que se tratarán durante el perido académico" />} weeklyProject={<Routing />} />
            <WeeklyButton dropDownposition="right" weekNumber={13} weeklyGoals={<Goals weeklyGoalOne="Participación activa" weeklyGoalTwo="Comprensión del silabus" weeklyGoalThree="Formación de Grupos de Trabajo" weeklyClassDescription="Se realizó la exposicion del silabus del curso de desarrollo de aplicaciones web para el ciclo 2023-I con los diferentes temas que se tratarán durante el perido académico" />} weeklyProject={<Routing />} />
            <WeeklyButton dropDownposition="right" weekNumber={14} weeklyGoals={<Goals weeklyGoalOne="Participación activa" weeklyGoalTwo="Comprensión del silabus" weeklyGoalThree="Formación de Grupos de Trabajo" weeklyClassDescription="Se realizó la exposicion del silabus del curso de desarrollo de aplicaciones web para el ciclo 2023-I con los diferentes temas que se tratarán durante el perido académico" />} weeklyProject={<Routing />} />
            <WeeklyButton dropDownposition="right" weekNumber={15} weeklyGoals={<Goals weeklyGoalOne="Participación activa" weeklyGoalTwo="Comprensión del silabus" weeklyGoalThree="Formación de Grupos de Trabajo" weeklyClassDescription="Se realizó la exposicion del silabus del curso de desarrollo de aplicaciones web para el ciclo 2023-I con los diferentes temas que se tratarán durante el perido académico" />} weeklyProject={<Routing />} />

        </div>

    )
}

export default SecondPartial