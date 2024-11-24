'use client'
import { useState } from 'react';
import { FaSearch, FaShoppingCart, FaUser, FaBars, FaTimes } from 'react-icons/fa';
import logo from '@/assets/logo.png'
import user from '@/assets/user.png'
import shopping from '@/assets/shopping.png'
import menu from '@/assets/menu.png'
import search from '@/assets/search.png'
import Image from 'next/image';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-[#F5F3FF] shadow-md h-[80px]">
      <div className="px-4 xl:px-[160px] flex justify-between items-center py-4">
        {/* Logo and Hamburger */}
        <div className="flex items-center">
          {/* Hamburger Menu - Mobile */}
          <button
            className="lg:hidden mr-4 text-xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FaTimes /> :
              <Image
                width={40}
                height={40}
                alt='menu'
                src={menu}
              />
            }
          </button>
          {/* Logo */}
          <div className="text-2xl font-bold text-gray-800">
            <Image
              width={160}
              height={160}
              alt='logo'
              src={logo}
            />
          </div>
        </div>

        {/* Links - Desktop */}
        <ul className="hidden lg:flex space-x-8 text-gray-600">
          {['Home', 'Shop', 'Deals', "What's New"].map((link, index) => (
            <li
              key={index}
              className="hover:text-violet-500 transition-colors duration-300"
            >
              <a
                href="#"
                className="text-lg font-medium"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Search Bar & Icons */}
        <div className="flex items-center space-x-4">
          {/* Search Bar - Desktop */}
          <div className="hidden lg:flex items-center bg-white rounded-full px-3 py-2  shadow-sm">
            {/* <FaSearch className="" /> */}
            <Image
              width={20}
              height={20}
              alt='search'
              src={search}
            />
            <input
              type="text"
              placeholder="Search"
              className="ml-2 outline-none text-sm w-48 placeholder:text-black"
            />
          </div>
          {/* Search Icon - Mobile */}
          {/* <FaSearch className="text-xl text-gray-800 cursor-pointer lg:hidden" /> */}
          <Image
            width={20}
            height={20}
            alt='search'
            src={search}
            className="text-xl text-gray-800 cursor-pointer lg:hidden"
          />
          {/* Cart Icon */}
          <Image
            width={30}
            height={30}
            alt='shopping'
            src={shopping}
          />
          {/* User Icon */}
          <Image
            width={30}
            height={30}
            alt='user icon'
            src={user}
          />

        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <ul className="lg:hidden bg-white shadow-md space-y-4 py-4 text-gray-600 text-center z-[999] relative">
          {['Home', 'Shop', 'Deals', "What's New"].map((link, index) => (
            <li
              key={index}
              className="hover:text-violet-500 transition-colors duration-300"
            >
              <a
                href="#"
                className="text-lg font-medium"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
