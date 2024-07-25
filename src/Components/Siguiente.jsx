import Carousel from './Carousel.jsx'
import './Siguiente.css'
import i1 from './imagenes/verdita.jpeg';
import i2 from './imagenes/2020.jpeg';
import i3 from './imagenes/2021.jpeg';
import i4 from './imagenes/2022.jpeg';
import i5 from './imagenes/2023.jpeg';
import i6 from './imagenes/2024.jpeg';

import i7 from './imagenes/1.mp4';
import i8 from './imagenes/2.mp4';
import i9 from './imagenes/3.jpeg';
import i10 from './imagenes/4.jpeg';
import i11 from './imagenes/5.jpeg';
import i12 from './imagenes/6.jpeg';
import i13 from './imagenes/7.jpeg';
import i14 from './imagenes/8.jpeg';

import { Swiper,SwiperSlide } from "swiper/react";
import 'swiper/css' ;
import 'swiper/css/effect-coverflow' ;
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

import React, { useEffect, useState } from 'react';

export function Siguiente ({user, setUser}) {

    const handleLogout = () => {
        setUser([])
    }

    const mensajes = [
        "Este regalito que me hiciste fue el desencadenante de todo lo que nos ha pasado. Agradeceré siempre haberme armado de valor para escribirte, al fin y al cabo, gracias a eso estoy viviendo un sueño hoy. Gracias Verde <3, siempre en nuestro corazón.",
        "En 2020 éramos dos bebés conociéndonos, pero ya empezábamos a aprender lo que era cuidar, apoyar, querer y sobretodo lo que es el amor de verdad e incondicional. Dos pollitos que no querían separarse por nada en el mundo y que compartían hasta los mocos.",
        "Verano de 2021, ya no había covid y teníamos muchas ganas de hacer cosas. Empezamos a emprender aventuras y hacíamos planes muy diferentes, pero disfrutando la compañía del otro como de costumbre. ",
        "Este año era tu tercer año de carrera, y aunque la distancia nos mantenía separados, el amor que sentíamos nos unía más fuerte que nada en este mundo. Siempre contábamos los días que quedaban para vernos y volver a ser felices, porque reecontrarnos era el mejor de los regalos. ",
        "¡Ya está, sólo quedaba uno! Un añito y te convertías en enfermera, tu sueño. Obviamente serías la mejor enfermera. He elegido esta foto porque es una ilustración perfecta de nuestra relación: siempre juntos, sonrientes, amorosos y tú siempre llevándome al cielo.",
        "Estamos empezando un nuevo capítulo y no te puedes hacer una idea de lo orgulloso y feliz que me haces. Cada día me doy cuenta de la suerte que tengo y doy gracias por poder llamar 'amor' al angelito más hermoso que Dios pudo mandar a este mundo. Te amo con todo mi corazón. Espero que en el futuro veamos esto con una linda sonrisa y recordemos lo bonito que han sido estos primeros cinco años. "
    ];

    const años = ["2019","2020","2021","2022","2023","2024"];

    const images = [
        i1,
        i2,
        i3,
        i4,
        i5,
        i6,
    ]



    return (
        <div className='main'>
            <div className='main2'>
                <div className='cont'>
                    <h1>¡Feliz 5º Aniversario mi amor!</h1>
                    <p className='parrafo'>
                        En estos años me has hecho demasiado feliz, 
                        pero tanto tanto que uno de mis deseos más profundos es que mis días sigan siendo
                        así toda la vida, es decir,  
                        <span className='bold'> contigo</span>
                        . Es por esto que he
                        reunido una foto de cada año para hacer 
                        un pequeño viaje a través de nuestros primeros 5 años y así poder recordarlos siempre.
                    </p>
                    <Carousel images={images} mensajes={mensajes} años={años} />
                </div>
                <div className='cont2'>
                    <span className='header1'>Recuerdos de</span>
                    <span className='header2'>ESTRELLA<br/>MICHELIN</span>
                    <aside><img className='michelin' src = 'https://restaurantevictorgutierrez.com/files/2020/06/logo-estrella-michelin.png' /></aside>
                    <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    loop={true}
                    slidesPerView={'auto'}
                    coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 2.5,
                    }}
                    pagination={{ el: '.swiper-pagination', clickable: true }}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                        clickable: true,
                      }}
                    modules={[EffectCoverflow, Pagination, Navigation]}
                    className="swiper_container"
                    >
                        <SwiperSlide>
                            <video className='slide-video' autoPlay muted playsInline loop>
                                <source src={i7}  type='video/mp4'/>
                            </video>
                        </SwiperSlide>
                        <SwiperSlide>
                            <video className='slide-video' autoPlay muted playsInline loop> 
                                <source src={i8}  type='video/mp4'/>
                            </video>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={i9} className='slide-image' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={i10} className='slide-image' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={i11} className='slide-image' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={i12} className='slide-image' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={i13} className='slide-image' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={i14} className='slide-image' />
                        </SwiperSlide>
                        <div className="slider-controler">
                            <div className="swiper-button-prev slider-arrow">
                                <ion-icon name="arrow-back-outline"></ion-icon>
                            </div>
                            <div className="swiper-button-next slider-arrow">
                                <ion-icon name="arrow-forward-outline"></ion-icon>
                            </div>
                            <div className="swiper-pagination"></div>
                        </div>
                    </Swiper>
                    <p className='final-text'>Te amo demasiado</p>
                </div>
            </div>
            <button className='boton-salir' onClick={handleLogout}><span className='equis'>×</span></button>
        </div>
        
    )

}