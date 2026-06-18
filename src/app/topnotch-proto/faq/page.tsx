/** @jsxImportSource @emotion/react */
'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { css } from '@emotion/react'

const faqQ = css`
  transition-duration: 0.4s;
  &:hover {
    color: #0d6efd !important;
  }
`

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: 'What is Topnotch INC?',
      answer:
        'Topnotch INC is a company that creates modern full-stack attractive websites for businesses.',
    },
    {
      question: 'How large is our team?',
      answer:
        'We are a large team of hundreds of experienced developers and designers working to make websites for you.',
    },
    {
      question: 'What technologies do we use?',
      answer:
        'We use some of the most modern technologies available, including React, Next.js, Tailwind CSS, and what anything depending on what you need.',
    },
    {
      question: 'What services do we offer?',
      answer:
        'We a good selection of websites that we can make for you which includes : WordPress Apps , Regular Apps , static Full-Stack Apps , Dynamic and Interactive Full-Stack Apps and more depending on what you need. for more information go to our services page.',
    },
    {
      question: 'who is our CEO?',
      answer:
        "Our CEO is John Doe, a highly skilled and experienced web developer with a passion for creating modern and attractive websites. With years of experience in the industry, John has a deep understanding of the latest technologies and trends in web development, and is dedicated to delivering high-quality solutions to clients. Under John's leadership, Topnotch INC has become a leading provider of web development services, known for its innovative approach and commitment to excellence.",
    },
    {
      question: 'How can I contact Topnotch INC?',
      answer:
        'You can contact Topnotch INC by visiting our contact page on our website, where you will find a contact form to fill out with your inquiry. Alternatively, you can reach us via email at contact@topnotchinc.com or call our support team at ',
    },
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className='faq-container p-5 m-5'>
      {faqs.map((faq, index) => (
        <div key={index} className='faq-item mb-3'>
          <button
            css={faqQ}
            className='faq-question d-inline w-100 fs-1 michroma-regular bg-dark text-info rounded-3 mx-auto'
            onClick={() => toggleFAQ(index)}
          >
            {faq.question}
          </button>

          {openIndex === index && (
            <motion.div
              className='text-primary shadow michroma-regular bg-dark border border-5 border-secondary rounded-3 p-2 my-3 '
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
            >
              {faq.answer}
            </motion.div>
          )}
        </div>
      ))}
    </div>
  )
}

export default FAQ
