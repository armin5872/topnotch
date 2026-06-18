import Image from 'next/image'

export default function Seminar() {
  return (
    <section className='container my-5'>
      <div className='row align-items-center'>
        <div className='col-lg-6 text-center'>
          <Image
            src='/audience.jpg'
            alt='Audience'
            width={600}
            height={500}
            className='img-fluid rounded-5'
          />
        </div>

        <div className='col-lg-6'>
          <h2 className='fw-bold'>
            Elevate Your Learning Journey with Expert Seminars
          </h2>

          <p>
            Join our expert-led seminars and unlock new possibilities in your
            personal and professional development.
          </p>
        </div>
      </div>
    </section>
  )
}
