'use client'

import Image from 'next/image'
import Link from 'next/link'
import { FaFacebookF, FaTwitter } from 'react-icons/fa'

export default function Navbar() {
  return (
    <nav className='navbar navbar-expand-lg fixed-top bg-dark'>
      <div className='container'>
        <Link href='/' className='navbar-brand'>
          <Image src='/logo.png' alt='Logo' width={120} height={40} />
        </Link>

        <button
          className='navbar-toggler'
          data-bs-toggle='collapse'
          data-bs-target='#menu'
        >
          <span className='navbar-toggler-icon'></span>
        </button>

        <div className='collapse navbar-collapse' id='menu'>
          <ul className='navbar-nav ms-auto'>
            <li className='nav-item'>
              <Link href='#' className='nav-link text-white'>
                Home
              </Link>
            </li>

            <li className='nav-item'>
              <Link href='#' className='nav-link text-white'>
                Discover
              </Link>
            </li>

            <li className='nav-item'>
              <Link href='#' className='nav-link text-white'>
                Summary
              </Link>
            </li>

            <li className='nav-item'>
              <Link href='#' className='nav-link text-white'>
                Takeaways
              </Link>
            </li>

            <li className='nav-item ms-3'>
              <FaFacebookF className='text-warning me-3' />
              <FaTwitter className='text-warning' />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
