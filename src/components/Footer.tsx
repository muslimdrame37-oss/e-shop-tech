import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import { navItems } from '../constants/navItems'
import { contactDetails } from '../constants/contactDetails'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className=" relative mt-20">
      <div className="container mx-auto grid grid-cols-1 col-span-2 md:grid-cols-2 lg:grid-cols-6 py-4 gap-6">
        <div className="flex flex-col items-center lg:items-start justify-between">
          <div>
            <img src={logo} alt="" />
          </div>
          <div>
            <p className="mb-3 pt-4 text-center lg:text-left">
              There are many variations passages of Lorem Ipsum available, but the majority have
            </p>
            <div className="flex items-center justify-center lg:justify-start gap-4">
              <FaInstagram />
              <FaLinkedinIn />
              <FaFacebookF />
              <FaTwitter />
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center lg:items-start justify-between">
          <h3 className="font-bold">Quick Links</h3>
          <ul className="text-center lg:text-left">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link to={item.url}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col items-center lg:items-start justify-between">
          <h3 className="font-bold">Contact</h3>
          <div className="text-center lg:text-left">
            {contactDetails.map((detail, index) => (
              <div key={index}>
                {Object.values(detail).map((value, i) => (
                  <p key={i}>{value}</p>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-3 flex flex-col justify-between ">
          <h3 className="font-bold text-center lg:text-left">Subscribe To Our Email</h3>
          <h4 className="text-xl font-bold mb-5 text-center lg:text-left">For Latest News & Updates</h4>
          <div className="flex items-center justify-center lg:justify-start">
            <div className="flex items-center justify-between lg:w-full bg-linear-to-r from-gray-200 to-gray-400 rounded-full px-2 py-2 gap-2">
              <input
                type="text"
                placeholder="Enter your Email"
                className="w-full outline-none bg-transparent ml-3"
              />
              <button
                type="submit"
                name="subscribe"
                className="text-white font-semibold bg-red-500 px-6 py-2 rounded-full"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
