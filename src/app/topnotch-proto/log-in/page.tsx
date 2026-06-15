/** @jsxImportSource @emotion/react */
'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { css } from '@emotion/react'

const titleTxt = css`
  margin-top: 80px;
`

const formBtn = css`
  transition-duration: 0.4s;

  &:hover {
    background-color: orange !important;
    transform: translateY(-2px);
  }
`

const auroraCard = css`
  background: linear-gradient(120deg, #0d6efd, #0dcaf0, #f8f9fa, #0d6efd);
  background-size: 300% 300%;
  border: none;
  position: relative;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(13, 202, 240, 0.25);
`

export default function LogIn() {
  const cardRef = useRef(null)

  useEffect(() => {
    gsap.to(cardRef.current, {
      backgroundPosition: '100% 50%',
      duration: 8,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    })
  }, [])

  return (
    <>
      <h1
        css={titleTxt}
        className='display-5 michroma-regular text-center fw-bold text-dark mb-5'
      >
        Log In
      </h1>

      <div className='container mb-5'>
        <div className='row justify-content-center'>
          <div
            ref={cardRef}
            className='col-md-6 card p-4 rounded-5'
            css={auroraCard}
          >
            <div className='card-body bg-light rounded-5 p-3'>
              <h2 className='text-center'>Welcome back</h2>

              <form>
                <label htmlFor='emailpfor' className='form-label mt-3'>
                  I ( Phone Number Or Email Address )
                </label>
                <input
                  type='email'
                  placeholder='Please Enter Your Email Address Or Phone Number'
                  className='form-control form-control-lg'
                  id='emailpfor'
                />

                <label htmlFor='passfor' className='form-label mt-3'>
                  Password
                </label>
                <input
                  type='password'
                  placeholder='Please Enter Your Password'
                  className='form-control form-control-lg'
                  id='passfor'
                />

                <div className='row justify-content-center'>
                  <button
                    type='submit'
                    className='btn btn-info btn-lg fw-bold mt-5 col-3'
                    css={formBtn}
                  >
                    Log In
                  </button>
                </div>

                <div className='form-text mt-3 mb-2 text-center'>
                  by signing up you are agreeing to our Terms and Conditions
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
