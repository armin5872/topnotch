/** @jsxImportSource @emotion/react */
'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { css } from '@emotion/react'

const inputStyle = css`
  transition-duration: 0.3s;
  &:focus {
    box-shadow: 0 0 10px rgba(13, 110, 253, 0.5) !important;
    border-color: #0d6efd !important;
  }
`

const submitBtn = css`
  transition-duration: 0.4s;
  &:hover {
    background-color: #0d6efd !important;
    transform: scale(1.05);
  }
`

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, staggerChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
}

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      // Replace with your actual API endpoint
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitted(true)
        setFormData({ name: '', email: '', subject: '', message: '' })
        setTimeout(() => setSubmitted(false), 3000)
      }
    } catch (error) {
      console.error('Error submitting form:', error)
    }
  }

  return (
    <motion.div
      className='contact-container p-5 m-5'
      variants={containerVariants}
      initial='hidden'
      animate='visible'
    >
      <motion.h1
        className='michroma-regular text-dark fs-1 mb-4 text-center'
        variants={itemVariants}
      >
        Get In Touch With Us
      </motion.h1>

      <motion.p
        className='text-center text-dark mb-5 fs-5'
        variants={itemVariants}
      >
        Have any questions? We&apos;d love to hear from you. Send us a message
        and we&apos;ll respond as soon as possible.
      </motion.p>

      <motion.div
        className='row justify-content-center'
        variants={itemVariants}
      >
        <div className='col-lg-6 col-md-8 col-sm-10'>
          <form onSubmit={handleSubmit}>
            <motion.div className='mb-4' variants={itemVariants}>
              <label htmlFor='name' className='form-label michroma-regular'>
                Name
              </label>
              <input
                css={inputStyle}
                type='text'
                className='form-control bg-light border-2'
                id='name'
                name='name'
                value={formData.name}
                onChange={handleChange}
                required
              />
            </motion.div>

            <motion.div className='mb-4' variants={itemVariants}>
              <label htmlFor='email' className='form-label michroma-regular'>
                Email
              </label>
              <input
                css={inputStyle}
                type='email'
                className='form-control bg-light border-2'
                id='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                required
              />
            </motion.div>

            <motion.div className='mb-4' variants={itemVariants}>
              <label htmlFor='subject' className='form-label michroma-regular'>
                Subject
              </label>
              <input
                css={inputStyle}
                type='text'
                className='form-control bg-light border-2'
                id='subject'
                name='subject'
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </motion.div>

            <motion.div className='mb-4' variants={itemVariants}>
              <label htmlFor='message' className='form-label michroma-regular'>
                Message
              </label>
              <textarea
                css={inputStyle}
                className='form-control bg-light border-2'
                id='message'
                name='message'
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
              />
            </motion.div>

            <motion.button
              css={submitBtn}
              type='submit'
              className='btn btn-info michroma-regular w-100 fs-5'
              variants={itemVariants}
            >
              Send Message
            </motion.button>
          </form>

          {submitted && (
            <motion.div
              className='alert alert-success mt-4 michroma-regular'
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              Thank you for your message! We&apos;ll get back to you soon.
            </motion.div>
          )}
        </div>
      </motion.div>

      <motion.div
        className='row justify-content-center mt-5 pt-5'
        variants={itemVariants}
      >
        <div className='col-lg-8 text-center'>
          <h3 className='michroma-regular text-dark mb-4'>
            Other Ways to Reach Us
          </h3>
          <div className='bg-info rounded-3 p-4'>
            <p className='mb-2'>
              <strong>Email:</strong> topnotchprogrammers@gmail.com
            </p>
            <p className='mb-2'>
              <strong>Phone:</strong> 123-456-7890
            </p>
            <p>
              <strong>Address:</strong> 1600 Pennsylvania Avenue NW, Washington,
              DC 20500
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
