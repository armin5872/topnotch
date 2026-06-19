'use client'

import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation, Autoplay } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const info = [
  {
    name: 'Jose Diablo | alias : DEL DIABLO',
    profession: 'UI/UX Master',
    description:
      'The best UI/UX programmer in Mexico and one of the best programmers in North America',
    link: '/jose.png',
  },
  {
    name: 'Gloria Fables',
    profession: 'Full-Stack Developer',
    description:
      'She has up to date info on Next.Js and React with Docker and MongoDB.',
    link: '/gloria.png',
  },
  {
    name: 'Jack Heffings',
    profession: 'The Best At Marketing',
    description:
      "An absolute master at marketing and advertising and he's also our lead marketer",
    link: '/jack.png',
  },
  {
    name: 'Amir Hakimi',
    profession: 'Animation Designer For Our Websites',
    description: 'Makes some of the best animations that exist',
    link: '/amir.png',
  },
  {
    name: 'Nana Kirushiru',
    profession: 'A True Artist',
    description:
      'A master at CSS, PostCSS, SASS and frameworks like Bootstrap, TailwindCSS and Radix UI.',
    link: '/nana.png',
  },
  {
    name: 'Tom Smith | alias : LOLLYGAG',
    profession: 'Full Frontend Devolper',
    description:
      'The best frontend devolper ever; has worked on some of the most visted websites',
    link: '/tom.png',
  },
  {
    name: 'Vladmir Varkszi | alias : МИРОТВОРЦ ( The Peacemaker )',
    profession: 'Pro Backend DEV',
    description:
      'Mastered backend tech like ExpressJS, NextJS, Laravel, PHP, Django, NodeJS and more.',
    link: '/vladmir.png',
  },
  {
    name: 'John Doe (true artist)',
    profession: 'Master programmer',
    description: 'CEO of Topnotch INC and the genius behind our websites.',
    link: '/john.png',
  },
]

export default function ProgrammersList() {
  return (
    <div className='container-fluid my-4'>
      <h1 className='text-center fw-bold mb-4'>
        Our Team Of Talented Programmers
      </h1>

      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3500 }}
        loop={true}
        breakpoints={{
          768: { slidesPerView: 2 },
          1200: { slidesPerView: 3 },
        }}
      >
        {info.map((programmer) => (
          <SwiperSlide key={programmer.name}>
            <div className='card shadow-lg border-0 h-100 mx-2'>
              <div className='card-body p-3'>
                <h2 className='card-title text-info fw-bold fs-5 mb-2'>
                  {programmer.name}
                </h2>

                <h5 className='card-subtitle text-muted my-2'>
                  {programmer.profession}
                </h5>

                <p className='card-text text-primary mb-3'>
                  {programmer.description}
                </p>

                <div
                  style={{
                    position: 'relative',
                    width: '100%',
                    height: '250px',
                    borderRadius: '12px',
                    overflow: 'hidden',
                  }}
                >
                  <Image
                    src={programmer.link}
                    alt={programmer.name}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
