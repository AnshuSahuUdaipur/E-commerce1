import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import ProductItemContext from '../../contextAPI/ProductItemContext';
import HandleSidebar from '../HandleSidebar';
const TopNav = () => {
  const {topbar}=useContext(ProductItemContext)

  const [sidebar, setsidebar] = useState(false);

  const sidebarhandle = () => {
    setsidebar((prev) => !prev);
  };
   const { searchText,setSearchText,filterProducts  } = useContext(ProductItemContext);
  // // const [filterProduct,setFilterProduct]= useState([])
  // const [searchText, setSearchText] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
<nav className={`fixed w-full z-20 top-0 left-0 border-b border-gray-200 transition-all duration-300 ease-in-out ${topbar ? 'bg-zinc-700 text-white' : 'bg-white text-black'} shadow-md`}>
      <div className=" hidden   lg:block absolute bg-[#374151] w-[18.6%] h-[88px] z-30  items-center justify-center shadow-lg">
        <p className="text-xl font-semibold text-white">
          <img className='  w-[50%] h-[50%] object-cover' src="https://techzaa.getappui.com/larkon/admin/assets/images/logo-light.png" alt="" />
        </p>
      </div>
      <div>
      <HandleSidebar isOpen={sidebar} onClose={sidebarhandle} /> 
      
      </div>

      <div className='flex'>
        <div className="w-[95%] max-w-screen-xl flex mx-auto p-4 justify-between items-center">
          {/* Links Section */}
          <div className="hidden md:flex md:space-x-4 ml-auto flex-grow justify-end">
            <Link to="/home" className="text-gray-800 hover:text-blue-600 text-[20px]" aria-label="Home">
              <i className={`ri-moon-fill ${topbar?'text-white':'text-black'}`}></i>
            </Link>
            <Link to="/about" className="text-gray-800 hover:text-blue-600 text-[20px]" aria-label="About">
              <i className={`ri-notification-3-fill ${topbar?'text-white':'text-black'}`}></i>
            </Link>
            <Link to="" className="text-gray-800 hover:text-blue-600 text-[20px]" aria-label="Services">
              <i onClick={sidebarhandle} className={`ri-settings-2-fill ${topbar?'text-white':'text-black'}`}></i>
            </Link>
            <Link to="/contact" className="text-gray-800 hover:text-blue-600 text-[20px]" aria-label="Contact">
              <i className={`ri-timer-flash-line ${topbar?'text-white':'text-black'}`}></i>
            </Link>
            <Link to="/profile" className="text-gray-800 hover:text-blue-600 flex items-center text-[20px]" aria-label="Profile">
              <img
                src="https://randomuser.me/api/portraits/men/1.jpg"
                alt="Profile"
                className="w-8 h-8 rounded-full"
              />
            </Link>
            
            

               {/* <i class="ri-search-line text-black "></i> */}
               <input
         value={searchText}
         onChange={(e) => setSearchText(e.target.value)}
         
                placeholder='Search...' type="text" className="bg-[#EAE8E8] w-[20vw] border-m h-10 rounded-sm" />
               <button className='bg-red-300 w-[90px] rounded-md ' onClick={filterProducts }>Search</button>

           
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-800 flex items-center"
            aria-label="Toggle mobile menu"
            aria-expanded={isMenuOpen}
          >
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} absolute top-full left-0 w-full bg-[#F9F7F7] border-t border-gray-200`}
      >
        <Link
          to="/home"
          className="block py-2 px-4 text-gray-800 hover:text-blue-600"
          onClick={closeMenu}
          aria-label="Home"
        >
          <i className="ri-moon-fill"></i> Home
        </Link>
        <Link
          to="/about"
          className="block py-2 px-4 text-gray-800 hover:text-blue-600"
          onClick={closeMenu}
          aria-label="About"
        >
          <i className="ri-notification-3-fill"></i> About
        </Link>
        <Link
          to="/services"
          className="block py-2 px-4 text-gray-800 hover:text-blue-600"
          onClick={closeMenu}
          aria-label="Services"
        >
          <i className="ri-settings-2-fill"></i> Services
        </Link>
        <Link
          to="/contact"
          className="block py-2 px-4 text-gray-800 hover:text-blue-600"
          onClick={closeMenu}
          aria-label="Contact"
        >
          <i className="ri-timer-flash-line"></i> Contact
        </Link>
        <Link
          to="/profile"
          className="block py-2 px-4 text-gray-800 hover:text-blue-600"
          onClick={closeMenu}
          aria-label="Profile"
        >
          <img
            src="https://randomuser.me/api/portraits/men/1.jpg"
            alt="Profile"
            className="w-8 h-8 rounded-full inline-block mr-2"
          /> Profile
        </Link>
      </div>
    </nav>
  );
};

export default TopNav;
