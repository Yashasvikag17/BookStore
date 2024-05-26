import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBarsStaggered, FaBlog, FaXmark } from 'react-icons/fa6';
import { AuthContext } from '../context/Authprovider';

function Navbar() {
  const [ismenuOpen, setMenuOpen] = useState(false);
  const [isSticky, setSticky] = useState(false);

  const{user}= useContext(AuthContext);
  // toggle menu
  const toggleMenu = () => {
    setMenuOpen(!ismenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // navigation items
  const navItems = [
    { link: 'home', path: '/' },
    { link: 'About', path: '/about' },
    { link: 'Shop', path: '/shop' },
    { link: 'Sellyour book', path: '/admin/dashboard' },
    { link: 'Blog', path: '/blog' },
  ];

  return (
    <header className={`w-full fixed top-0 left-0 right-0 transition-all ease-in duration-300 ${isSticky ? 'bg-blue-300' : ''}`}>
      <nav className="py-4 lg:px-24 px-4">
        <div className="flex justify-between items-center text-base gap-8">
          {/* logo */}
          <Link to="/" className="text-2xl font-bold text-blue-700 flex items-center gap-2">
            <FaBlog className="inline-block" />Books
          </Link>

          <ul className="md:flex space-x-12 hidden">
            {navItems.map((item) => (
              <li key={item.link}>
                <Link to={item.path} className="block text-base text-black uppercase cursor-pointer hover:text-blue-700">
                  {item.link}
                </Link>
              </li>
            ))}
          </ul>
          <div className='space-x-12 hidden lg:flex items-center'>
            <button><FaBarsStaggered className='w-5 hover:text-blue-700'/></button>
            {
              user ? user.email :""
            }
          </div>

          {/* toggle button for small screens */}
          {window.innerWidth <= 768 && (
            <div className="md:hidden">
              <button onClick={toggleMenu} className="text-black focus:outline-none">
                {ismenuOpen ? <FaXmark className="h-5 w-5 text-black" /> : <FaBarsStaggered className="h-5 w-5 text-black" />}
              </button>
            </div>
          )}
        </div>

        {/* navitems for small devices */}
        <ul className={`md:hidden space-y-4 px-4 mt-12 py-7 bg-blue-700 ${ismenuOpen ? 'block fixed top-0 right-0 left-0' : 'hidden'}`}>
          {navItems.map((item) => (
            <li key={item.link}>
              <Link to={item.path} className="block text-base text-white uppercase cursor-pointer">
                {item.link}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
