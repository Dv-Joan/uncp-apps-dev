import React from 'react'
import profilePic from "../assets/images/profile-pic.png"
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
    offset: 120, // offset (in px) from the original trigger point
    delay: 300, // values from 0 to 3000, with step 50ms
    duration: 1500, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom',
});
function Header() {
    return (
        <div className="flex flex-col min-h-screen gap-10 mt-10 rounded-xl hero bg-base-200">
            <div className="flex-col pt-16 hero-content lg:flex-row">
                <div data-aos="fade-right" data-aos-easing="ease-in-sine" data-aos-duration="600" >
                    <h1 className="pl-10 text-6xl font-bold tracking-tight uppercase font-rubik drop-shadow-xl">Weekly Exercises </h1>
                    <p className="pt-24 pl-10 pt pr-52">¡Bienvenidos a mi página de trabajos prácticos del curso de Desarrollo de Aplicaciones Web en UNCP, ciclo 2023-i! </p>

                    <article className='pt-5 pl-10 pr-48 text-slate-400 '>

                        Aquí encontrarás una recopilación completa de todos los trabajos prácticos realizados durante las semanas del primer consolidado del curso. Durante este periodo, hemos explorado y aplicado una amplia gama de conceptos y técnicas relacionadas con el desarrollo de aplicaciones web. </article>
                    <button className="mt-5 ml-10 cursor-default btn btn-primary btn-outline">

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 4.5h14.25M3 9h9.75M3 13.5h9.75m4.5-4.5v12m0 0l-3.75-3.75M17.25 21L21 17.25" />
                        </svg>

                        <span className='pl-2 '>Scrollea</span> </button>
                </div>
                <img data-aos="flip-left" src={profilePic} className="max-w-sm rounded-lg shadow-2xl" />
            </div>
            <ul className="mt-20 steps">
                <li data-content="?" className="step step-neutral">S1</li>
                <li data-content="!" className="step step-neutral">S2</li>
                <li data-content="✓" className="step step-neutral">S3</li>
                <li data-content="✓" className="step step-neutral">S4</li>
                <li data-content="✓" className="step step-neutral">S5</li>
                <li data-content="✓" className="step step-neutral">S6</li>
                <li data-content="✓" className="step step-neutral">S7</li>
            </ul>
        </div>
    )
}

export default Header