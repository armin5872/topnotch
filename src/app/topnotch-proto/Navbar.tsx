/** @jsxImportSource @emotion/react */
'use client'

import { css } from '@emotion/react'
import Link from 'next/link'

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
  return (
    <nav className='navbar navbar-light navbar-expand-lg fixed-top bg-light'>
      <div className='container-fluid my-2 limelight-regular'>
        <ul className='navbar-nav'>
          <li
            css={navbarBtn}
            className='nav-item px-1 fs-5 rounded-2 mx-2 bg-info'
          >
            <Link className='nav-link' href='#'>
              Home
            </Link>
          </li>
          <li
            css={navbarBtn}
            className='nav-item px-1 fs-5 rounded-2 mx-2 bg-info'
          >
            <Link className='nav-link' href='/topnotch-proto/log-in'>
              Log In
            </Link>
          </li>
          <li
            css={navbarBtn}
            className='nav-item px-1 fs-5 rounded-2 mx-2 bg-info'
          >
            <Link className='nav-link' href='/topnotch-proto/sign-up'>
              Sign up
            </Link>
          </li>
          <li
            css={navbarBtn}
            className='nav-item px-1 fs-5 rounded-2 mx-2 bg-info'
          >
            <Link className='nav-link' href='/topnotch-proto/contact-us'>
              Contact Us
            </Link>
          </li>
          <li
            css={navbarBtn}
            className='nav-item px-1 fs-5 rounded-2 mx-2 bg-info'
          >
            <Link className='nav-link' href='/topnotch-proto/about-us'>
              About Us
            </Link>
          </li>
          <li
            css={navbarBtn}
            className='nav-item px-1 fs-5 rounded-2 mx-2 bg-info'
          >
            <Link className='nav-link' href='/topnotch-proto/faq'>
              FAQ
            </Link>
          </li>
          <li
            css={navbarBtn}
            className='nav-item px-1 fs-5 rounded-2 mx-2 bg-info'
          >
            <Link className='nav-link' href='/topnotch-proto/programmers'>
              Our programmers
            </Link>
          </li>
          <li
            css={navbarBtn}
            className='nav-item px-1 fs-5 rounded-2 mx-2 bg-info'
          >
            <Link className='nav-link' href='#'>
              Our Services
            </Link>
          </li>
        </ul>
        <a
          css={navbarBrand}
          className='navbar-brand michroma-regular p-2 fw-bold bg-info ms-auto rounded-4'
          href='#'
        >
          Topnotch
        </a>
      </div>
    </nav>
  )
}
