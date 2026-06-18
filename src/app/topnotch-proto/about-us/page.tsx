'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function AboutUs() {
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const para1Ref = useRef(null)
  const para2Ref = useRef(null)

  useEffect(() => {
    const animateWords = (element) => {
      if (!element) return

      const text = element.innerText
      const words = text.split(' ')

      element.innerHTML = words
        .map(
          (word) =>
            `<span style="display:inline-block; opacity:0; transform:translateY(40px); margin-right:8px;">${word}</span>`,
        )
        .join('')

      const spans = element.querySelectorAll('span')

      gsap.to(spans, {
        opacity: 1,
        y: 0,
        duration: 3,
        stagger: 0.04,
        ease: 'power3.out',
      })
    }

    animateWords(titleRef.current)

    setTimeout(() => animateWords(subtitleRef.current), 300)
    setTimeout(() => animateWords(para1Ref.current), 700)
    setTimeout(() => animateWords(para2Ref.current), 1200)
  }, [])

  return (
    <div className='container michroma-regular justify-content-center text-center my-5'>
      <p className='my-5'>.</p>
      <h1 ref={titleRef} className='text-dark my-5'>
        About Us
      </h1>

      <div className='p-4 bg-dark rounded-5'>
        <div className='card bg-info text-dark rounded-5 p-3'>
          <div className='card-body'>
            <h2 ref={subtitleRef} className='card-title'>
              Our Story
            </h2>

            <p ref={para1Ref} className='card-text fs-4'>
              <strong className='text-primary'>
                Welcome to Topnotch INC!{' '}
              </strong>
              We are a team of passionate developers and designers dedicated to
              creating modern, attractive websites for businesses. Our mission
              is to help businesses establish a strong online presence and
              connect with their target audience through innovative web
              solutions.
            </p>

            <p ref={para2Ref} className='card-text fs-4 my-4'>
              It all started when our CEO John Doe, a pro web developer, wanted
              to create a service that could make sleek and attractive websites
              for companies at a reasonable price. With a small team of talented
              individuals, we set out to create a company that would provide
              high-quality web development services to businesses of all sizes,
              and here we are now.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
