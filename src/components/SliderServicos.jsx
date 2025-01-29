import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from 'swiper/modules'; // Import dos módulos necessários

import 'swiper/css';
import 'swiper/css/scrollbar';

function SliderServicos() {

    const [slidesPerView, setSlidesPerView] = useState(2)

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth < 550) {
                setSlidesPerView(1)
            } else {
                setSlidesPerView(2)
            }
        }

        handleResize()

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return (
        <>
        <h1 className='text-center text-3xl m-3 md:text-4xl lg:text-5xl'>Arraste para conhecer nossos serviços</h1>

        <div className='flex items-center justify-center'>
            <Swiper
                className='h-[230px] w-[1000px] m-[8px] max-md:w-[96%]'
                spaceBetween={20} // Espaço entre os slides
                slidesPerView={slidesPerView} // Mostra dois slides por vez
                scrollbar={{
                    hide: true,
                }}
                modules={[Scrollbar]}          >

                <SwiperSlide className='bg-teal-700 rounded-lg' >
                    <h1 className="text-slate-50 text-3xl font-bold ml-8 mt-12 max-sm:mr-5">Regularização fiscal</h1>
                    <p className="text-slate-50 text-xl ml-8 mr-5">Ajustamos pendências fiscais e garantimos sua conformidade com a lei.</p>
                    <img className='right-4 top-3 absolute' src="next.png" alt="Arraste para o lado esquerdo" />
                </SwiperSlide>

                <SwiperSlide className='bg-teal-700 rounded-lg'>
                    <h1 className="text-slate-50 text-3xl font-bold ml-8 mt-12 ">Cálculo Tributário</h1>
                    <p className="text-slate-50 text-xl ml-8 mr-5">Realizamos o cálculo preciso de tributos para sua empresa.</p>
                    <img className='right-4 top-3 absolute' src="next.png" alt="Arraste para o lado esquerdo" />
                </SwiperSlide>

                <SwiperSlide className='bg-teal-700 rounded-lg'>
                    <h1 className="text-slate-50 text-3xl font-bold ml-8 mt-12">Guias de Pagamento</h1>
                    <p className="text-slate-50 text-xl ml-8 mr-5">Garantimos a emissão de guias dentro dos prazos e conforme a legislação.</p>
                    <img className='right-4 top-3 absolute' src="next.png" alt="Arraste para o lado esquerdo" />
                </SwiperSlide>

                <SwiperSlide className='bg-teal-700 rounded-lg'>
                    <h1 className="text-slate-50 text-3xl font-bold ml-8 mt-12">Admissão</h1>
                    <p className="text-slate-50 text-xl ml-8 mr-5">Cuidamos do processo de contratação, garantindo conformidade legal.</p>
                    <img className='right-4 top-3 absolute' src="next.png" alt="Arraste para o lado esquerdo" />
                </SwiperSlide>
                
                <SwiperSlide className='bg-teal-700 rounded-lg'>
                    <h1 className="text-slate-50 text-3xl font-bold ml-8 mt-12">Consultorias</h1>
                    <p className="text-slate-50 text-xl ml-8 mr-5">Atendimento personalizado para exclarecimento de dúvidas específicas.</p>
                    <img className='right-4 top-3 absolute' src="next.png" alt="Arraste para o lado esquerdo" />
                </SwiperSlide>
                
                <SwiperSlide className='bg-teal-700 rounded-lg'>
                    <h1 className="text-slate-50 text-3xl font-bold ml-8 mt-12">Rescisão</h1>
                    <p className="text-slate-50 text-xl ml-8 mr-5">Realizamos cálculos e documentações para desligamentos de forma segura.</p>
                    <img className='right-4 top-3 absolute' src="next.png" alt="Arraste para o lado esquerdo" />
                </SwiperSlide>

            </Swiper>
        </div>
        </>
    );
}

export default SliderServicos;