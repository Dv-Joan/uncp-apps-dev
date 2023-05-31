import React from 'react'
import { WeeklyButton, Goals } from './ui/elements'
import ReactBasics from './ReactBasics'
import WeekTwo from './weekly-exercises/weekTwo'
import WeekFour from './weekly-exercises/weekFour'
import WeekThree from './weekly-exercises/weekThree'
import WeekFive from './weekly-exercises/weekFive'
import WeekSix from './weekly-exercises/weekSix'
import WeekSeven from './weekly-exercises/weekSeven'
import WeekEight from './weekly-exercises/weekEight'


function FirstPartial() {
    return (
        <div className='flex justify-center gap-5 mt-5'>
            <WeeklyButton weekNumber={1} weeklyGoals={<Goals weeklyGoalOne="Participación activa" weeklyGoalTwo="Comprensión del silabus" weeklyGoalThree="Formación de Grupos de Trabajo" weeklyClassDescription="Se realizó la exposicion del silabus del curso de desarrollo de aplicaciones web para el ciclo 2023-I con los diferentes temas que se tratarán durante el perido académico" />} weeklyProject={<ReactBasics />} />

            <WeeklyButton
                weekNumber={2}
                weeklyGoals={<Goals weeklyGoalOne="Diseño visual atractivo del portafolio"
                    weeklyGoalTwo="Organización clara y estructurada del contenido" weeklyGoalThree="Uso efectivo de herramientas y tecnologías"
                    weeklyClassDescription="Diseño de la primera versión de nuestro portafolio en Figma para el curso, en el que debemos subir todos lo realizado en clase cada semana durante el periódo académico" />} weeklyProject={< WeekTwo />} />


            <WeeklyButton weekNumber={3} weeklyGoals={<Goals weeklyGoalOne="Colaboración efectiva y comunicación fluida dentro del equipo " weeklyGoalTwo="Aplicación de técnicas y principios de diseño responsivo" weeklyGoalThree="Aplicación de buenas prácticas de desarrollo web" weeklyClassDescription="Desarrollar en equipo la réplica de una página web Template, utilizando frameworks css" />} weeklyProject={<WeekThree />} />


            <WeeklyButton
                weekNumber={4} weeklyGoals={<Goals weeklyGoalOne="Capacidad para aplicar los conceptos teóricos de JavaScript" weeklyGoalTwo="Comprensión de los principales conceptos de JavaScript" weeklyGoalThree="Utilización efectiva de los snippets de Emmet" weeklyClassDescription="Se realizo la exposicion teórica de lenguaje de javascript, principales conceptos del mismo, así como la puesta en práctica de los snippets de EMMET" />}
                weeklyProject={<WeekFour />} />



            <WeeklyButton weekNumber={5} weeklyGoals={<Goals weeklyGoalOne="Familiarización con la librería de React JS." weeklyGoalTwo="Entender en que consisten los componentes en react" weeklyGoalThree="Comprender los conceptos fundamentales de ReactJS" weeklyClassDescription="Explicación sobre la librería de React JS, creando diferentes proyectos con Remix, Vite, Next, Create React App" />} weeklyProject={<WeekFive />} />



            <WeeklyButton weekNumber={6} weeklyGoals={<Goals weeklyGoalOne="Comprension del estado en react" weeklyGoalTwo="Creación exitosa de proyectos utilizando otros frameworks" weeklyGoalThree="Instalacion de dependencias en react" weeklyClassDescription="Extension de los demas conceptos y términos básicos de react js, componentes, jerarquía de componentes, definicion del concepto de estado entre otros" />} weeklyProject={<WeekSix />} />


            <WeeklyButton weekNumber={7} weeklyGoals={<Goals weeklyGoalOne="Demostración de habilidades prácticas" weeklyGoalTwo="Aplicación de conceptos básicos de ReactJS" weeklyGoalThree="Implementación exitosa de los conceptos y técnicas" weeklyClassDescription="Se puso en practica todo lo aprendido durante las 6 semanas anteriores, con una práctica calificada sobre la aplicacion de conceptos básicos de reactjs" />} weeklyProject={<WeekSeven />} />


            <WeeklyButton weekNumber={8} weeklyGoals={<Goals weeklyGoalOne="Aplicación efectiva de los conceptos y habilidades adquiridos en el examen" weeklyGoalTwo="Demostración de conocimiento y comprensión de los temas" weeklyGoalThree="Cumplimiento de los plazos y requisitos establecidos" weeklyClassDescription="Rendición del examen para el primer consolidado del periodo académico" />} weeklyProject={<WeekEight />} />

        </div>
    )
}

export default FirstPartial