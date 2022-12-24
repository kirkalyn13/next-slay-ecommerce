
import Link from 'next/link'
import { FaChevronRight, FaFacebook, FaInstagram, FaTwitter, FaPinterest, FaEnvelope, FaMapMarkedAlt, FaPhone } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer id="contact" className="text-light py-5">
    <div className="container">
      <div className="row text-dark g-4">
        <div className="col-md-6 col-lg-3">
          <Link href="index.html" className="brand text-decoration-none text-light fw-bold">
            Slay.Ph
          </Link>
          <p className="text-light mt-3">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque
            ipsa dolores laudantium harum repellat eligendi quos facilis qui
            aliquam pariatur.
          </p>
        </div>
        <div className="col-md-6 col-lg-3">
          <h5 className="fw-light text-light">Links</h5>
          <ul className="list-unstyled">
            <li className="my-3">
              <Link href="#" className="text-white text-decoration-none">
                <FaChevronRight/> Home
              </Link>
            </li>
            <li className="my-3">
              <Link href="#collection" className="text-white text-decoration-none">
              <FaChevronRight/> Collection
              </Link>
            </li>
            <li className="my-3">
              <Link href="#blogs" className="text-white text-decoration-none">
              <FaChevronRight/> Blogs
              </Link>
            </li>
            <li className="my-3">
              <Link href="#about" className="text-white text-decoration-none">
                <FaChevronRight/> About Us
              </Link>
            </li>
            <li className="my-3">
              <Link href="#popular" className="text-white text-decoration-none">
                <FaChevronRight/> Popular
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-md-6 col-lg-3">
          <h5 className="fw-light mb-3 text-light">Contact Us</h5>
          <div
            className="d-flex justify-content-start align-items-start my-2"
          >
            <span className="me-3 text-light"><FaEnvelope/></span>
            <span className="fw-light text-light">slay.ph@gmail.com</span>
          </div>
          <div
            className="d-flex justify-content-start align-items-start my-2"
          >
            <span className="me-3 text-light"><FaMapMarkedAlt/></span>
            <span className="fw-light text-light"
              >XYZ Avenue, Angeles City, Pampanga, Philippines</span
            >
          </div>
          <div
            className="d-flex justify-content-start align-items-start my-2"
          >
            <span className="me-3 text-light"><FaPhone/></span>
            <span className="fw-light text-light">0923 4567 890</span>
          </div>
        </div>
        <div className="col-md-6 col-lg-3">
          <h5 className="fw-light mb-3 text-light">Follow Us</h5>
          <ul className="list-unstyled d-flex">
            <li className="text-decoration-none text-light fs-4 me-4">
              <FaFacebook/>
            </li>
            <li className="text-decoration-none text-light fs-4 me-4">
              <FaInstagram/>
            </li>
            <li className="text-decoration-none text-light fs-4 me-4">
              <FaTwitter/>
            </li>
            <li className="text-decoration-none text-light fs-4 me-4">
              <FaPinterest/>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer