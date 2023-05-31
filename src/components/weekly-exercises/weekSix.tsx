import React from 'react'
import reactApp from "../../assets/images/create-react-app.png";
import viteApp from "../../assets/images/create-vite.png";
import nextApp from "../../assets/images/create-next-app.png";
import remixApp from "../../assets/images/create-remix-app.png";
function WeekSix() {
    return (
        <div className='flex flex-col gap-5'>
            <div>

                <a href='https://react.dev/' target='_blank' className="my-10 btn btn-primary"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                </svg>

                    <span className='pl-3 '>React JS Theory</span></a>

            </div>
            <img src={reactApp} alt="apps" />
            <img src={viteApp} alt="apps" />
            <img src={nextApp} alt="apps" />
            <img src={remixApp} alt="apps" />
        </div>
    )
}

export default WeekSix