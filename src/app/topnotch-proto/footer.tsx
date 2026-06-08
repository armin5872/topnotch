/** @jsxImportSource @emotion/react */
'use client'

import { css } from '@emotion/react'

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
    background-color: orange !important;
  }
`
export default function Footer() {
  return (
    <footer className='bg-primary text-center text-dark p-5'>
      <div className='mb-4'>
        <a
          css={footerBrand}
          className='michroma-regular p-2 fw-bold bg-info rounded-4'
          href='#'
        >
          Topnotch
        </a>
      </div>
      <div>
        <h1 className='mb-0'>
          &copy; {new Date().getFullYear()} TopNotch. All rights reserved.
        </h1>
      </div>
      <div>
        <a
          className='my-3'
          css={footerLink}
          href='mailto:topnotchprogrammers@gmail.com'
        >
          topnotchprogrammers@gmail.com
        </a>
      </div>
      <div className='my-3'>
        <a css={footerLink} href='tel:123-456-7890'>
          Phone Number : 123-456-7890
        </a>
      </div>
      <div>HQ Address : 1600 Pennsylvania Avenue NW, Washington, DC 20500</div>
    </footer>
  )
}
