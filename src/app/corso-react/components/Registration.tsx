export default function Registration() {
  return (
    <section className='bg-warning py-5'>
      <div className='container'>
        <div className='row align-items-center'>
          <div className='col-lg-6'>
            <h2 className='fw-bold'>
              Unlock Your Potential with Engaging Content
            </h2>

            <p>
              Our wide range of training and seminar videos are designed to
              empower you.
            </p>
          </div>

          <div className='col-lg-6'>
            <input className='form-control mb-3' placeholder='Name' />

            <input className='form-control mb-3' placeholder='Email' />

            <input className='form-control mb-3' placeholder='Phone' />

            <button className='btn btn-dark rounded-pill'>Register</button>
          </div>
        </div>
      </div>
    </section>
  )
}
