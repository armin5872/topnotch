/** @jsxImportSource @emotion/react */
'use client'

import { css } from '@emotion/react'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

const navbarBtn = css`
  transition-duration: 0.4s;
  &:hover {
    background-color: orange !important;
  }
`
const navbarBrand = css`
  transition-duration: 0.4s;
  &:hover {
    transform: scale(1.1);
    background-color: skyblue !important;
  }
`

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className='navbar navbar-light navbar-expand-lg fixed-top bg-light'>
      <div className='container-fluid my-2 limelight-regular'>
        <a css={navbarBrand} href='#'>
          <Image
            className='rounded-3'
            src='/topnotch-logo.png'
            alt='Topnotch Logo'
            width={120}
            height={40}
          />
        </a>

        <button
          className='navbar-toggler'
          type='button'
          onClick={() => setIsOpen(!isOpen)}
          aria-controls='navbarNav'
          aria-expanded={isOpen}
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>

        <div
          className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}
          id='navbarNav'
        >
          <ul className='navbar-nav ms-auto'>
            <li
              css={navbarBtn}
              className='nav-item px-1 fs-6 rounded-2 mx-2 bg-info'
            >
              <Link className='nav-link' href='/topnotch-proto/home'>
                Home
              </Link>
            </li>
            <li
              css={navbarBtn}
              className='nav-item px-1 fs-6 rounded-2 mx-2 bg-info'
            >
              <Link className='nav-link' href='/topnotch-proto/log-in'>
                Log In
              </Link>
            </li>
            <li
              css={navbarBtn}
              className='nav-item px-1 fs-6 rounded-2 mx-2 bg-info'
            >
              <Link className='nav-link' href='/topnotch-proto/sign-up'>
                Sign up
              </Link>
            </li>
            <li
              css={navbarBtn}
              className='nav-item px-1 fs-6 rounded-2 mx-2 bg-info'
            >
              <Link className='nav-link' href='/topnotch-proto/contact-us'>
                Contact Us
              </Link>
            </li>
            <li
              css={navbarBtn}
              className='nav-item px-1 fs-6 rounded-2 mx-2 bg-info'
            >
              <Link className='nav-link' href='/topnotch-proto/about-us'>
                About Us
              </Link>
            </li>
            <li
              css={navbarBtn}
              className='nav-item px-1 fs-6 rounded-2 mx-2 bg-info'
            >
              <Link className='nav-link' href='/topnotch-proto/faq'>
                FAQ
              </Link>
            </li>
            <li
              css={navbarBtn}
              className='nav-item px-1 fs-6 rounded-2 mx-2 bg-info'
            >
              <Link className='nav-link' href='/topnotch-proto/programmers'>
                Our programmers
              </Link>
            </li>
            <li
              css={navbarBtn}
              className='nav-item px-1 fs-6 rounded-2 mx-2 bg-info'
            >
              <Link className='nav-link' href='/topnotch-proto/our-services'>
                Our Services
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
