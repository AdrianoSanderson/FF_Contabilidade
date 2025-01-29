import React from 'react'

function Sobre() {
    return (
        <section className='flex justify-center'>
            <div className='flex flex-col items-center md:w-4/5 md:mt-8'>
                <h3 className='text-center text-3xl m-3 md:text-4xl lg:text-5xl'>Quem é a contadora Fernanda Fernandes?</h3>
                <div className='flex items-center w-11/12 gap-4 mb-8 md:mt-6'>
                    <div className='w-1/2'>
                        <h5 className='text-teal-700 text-2xl font-semibold mb-2 md:text-3xl'>Formação</h5>
                        <p className='text-gray-900 text-2xl  md:text-2xl'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto, beatae aperiam.</p>
                    </div>
                    <div className='w-1/2'>
                        <h5 className='text-teal-700 text-2xl font-semibold mb-2 md:text-3xl'>Experiência</h5>
                        <p className='text-gray-900 text-2xl md:text-2xl' >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto, beatae aperiam.</p>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}

export default Sobre