'use client'

import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default function Hero() {
  return (
    <section
      className='text-center text-white py-5'
      style={{
        backgroundImage: "url('/header-background.jpg')",
        backgroundBlendMode: 'darken',
        backgroundColor: 'rgba(0,0,0,.7)',
      }}
    >
      <div className='container pt-5'>
        <h1 className='display-3 fw-light'>
          Explore Our Training and Seminar Videos
        </h1>

        <p className='lead'>
          Whether you&apos;re a beginner or an experienced professional.
        </p>

        <button className='btn btn-warning rounded-pill me-3'>REGISTER</button>

        <button className='btn btn-outline-light rounded-pill'>DISCOVER</button>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          loop
          className='mt-5 rounded-4'
        >
          <SwiperSlide>
            <Image
              src='/header-slide-1.jpg'
              alt='Training slide 1'
              width={1200}
              height={600}
              className='img-fluid rounded-4'
            />
          </SwiperSlide>

          <SwiperSlide>
            <Image
              src='/header-slide-2.jpg'
              alt='Training slide 2'
              width={1200}
              height={600}
              className='img-fluid rounded-4'
            />
          </SwiperSlide>

          <SwiperSlide>
            <Image
              src='/header-slide-3.jpg'
              alt='Training slide 3'
              width={1200}
              height={600}
              className='img-fluid rounded-4'
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  )
}
