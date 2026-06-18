export default function EventBanner() {
  return (
    <section
      className='container text-center text-white rounded-5 p-5 my-5'
      style={{
        backgroundImage: "url('/invitation-background.jpg')",
        backgroundColor: 'rgba(0,0,0,.8)',
        backgroundBlendMode: 'darken',
      }}
    >
      <h1 className='fw-bold mb-4'>Join Us On December 22nd</h1>

      <p className='mb-4'>
        We cordially invite you to attend a seminar on December 22nd.
      </p>

      <button className='btn btn-warning rounded-pill px-4'>
        Register Now
      </button>
    </section>
  )
}
