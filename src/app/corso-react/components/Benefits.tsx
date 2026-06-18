const benefits = [
  {
    number: 1,
    title: 'Enhance Your Skills',
    text: 'Our training videos provide comprehensive insights and practical tips.',
  },
  {
    number: 2,
    title: 'Stay Updated',
    text: 'Keep pace with the latest industry trends.',
  },
  {
    number: 3,
    title: 'Connect with Experts',
    text: 'Expand your professional network.',
  },
  {
    number: 4,
    title: 'Flexible Learning',
    text: 'Learn at your own pace.',
  },
  {
    number: 5,
    title: 'Practical Knowledge',
    text: 'Apply what you learn immediately.',
  },
  {
    number: 6,
    title: 'Continuous Learning',
    text: 'Keep growing through lifelong learning.',
  },
]

export default function Benefits() {
  return (
    <section className='container py-5'>
      <h1 className='text-center fw-bold mb-5'>
        Unlock Your Potential with Engaging Training Videos
      </h1>

      <div className='row'>
        {benefits.map((item) => (
          <div key={item.number} className='col-lg-6 mb-5'>
            <h4 className='fw-bold'>
              <span className='badge bg-warning text-dark rounded-circle p-3 me-3'>
                {item.number}
              </span>

              {item.title}
            </h4>

            <p className='mt-3'>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
