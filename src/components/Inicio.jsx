import React from 'react'
import contabilidade from '../assets/images/contabilidade.png'

function Inicio() {
    return (
        <section className='bg-teal-700  flex justify-center'>
            <div className='flex flex-col justify-items-center items-center  md:flex-row md:w-4/5 md:mb-10'>
                <div className='m-5 md:w-1/2'>
                    <h1 className='text-slate-50 text-3xl mb-4 mt-12 md:mt-28 lg:text-5xl
                '>Soluções contábeis para simplificar a gestão do seu negócio</h1>
                    <h2 className='text-slate-50 text-justify mb-4 lg:text-2xl'>Com ampla experiência em departamento pessoal e fiscal, ofereço soluções práticas e eficientes para atender às necessidades contábeis do seu negócio.</h2>
                    <button  className='bg-slate-50 text-teal-700 p-2 rounded-md' onClick={()=> window.open("https://api.whatsapp.com/send?phone=5591985316506")}>
                        Contato por whatsapp
                    </button>
                </div>
                <div className='flex h-full md:w-3/5 md:mt-28'>
                    <img className='' src={contabilidade} alt="Contadora Fernanda" />
                </div>
            </div>
        </section>
    )
}

export default Inicio