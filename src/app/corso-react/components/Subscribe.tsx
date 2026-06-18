export default function Subscribe() {
  return (
    <section className='container py-5'>
      <div
        className='card mx-auto text-center border-0 p-5'
        style={{ maxWidth: '700px' }}
      >
        <h2 className='fw-bold mb-4'>
          Subscribe to our email list and get updates
        </h2>

        <input
          type='email'
          className='form-control mb-3'
          placeholder='Email Address'
        />

        <p>We will never share your email address.</p>

        <button className='btn btn-warning rounded-pill'>Subscribe</button>
      </div>
    </section>
  )
}
