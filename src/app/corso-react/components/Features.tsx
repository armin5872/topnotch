import Image from 'next/image'

export default function Features() {
  return (
    <section className='container my-5'>
      <div className='row align-items-center'>
        <div className='col-lg-6 text-center'>
          <Image
            src='/instructor.jpg'
            alt='Instructor'
            width={600}
            height={500}
            className='img-fluid rounded-5'
          />
        </div>

        <div className='col-lg-6'>
          <h2 className='fw-bold'>
            Enhance Your Skills with Engaging Training Videos
          </h2>

          <p>
            Our extensive collection of training videos is designed to help you
            enhance your skills and excel in your chosen field.
          </p>

          <p>
            With expert instructors and comprehensive content, you&apos;ll gain
            the confidence and competence to tackle challenges and achieve
            success.
          </p>
        </div>
      </div>
    </section>
  )
}
