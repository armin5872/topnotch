/** @jsxImportSource @emotion/react */
'use client'

import { css } from '@emotion/react'
import Image from 'next/image'

const footerBrand = css`
  transition-duration: 0.4s;
  text-decoration: none;
  color: black;
  &:hover {
    transform: scale(1.1);
    background-color: skyblue !important;
  }
`
const footerLink = css`
  transition-duration: 0.4s;
  text-decoration: none;
  color: black;
  &:hover {
    color: orange !important;
  }
`
export default function Footer() {
  return (
    <footer className='bg-primary text-center text-dark p-5'>
      <div className='mb-4'>
        <a css={footerBrand} href='#'>
          <Image
            className='rounded-3'
            src='/topnotch-logo.png'
            alt='Topnotch Logo'
            width={150}
            height={50}
          />
        </a>
      </div>
      <div>
        <h1 className='mb-0'>
          {new Date().getFullYear()} TopNotch an example website made by ArminNX
        </h1>
      </div>
      <div>
        <a
          className='my-3'
          css={footerLink}
          href='mailto:topnotchprogrammers@gmail.com'
        >
          arminnxm@gmail.com
        </a>
      </div>
      <div className='my-3'>
        <a css={footerLink} href='https://github.com/armin5872/topnotch'>
          github
        </a>
      </div>
    </footer>
  )
}
