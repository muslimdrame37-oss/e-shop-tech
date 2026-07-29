import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import { navItems } from '../constants/navItems'
import { CircleX, Menu, Search, ShoppingBag } from 'lucide-react'
import Container from './Container'
import { useState } from 'react'

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const toggleNavbar = () => {
    setMobileDrawerOpen(prev => !prev);
  };
  return (
    <nav className="py-8">
      <Container className="relative text-sm">
        <div className="flex items-center justify-between">
          <div className="shrink-0">
            <img src={logo} alt="" />
          </div>

          <ul className="hidden lg:flex space-x-10">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link to={item.url}>{item.name}</Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-8">
            <Link to={''} className="text-md">
              Login
            </Link>

            <div className="flex items-center justify-center gap-3">
              <Search size={23} />
              <ShoppingBag size={23} />
              <button onClick={toggleNavbar} className="lg:hidden" aria-label="Menu" aria-expanded={mobileDrawerOpen}>

                {mobileDrawerOpen ? <CircleX /> : <Menu />}
              </button>
            </div>
          </div>
        </div>

        {mobileDrawerOpen && (
          <div className="top-full right-0 z-20 bg-white w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul className='text-black text-center'>
              {navItems.map((item, index) => (
                <li key={index} className="py-4">
                  <Link to={item.url} onClick={() => setMobileDrawerOpen(false)}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        )}

      </Container>
    </nav>
  )
}

export default Navbar
