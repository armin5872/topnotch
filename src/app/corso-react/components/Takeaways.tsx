import {
  FaAtom,
  FaKey,
  FaNewspaper,
  FaUsers,
  FaHandshake,
  FaChartBar,
} from 'react-icons/fa'

const items = [
  {
    icon: <FaAtom />,
    title: 'Scientific Insights',
    text: 'Explore the latest scientific research.',
  },
  {
    icon: <FaKey />,
    title: 'Cybersecurity Awareness',
    text: 'Protect yourself from cyber threats.',
  },
  {
    icon: <FaNewspaper />,
    title: 'Industry Updates',
    text: 'Stay informed about industry trends.',
  },
  {
    icon: <FaUsers />,
    title: 'Collaborative Networking',
    text: 'Connect with professionals.',
  },
  {
    icon: <FaHandshake />,
    title: 'Partnership Opportunities',
    text: 'Discover new partnerships.',
  },
  {
    icon: <FaChartBar />,
    title: 'Data-driven Insight',
    text: 'Make better decisions using analytics.',
  },
]

export default function Takeaways() {
  return (
    <section className='container py-5'>
      <h1 className='text-center fw-bold'>Key Takeaways</h1>

      <p className='text-center mb-5'>Here are some benefits you can expect.</p>

      <div className='row g-4'>
        {items.map((item) => (
          <div key={item.title} className='col-lg-4 col-md-6'>
            <div className='bg-white p-4 text-center h-100 shadow-sm'>
              <div className='display-4 text-warning mb-3'>{item.icon}</div>

              <h5 className='fw-bold'>{item.title}</h5>

              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
