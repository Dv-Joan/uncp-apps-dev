import React from 'react'

function Basics() {
    return (
        <div className='flex justify-center gap-5'>

            <div>

                <label htmlFor="my-modal" className="my-10 btn">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                    </svg>
                    <span className='pl-3'>Emmet</span></label>


                <input type="checkbox" id="my-modal" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box">
                        <h3 className="flex gap-5 text-lg font-bold text-primary"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75" />
                        </svg>
                            Elementary Snippets</h3>
                        <p className="px-12 py-4 text-sm">Emmet es una poderosa herramienta que acelera el flujo de trabajo en el desarrollo web al permitir la generación rápida de código HTML</p>
                        <ul tabIndex={0} className="w-full p-2 shadow dropdown-content menu bg-base-100 rounded-box">
                            <li><a href='https://blog.greenroots.info/10-vs-code-emmet-tips-to-make-you-more-productive' target='_blank'><strong className='text-2xl font-bold text-secondary'>{' ! '}</strong> Estructura básica de HTML</a></li>
                            <li><a href='https://blog.greenroots.info/10-vs-code-emmet-tips-to-make-you-more-productive' target='_blank'><strong className='text-2xl font-bold text-secondary'>{' # '}</strong> Elemento con un id</a></li>
                            <li><a href='https://blog.greenroots.info/10-vs-code-emmet-tips-to-make-you-more-productive' target='_blank'><strong className='text-2xl font-bold text-secondary'>{' . '}</strong> Elemento con una clase</a></li>
                            <li><a href='https://blog.greenroots.info/10-vs-code-emmet-tips-to-make-you-more-productive' target='_blank'><strong className='text-2xl font-bold text-secondary'>{' > '}</strong> Elemento con subnivel</a></li>
                            <li><a href='https://blog.greenroots.info/10-vs-code-emmet-tips-to-make-you-more-productive' target='_blank'><strong className='text-2xl font-bold text-secondary'>{' $ '}</strong> Elmento con numeración</a></li>
                            <li><a href='https://blog.greenroots.info/10-vs-code-emmet-tips-to-make-you-more-productive' target='_blank'><strong className='text-2xl font-bold text-secondary'>{' { } '}</strong> Elemento con texto dentro</a></li>
                            <li><a href='https://blog.greenroots.info/10-vs-code-emmet-tips-to-make-you-more-productive' target='_blank'><strong className='text-2xl font-bold text-secondary'>{' ^ '}</strong> Elemento con supernivel</a></li>
                        </ul>
                        <div className="modal-action">
                            <label htmlFor="my-modal" className="btn">CERRAR</label>
                        </div>
                    </div>
                </div>
            </div>
            <div>

                <a href='https://www.w3schools.com/js/DEFAULT.asp' target='_blank' className="my-10 btn"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
                    <span className='pl-3'>JavaScript Theory</span></a>



            </div>
            <div>

                <a href='https://react.dev/' target='_blank' className="my-10 btn"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                </svg>

                    <span className='pl-3'>React JS Theory</span></a>

            </div>
        </div>
    )
}

export default Basics