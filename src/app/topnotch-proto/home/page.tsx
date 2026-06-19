'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import './home.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import ProgrammersList from './ProgrammersList'

function HeroSwiper() {
  return (
    <Swiper
      modules={[Pagination, Navigation, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 4000 }}
      loop={true}
    >
      <SwiperSlide>
        <div className='hero-section1 my-5 d-flex align-items-center justify-content-center'>
          <div className='text-center text-white'>
            <h1 className='display-2 mb-4 michroma-regular text-dark'>
              Frontend Development
            </h1>
            <p className='lead fs-4 text-dark'>
              we will Build stunning, responsive websites with the latest
              frontend technologies for you.
            </p>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className='hero-section2 my-5 d-flex align-items-center justify-content-center'>
          <div className='text-center text-white'>
            <h1 className='display-2 mb-4 michroma-regular text-dark'>
              App Development With NextJS
            </h1>
            <p className='lead fs-4 text-dark'>
              we will Build cutting-edge web applications with the latest NextJS
              technologies for you.
            </p>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className='hero-section3 my-5 d-flex align-items-center justify-content-center'>
          <div className='text-center text-white'>
            <h1 className='display-2 mb-4 michroma-regular text-dark'>
              Full-Stack Development
            </h1>
            <p className='lead fs-4 text-dark'>
              we will Build full-stack web applications with the latest
              technologies for you.
            </p>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className='hero-section4 my-5 d-flex align-items-center justify-content-center'>
          <div className='text-center text-white'>
            <h1 className='display-2 mb-4 michroma-regular text-dark'>
              Backend Development
            </h1>
            <p className='lead fs-4 text-dark'>
              we will Build robust, scalable backend systems with the latest
              technologies for you.
            </p>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className='hero-section my-5 d-flex align-items-center justify-content-center'>
          <div className='text-center text-white'>
            <h1 className='display-2 mb-4 michroma-regular text-dark'>
              TopNotch Development
            </h1>
            <p className='lead fs-4 text-dark'>
              you will get the best of the best, the TopNotch of our services,
              we will build the backend and frontend at the highest quality for
              you, and we will make sure that your website is the best of the
              best.
            </p>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  )
}

export default function Home() {
  const aurora1 = useRef(null)
  const aurora2 = useRef(null)
  const aurora3 = useRef(null)

  useEffect(() => {
    gsap.to(aurora1.current, {
      x: 200,
      y: 120,
      duration: 5,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    })

    gsap.to(aurora2.current, {
      x: -180,
      y: 140,
      duration: 4.5,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    })

    gsap.to(aurora3.current, {
      x: 150,
      y: -100,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    })
  }, [])

  return (
    <>
      <div className='hero-wrapper'>
        <div ref={aurora1} className='aurora aurora1'></div>
        <div ref={aurora2} className='aurora aurora2'></div>
        <div ref={aurora3} className='aurora aurora3'></div>

        <div className='container-fluid p-4 michroma-regular text-center my-5 content-layer'>
          <h1 className='display-4 mb-4 gradient-text'>
            Welcome to TopNotch Websites
          </h1>

          <p className='lead fs-3 mb-4 text-dark'>
            Your Premier Destination For All Sites TopNotch!
          </p>

          <p className='lead fs-4 text-dark'>
            Let Us Make The TopNotch For You
          </p>
        </div>
      </div>
      <div className='hero-section my-5 d-flex align-items-center justify-content-center'>
        <div className='text-center text-white'>
          <h1 className='display-4 michroma-regular text-dark'>
            Get The TopNotch From The TopNotch
          </h1>
        </div>
      </div>
      <HeroSwiper />
      <ProgrammersList />
    </>
  )
}
