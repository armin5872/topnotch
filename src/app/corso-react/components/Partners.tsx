'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import Image from 'next/image'

import 'swiper/css'

export default function Partners() {
  const logos = [
    'partner-logo-1.png',
    'partner-logo-2.png',
    'partner-logo-3.png',
    'partner-logo-4.png',
    'partner-logo-5.png',
    'partner-logo-6.png',
    'partner-logo-1.png',
    'partner-logo-2.png',
    'partner-logo-3.png',
    'partner-logo-4.png',
    'partner-logo-5.png',
    'partner-logo-6.png',
  ]

  return (
    <section className='container py-5'>
      <h2 className='text-center fw-bold mb-5'>Our Partners</h2>

      <Swiper
        modules={[Autoplay]}
        slidesPerView='auto'
        loop
        speed={8000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
      >
        {logos.map((logo) => (
          <SwiperSlide
            key={logo}
            style={{ width: 'auto', marginRight: '50px' }}
          >
            <Image
              className='mx-2'
              src={`/${logo}`}
              width={200}
              height={50}
              alt=''
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}
