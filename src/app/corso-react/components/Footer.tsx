import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaPinterest,
} from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className='bg-dark text-white py-5'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-4'>
            <h5>About</h5>
            <p>Training and seminar platform for continuous learning.</p>
          </div>

          <div className='col-md-4'>
            <h5>Quick Links</h5>
            <ul className='list-unstyled'>
              <li>Home</li>
              <li>Discover</li>
              <li>Summary</li>
              <li>Takeaways</li>
            </ul>
          </div>

          <div className='col-md-4'>
            <FaFacebook className='me-2' />
            <FaTwitter className='me-2' />
            <FaInstagram className='me-2' />
            <FaLinkedin className='me-2' />
            <FaPinterest />
          </div>
        </div>
      </div>
    </footer>
  )
}
